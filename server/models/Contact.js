const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [200, 'Company name cannot exceed 200 characters']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  service: {
    type: String,
    enum: ['workflow-automation', 'chat-agents', 'voice-automation', 'data-analytics', 'integration', 'consultation'],
    default: 'consultation'
  },
  budget: {
    type: String,
    enum: ['under-10k', '10k-50k', '50k-100k', '100k-plus', 'not-sure'],
    default: 'not-sure'
  },
  timeline: {
    type: String,
    enum: ['asap', '1-month', '3-months', '6-months', 'flexible'],
    default: 'flexible'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'proposal', 'closed-won', 'closed-lost'],
    default: 'new'
  },
  source: {
    type: String,
    default: 'website'
  },
  ipAddress: {
    type: String,
    required: true
  },
  userAgent: {
    type: String
  }
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Contact', contactSchema);


