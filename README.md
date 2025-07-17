
# 🌐 YC Directory

**YC Directory** is a modern web-based directory that showcases **Y Combinator startups** with rich details, sleek design, and dynamic content management. This demo project highlights the power of a **modular and scalable full-stack architecture** using **Next.js**, **Tailwind CSS**, and **Sanity.io**.

[![Vercel Deploy](https://img.shields.io/badge/Live%20Preview-Vercel-000?style=for-the-badge&logo=vercel)](https://yc-directory-weld-five.vercel.app/)

---

## 🎯 Purpose

This project was created to:

- Explore modern web app features using the **Next.js App Router**
- Showcase real-world **CMS integration** with **Sanity.io**
- Build a **clean, responsive**, and developer-friendly UI using **Tailwind CSS**
- Demonstrate support for **Markdown-rich content** via MDX-styled editors

> 🔧 **Can be scaled for:**
> - Startup showcases  
> - Portfolio aggregators  
> - Investment directories  
> - Founder networking platforms

---

## 📦 Features

| Feature                  | Description                                                  |
|-------------------------|--------------------------------------------------------------|
| 📋 **Dynamic Listings**  | Startups are fetched dynamically from Sanity CMS             |
| 🔍 **Real-time Content** | Live sync between CMS and frontend using GROQ                |
| ✍️ **Markdown Editor**   | Admins can write startup pitches with rich markdown support  |
| 🧩 **Reusable Components** | Built with modular and scalable architecture               |
| 💅 **Clean UI**          | Fully responsive, mobile-first design using Tailwind CSS     |
| ⚙️ **Next.js App Router**| Powered by the latest Next.js 14 layout and routing system  |
| 🌐 **SEO Optimized**     | Head tags, Open Graph, semantic HTML for better visibility   |

---

## 🧰 Tech Stack

| Technology              | Role                                                       |
|------------------------|------------------------------------------------------------|
| **Next.js 14**         | React framework with App Router and server-side rendering  |
| **Sanity.io**          | Headless CMS for content management                        |
| **Tailwind CSS**       | Utility-first CSS framework for building modern UIs        |
| **@uiw/react-md-editor** | Markdown editor for pitch input                          |
| **GROQ**               | Query language for structured Sanity content               |
| **Vercel**             | Hosting and CI/CD deployment platform                      |

---

## 📂 Folder Structure

```plaintext
yc-directory/
├── app/                      # App Router routes, layouts, and pages
│   ├── layout.tsx
│   └── page.tsx
├── components/               # Reusable UI components
│   ├── StartUpCard.tsx
│   └── StartUpForm.tsx
├── sanity/                   # CMS schemas, GROQ queries, sanity client
│   ├── schema.ts
│   ├── lib/
│   └── extract.json
├── styles/                   # Global CSS, Tailwind base
├── public/                   # Static assets
├── utils/                    # Helper and validation logic
└── README.md
````

---

## 💻 Local Development

To run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/yc-directory.git
cd yc-directory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=v2023-07-17
```

> 🧠 You’ll need to configure or import the schema into your own Sanity Studio project.

### 4. Start the Development Server

```bash
npm run dev
```

Visit your app at: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Key Concepts Demonstrated

* ✅ **App Router**: Layouts, templates, nested routing
* ✅ **CMS Integration**: Live content updates via Sanity
* ✅ **Form Handling**: Markdown input with minimal validation
* ✅ **Dynamic Rendering**: Server-side fetch on page load
* ✅ **Componentization**: Reusable UI for scalability

---

## 🔮 Future Improvements

| Status | Feature                                 |
| ------ | --------------------------------------- |
| ✅      | User authentication (NextAuth / Clerk)  |
| ✅      | Admin dashboard for pitch submissions   |
| ⏳      | Image optimization for startup logos    |
| ⏳      | Dynamic search & category filters       |
| ⏳      | Pagination / infinite scroll            |
| ⏳      | Founder profiles with social links      |
| ⏳      | PWA support for mobile-first experience |
| ⏳      | Multi-language support (i18n)           |
