# Mohamed Nihal — Personal Portfolio Website

A clean, dark, and minimal portfolio website built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no dependencies, deploys anywhere.

## 🌐 Live Demo
> Add your GitHub Pages link here once deployed

---

## 📁 Project Structure

```
my-portfolio/
├── index.html      ← Page structure & content
├── styles.css      ← All styling, animations, responsive design
├── script.js       ← Cursor, scroll reveal, skill bars, contact form
├── photo.jpg       ← Your profile photo (add this yourself)
└── README.md       ← This file
```

---

## ✨ Features

- Fully responsive — works on mobile, tablet, and desktop
- Custom animated cursor
- Smooth scroll-reveal animations on every section
- Animated skill progress bars
- Project cards with hover effects
- Working contact form (simulated — see integration options below)
- SEO-friendly meta tags
- Dark minimal design with emerald green accent

---

## 🚀 Getting Started Locally

1. Clone or download this repository
2. Add your photo as `photo.jpg` in the project root
3. Open `index.html` in your browser — or use VS Code Live Server

```bash
git clone https://github.com/YOUR_USERNAME/my-portfolio.git
cd my-portfolio
# Open index.html in browser or use Live Server in VS Code
```

---

## ✏️ Personalisation Checklist

Open each file and update the following:

### index.html
- [ ] Replace `nihal@email.com` with your real email (×3 places)
- [ ] Replace `github.com/mohnihal` with your GitHub URL
- [ ] Replace `linkedin.com/in/mohnihal` with your LinkedIn URL
- [ ] Replace the `MN` avatar with your photo: `<img src="photo.jpg" .../>`
- [ ] Update the About section bio text
- [ ] Update the hero stats (years coding, projects built)
- [ ] Add your real project names, descriptions, and GitHub links

### styles.css
- [ ] Change `--accent: #00e5a0` to your preferred accent colour (optional)

---

## 📬 Making the Contact Form Work

Currently the form shows a success message after a delay. To make it actually send emails, integrate one of these free services:

**Option A — Formspree (easiest, no backend needed)**
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form endpoint
3. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

**Option B — EmailJS (sends email from JavaScript)**
1. Go to [emailjs.com](https://emailjs.com) and sign up
2. Follow their setup guide and replace the timeout in `script.js` with their `emailjs.send()` call

---

## 🌍 Deploying to GitHub Pages (Free)

1. Push all files to a GitHub repository
2. Go to your repo → **Settings** → **Pages**
3. Under **Source**, select `main` branch → `/ (root)` → click **Save**
4. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME`

---

## 🛠️ Built With

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (IntersectionObserver, requestAnimationFrame)
- Google Fonts — Syne + Space Mono

---

## 📄 License

This project is open source and available for personal use.

---

*Built as part of the Future Interns Full Stack Web Development Programme — 2026*
