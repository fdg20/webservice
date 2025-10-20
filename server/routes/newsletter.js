const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');
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

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email, firstName, lastName, interests } = req.body;
    
    // Get client IP
    const ipAddress = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    
    if (existingSubscriber) {
      if (existingSubscriber.status === 'unsubscribed') {
        // Reactivate subscription
        existingSubscriber.status = 'subscribed';
        existingSubscriber.subscribedAt = new Date();
        existingSubscriber.unsubscribedAt = undefined;
        if (firstName) existingSubscriber.firstName = firstName;
        if (lastName) existingSubscriber.lastName = lastName;
        if (interests) existingSubscriber.interests = interests;
        
        await existingSubscriber.save();
        
        return res.json({
          success: true,
          message: 'Welcome back! You\'ve been resubscribed to our newsletter.',
          subscriber: existingSubscriber
        });
      } else {
        return res.status(400).json({
          success: false,
          message: 'This email is already subscribed to our newsletter.'
        });
      }
    }

    // Create new subscriber
    const subscriber = new Newsletter({
      email,
      firstName,
      lastName,
      interests,
      ipAddress
    });

    await subscriber.save();

    // Send welcome email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      
      const welcomeOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to TechFlow Solutions Newsletter!',
        html: `
          <h2>Welcome to TechFlow Solutions!</h2>
          <p>Hi ${firstName || 'there'},</p>
          <p>Thank you for subscribing to our newsletter! You'll now receive:</p>
          <ul>
            <li>Latest AI automation insights</li>
            <li>Industry case studies</li>
            <li>Exclusive tips and best practices</li>
            <li>Product updates and announcements</li>
          </ul>
          <p>We're excited to share our knowledge and help you stay ahead in the world of AI automation.</p>
          <p>Best regards,<br>The TechFlow Solutions Team</p>
          <hr>
          <p><small>If you no longer wish to receive these emails, you can <a href="${process.env.CLIENT_URL}/unsubscribe?email=${email}">unsubscribe here</a>.</small></p>
        `
      };

      await transporter.sendMail(welcomeOptions);
    }

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      subscriber
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe to newsletter. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    const subscriber = await Newsletter.findOne({ email });
    
    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our newsletter list.'
      });
    }

    if (subscriber.status === 'unsubscribed') {
      return res.json({
        success: true,
        message: 'You have already unsubscribed from our newsletter.'
      });
    }

    subscriber.status = 'unsubscribed';
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();

    res.json({
      success: true,
      message: 'You have been successfully unsubscribed from our newsletter.'
    });

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe. Please try again.'
    });
  }
});

// Get all subscribers (admin only)
router.get('/admin/subscribers', async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query;
    const query = {};
    
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } }
      ];
    }

    const subscribers = await Newsletter.find(query)
      .sort({ subscribedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Newsletter.countDocuments(query);

    res.json({
      success: true,
      subscribers,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get subscribers error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch subscribers'
    });
  }
});

// Send newsletter (admin only)
router.post('/admin/send', async (req, res) => {
  try {
    const { subject, content, subscribers } = req.body;

    if (!subject || !content) {
      return res.status(400).json({
        success: false,
        message: 'Subject and content are required'
      });
    }

    const targetSubscribers = subscribers || await Newsletter.find({ status: 'subscribed' });
    
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      
      for (const subscriber of targetSubscribers) {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: subscriber.email,
          subject: subject,
          html: content.replace(/\[NAME\]/g, subscriber.firstName || 'Valued Subscriber')
        };

        await transporter.sendMail(mailOptions);
      }
    }

    res.json({
      success: true,
      message: `Newsletter sent to ${targetSubscribers.length} subscribers`
    });

  } catch (error) {
    console.error('Send newsletter error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send newsletter'
    });
  }
});

module.exports = router;


