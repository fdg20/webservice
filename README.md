# Repeatless Clone - AI Automation Website

A modern, responsive website similar to [Repeatless](https://www.repeatless.in/) featuring AI-driven automation solutions with smooth animations and scroll-triggered effects.

## 🚀 Features

- **Modern Hero Section** with animated floating cards and gradient backgrounds
- **Scroll-triggered Animations** using Intersection Observer API
- **Responsive Design** optimized for mobile and desktop
- **Interactive Process Steps** with hover effects and visual indicators
- **Case Studies Showcase** with metrics and success stories
- **Testimonials Carousel** with automatic rotation
- **Contact Form** with validation and newsletter signup
- **Smooth Scrolling** navigation between sections

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with CSS Grid and Flexbox
- **AOS (Animate On Scroll)** - Scroll animations
- **Framer Motion** - Advanced animations (ready for future use)
- **Intersection Observer API** - Native scroll detection

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fdg20/webservice.git
   cd webservice
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎨 Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #f59e0b;
  --accent-color: #10b981;
  /* ... other variables */
}
```

### Content
- **Hero Section**: Edit `src/components/Hero.jsx`
- **Services**: Modify `src/components/Services.jsx`
- **Case Studies**: Update `src/components/CaseStudies.jsx`
- **Testimonials**: Change `src/components/Testimonials.jsx`

### Animations
- **Scroll Animations**: Configure in `src/App.jsx` AOS settings
- **Hover Effects**: Modify CSS transitions in component files
- **Floating Cards**: Adjust keyframes in `src/components/Hero.css`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Deploy: `npm run deploy`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Hero.jsx & Hero.css
│   ├── Services.jsx & Services.css
│   ├── Process.jsx & Process.css
│   ├── CaseStudies.jsx & CaseStudies.css
│   ├── Testimonials.jsx & Testimonials.css
│   ├── Contact.jsx & Contact.css
│   └── Footer.jsx & Footer.css
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Key Features Explained

### Hero Section
- Animated gradient background with floating particles
- Floating cards with CSS animations
- Intersection Observer for scroll-triggered animations
- Responsive typography and layout

### Process Section
- Interactive step cards with hover effects
- Visual process diagram with animated circles
- Smooth transitions between active states
- Mobile-optimized horizontal layout

### Case Studies
- Grid layout with hover animations
- Metric cards with color-coded statistics
- Responsive design for all screen sizes
- Smooth scroll-triggered reveals

### Testimonials
- Auto-rotating testimonial carousel
- Navigation dots for manual control
- Smooth transitions between testimonials
- Responsive author information layout

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: contact@repeatless.in
- Phone: +91 9849884501

---

**Built with ❤️ using React and modern web technologies**
