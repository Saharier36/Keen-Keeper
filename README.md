# KeenKeeper — Keep Your Friendships Alive 🤝

> A modern web application built with **Next.js** to help users maintain and track their social interactions.

KeenKeeper provides a seamless way to log communication with friends, filter through interaction history, and visualize social habits using data analytics.

🔗 **Live Demo:** [keen-keeper-sigma.vercel.app](https://keen-keeper-sigma.vercel.app/)

---

## 🛠️ Technologies Used

| Category | Tools |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 & DaisyUI v5 |
| Icons | Lucide React |
| Data Visualization | Recharts |
| State Management | React Context API |
| Language | JavaScript (ES6+) |

---

## ✨ Key Features

### 1. Dynamic Timeline & Interaction Logging
Log different types of interactions — **Calls, Texts, or Video Chats** — with friends. Each entry is displayed in a clean, card-based timeline showing exactly when and how the last contact was made.

### 2. Advanced Filtering, Search & Sorting
- **Search** — Instantly find friends by name
- **Filter** — Categorize interactions by type (Call / Text / Video)
- **Sort** — Organize logs from Newest to Oldest or vice versa

### 3. Interactive Friendship Analytics
The **Stats Page** features a responsive **Donut Pie Chart** that gives a visual breakdown of interaction methods — helping users understand their communication patterns at a glance.

---

## 📁 Project Structure

```
keen-keeper/
├── public/
│   └── friends.json
└── src/
    ├── app/
    │   ├── friend/[id]/       # Dynamic friend profile route
    │   ├── stats/             # Analytics page
    │   ├── timeline/          # Interaction log page
    │   ├── layout.js
    │   ├── loading.jsx
    │   ├── not-found.jsx
    │   └── page.js
    ├── components/
    │   ├── Banner/
    │   ├── Footer/
    │   ├── FriendCard/
    │   └── Navbar/
    ├── context/
    │   └── TimelineContext.jsx
    └── ui/
        ├── CheckInButtons/
        ├── FilterDropdown/
        ├── SearchBar/
        └── SortSelect/
```

---

## 📥 Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/Saharier36/Keen-Keeper.git
cd Keen-Keeper
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

This project is deployed on **Vercel**. Any push to the `main` branch triggers an automatic deployment.

---

## 👨‍💻 Author

**Saharier Omi**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/saharier-omi/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Saharier36)