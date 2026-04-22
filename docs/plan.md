# Portfolio CV — Huu Minh Quang Pham

## Context
Xây dựng portfolio website chuyên nghiệp bằng HTML + CSS + JS thuần để đưa vào CV.
Single Page, Dark + Blue Accent, không cần build step, deploy dễ lên GitHub Pages.

---

## Tech Stack
- **HTML5** — cấu trúc semantic
- **CSS3** — custom properties, flexbox, grid, animations
- **Vanilla JavaScript** — smooth scroll, typing effect, mobile menu, scroll spy
- **AOS.js** (CDN) — animate on scroll, nhẹ ~13KB
- **Typed.js** (CDN) — typing animation ở Hero

Không cần Node.js, không cần build, mở trình duyệt là chạy.

---

## Color System (CSS Variables)
```css
--bg-primary:   #0F172A
--bg-surface:   #1E293B
--border:       #334155
--accent:       #3B82F6
--accent-light: #60A5FA
--text:         #F8FAFC
--text-muted:   #94A3B8
```

---

## Cấu trúc thư mục
```
Portfolio_CV/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── avatar.jpg        (ảnh cá nhân, thêm sau)
│   └── cv.pdf            (file CV, thêm sau)
└── docs/
    └── plan.md
```

---

## Dữ liệu thật từ CV

### Personal Info
- **Name:** Huu Minh Quang Pham
- **Role:** Full-Stack Developer
- **Email:** quangpham151104@gmail.com
- **GitHub:** github.com/QuangPham15
- **LinkedIn:** linkedin.com/in/quangpham15
- **Location:** Minh Khai, Ha Noi

### Skills
| Category | Skills |
|---|---|
| Frontend | React 18, Next.js, TypeScript, JavaScript (ES6+), Zustand, Socket.IO, HTML5, CSS3, Tailwind CSS |
| Backend | Node.js, Express.js, RESTful API, JWT, OAuth 2.0, WebSocket |
| Database | PostgreSQL, SQL, Prisma ORM, Sequelize ORM |
| DevOps & Cloud | Docker, AWS Lambda, Vercel, Render, CI/CD, Git, GitHub |
| Testing | Playwright (E2E) |
| Tools & AI | GitHub Copilot, Claude, Codex, Cursor, Figma, Prompt Engineering |

### Projects
1. **Monday.com Clone** — FPT Internship | 03/2026 – Present
   - Real-time PM tool, 5–10 concurrent users, sub-second sync
   - React 18, TypeScript, Zustand, Socket.IO, Node.js, Express, PostgreSQL (Neon), Prisma
   - 20+ REST endpoints, Playwright E2E, CI/CD Vercel + Render

2. **Olive Branch** — CAP Subject | 08/2025 – 11/2025
   - Web app quản lý hồ sơ & cho vay cho tổ chức phi lợi nhuận
   - React, Firestore, Firebase Auth, Figma
   - Scrum Master, UI/UX lead

3. **Web App Development** — CWA Subject | 09/2025 – 10/2025
   - Next.js app 5 dynamic routes, Escape Room / Court Room modules
   - Next.js, Prisma, Sequelize, PostgreSQL, Docker, AWS Lambda

### Experience
- **FPT Corporation** — Software Engineering Intern | 03/2026 – Present

### Education
- **La Trobe University** (Sydney Campus) | 03/2023 – 11/2025
  - Bachelor of IT (Software Engineering) — 2025
  - Diploma of IT — 2023
  - High Achiever Scholarship — Top 20% (2023, 2024)

---

## Các Section trong index.html

### 1. Navbar (fixed top, blur backdrop)
- Logo: "QP" monogram
- Links: About · Skills · Projects · Experience · Contact
- Hamburger menu trên mobile
- Active class khi scroll (scroll spy qua JS)

### 2. Hero
- "Hi, I'm **Huu Minh Quang Pham**"
- Typed.js: "Full-Stack Developer" / "React + Node.js Engineer" / "AI-Powered Dev"
- Tagline từ CV summary
- Buttons: `[Download CV]` `[GitHub]` `[LinkedIn]`
- Background: CSS grid pattern + blue gradient glow

### 3. About
- 2 cột: paragraph trái, avatar phải
- Nội dung từ Summary trong CV

### 4. Skills
- 6 category cards, badge pill cho mỗi skill
- AOS fade-up stagger

### 5. Projects
- Card lớn cho Monday Clone (featured)
- 2 card nhỏ cho Olive Branch và Web App Dev
- Tech stack badges, tag "Internship @ FPT"

### 6. Experience / Education
- Timeline dọc với CSS ::before pseudo-element
- FPT + La Trobe

### 7. Contact
- Email, GitHub, LinkedIn với SVG icon
- Không dùng form

### 8. Footer
- "Built with HTML · CSS · JS · 2026"

---

## JavaScript (main.js)
- Smooth scroll khi click nav links
- Scroll spy: highlight nav link theo section đang xem
- Hamburger toggle menu mobile
- Navbar shrink on scroll (thêm class `scrolled`)

---

## Bước thực hiện
1. Tạo `index.html` với toàn bộ HTML structure
2. Viết `css/style.css` — reset, variables, layout, components, animations
3. Viết `js/main.js` — scroll spy, smooth scroll, mobile menu
4. Mở `index.html` trực tiếp trên trình duyệt kiểm tra
5. Test responsive 375px / 768px / 1280px
