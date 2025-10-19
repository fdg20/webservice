# TechFlow Solutions - AI Automation Services

A full-stack React with Node.js application inspired by [Repeatless](https://www.repeatless.in/), featuring AI automation services with professional design and animations.

## Features

- **Modern Design**: Professional dark theme with gradient accents
- **Animated Background**: Floating geometric shapes and gradient orbs
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion powered animations
- **Full-Stack**: React frontend with Node.js/Express backend
- **Database Integration**: MongoDB for data persistence
- **Email Integration**: Automated email notifications
- **Deployment Ready**: Configured for Render deployment

## Tech Stack

### Frontend
- React 18
- Framer Motion (animations)
- React Icons
- Axios (API calls)
- CSS3 (Grid, Flexbox, Custom Properties)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (email service)
- CORS, Helmet (security)

## Quick Start

### Local Development

1. **Install dependencies:**
```bash
npm install
cd client && npm install
```

2. **Set up environment variables:**
```bash
cp env.example .env
# Edit .env with your configuration
```

3. **Start development servers:**
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

### Production Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env` file with the following variables:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/repeatless-clone
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourcompany.com
CLIENT_URL=https://your-app-name.onrender.com
```

## Deployment on Render

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Render
3. Render will automatically detect the `render.yaml` file
4. Set your environment variables in Render dashboard

### Option 2: Manual Setup

1. **Create a new Web Service on Render**
2. **Connect your GitHub repository**
3. **Configure build settings:**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: Node

4. **Add environment variables:**
   - `NODE_ENV`: production
   - `MONGODB_URI`: Your MongoDB connection string
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password
   - `ADMIN_EMAIL`: Admin email for notifications
   - `CLIENT_URL`: Your Render app URL

5. **Create a MongoDB database:**
   - Add a new MongoDB database on Render
   - Copy the connection string to `MONGODB_URI`

## API Endpoints

### Contact Form
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/admin/all` - Get all contacts (admin)
- `PATCH /api/contact/admin/:id/status` - Update contact status

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter
- `GET /api/newsletter/admin/subscribers` - Get all subscribers (admin)

### Health Check
- `GET /api/health` - Server health status

## Database Models

### Contact
- Personal information (name, email, company, phone)
- Message details
- Service preferences
- Status tracking
- Timestamps

### Newsletter
- Email subscription
- User preferences
- Subscription status
- Timestamps

## Email Configuration

The application uses Gmail for sending emails. To set up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use the app password in `EMAIL_PASS` environment variable

## Features Overview

### Frontend Sections
1. **Header**: Navigation with smooth scrolling
2. **Hero**: Eye-catching landing section with stats
3. **Services**: AI automation solutions showcase
4. **Process**: Step-by-step implementation process
5. **Case Studies**: Real-world success stories
6. **Testimonials**: Client feedback carousel
7. **Footer**: Contact info and newsletter signup

### Backend Features
- RESTful API endpoints
- MongoDB integration
- Email automation
- Security middleware
- Rate limiting
- Error handling

## Customization

### Styling
- Modify CSS variables in `client/src/App.css`
- Update color schemes and gradients
- Adjust animations in component CSS files

### Content
- Update text content in component files
- Modify service offerings in `Services.js`
- Change case studies in `CaseStudies.js`

### Functionality
- Add new API endpoints in `server/routes/`
- Extend database models in `server/models/`
- Customize email templates

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For deployment issues or questions, please check:
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)