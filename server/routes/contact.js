const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const { name, email, company, phone, message, service, budget, timeline } = req.body;
    
    // Get client IP and user agent
    const ipAddress = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      company,
      phone,
      message,
      service,
      budget,
      timeline,
      ipAddress,
      userAgent
    });

    await contact.save();

    // Send notification email to admin
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `New Contact Form Submission - ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `
      };

      await transporter.sendMail(mailOptions);
    }

    // Send auto-reply to customer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      
      const autoReplyOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting us - TechFlow Solutions',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your interest in our AI automation services. We've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to explore our case studies and learn more about how we've helped businesses like yours transform their operations.</p>
          <p>Best regards,<br>The TechFlow Solutions Team</p>
        `
      };

      await transporter.sendMail(autoReplyOptions);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      contactId: contact._id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get all contacts (admin only)
router.get('/admin/all', async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query;
    const query = {};
    
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      contacts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

// Update contact status
router.patch('/admin/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated',
      contact
    });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact'
    });
  }
});

module.exports = router;


