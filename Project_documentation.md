# 🏛️ The Tax Trail - Complete Project Documentation

A React + Node.js (MERN-style) civic education game where users learn about tax compliance through interactive decision-making scenarios.

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Database Schema](#3-database-schema)
4. [API Routes](#4-api-routes)
5. [Frontend Routes](#5-frontend-routes-screens)
6. [Services Needed](#6-services-needed)
7. [Components Needed](#7-components-needed)
8. [Screens Breakdown](#8-screens-breakdown)
9. [Animation & Visual Effects](#9-animation--visual-effects)
10. [Development Phases](#10-development-phases)
11. [Complete File Structure](#11-complete-file-structure)
12. [Environment Variables](#12-environment-variables)
13. [NPM Packages Needed](#13-npm-packages-needed)
14. [Development Environment](#14-development-environment)
15. [Progress Tracker](#15-progress-tracker)
16. [Next Steps](#16-next-steps)
17. [Notes & Decisions](#17-notes--decisions)

---

## 1. Project Overview

The Tax Trail is an immersive civic education game that teaches Zambian citizens about tax compliance through interactive decision-making scenarios. Players experience real-world tax situations faced by different professions, making choices that affect their virtual city's growth and their personal compliance rating.

### 🎯 Mission

Educate Zambian citizens about tax compliance through interactive gameplay, making complex tax concepts accessible and engaging.

### 🌍 Target Audience

- Zambian citizens and residents
- Taxpayers (formal and informal sector)
- Young adults learning about financial literacy
- Students studying economics or business
- Anyone interested in civic education

### 🎮 Game Concept

Players choose a profession, navigate through tax scenarios, and make decisions that impact three core metrics:

- **Compliance Rating** (0–100%)
- **Wallet Balance** (Kwacha)
- **City Growth** (Visual representation)

### 📈 Success Metrics

| Metric              | Target                      |
| ------------------- | --------------------------- |
| User Engagement     | 10+ minutes average session |
| Knowledge Retention | 80%+ on post-game quiz      |
| User Satisfaction   | 4.5/5 rating                |
| Completion Rate     | 70%+ complete all scenarios |

---

## 2. Tech Stack

| Layer                 | Technology               | Version |
| --------------------- | ------------------------ | ------- |
| Backend Runtime       | Node.js                  | 18+     |
| Backend Framework     | Express                  | 4.18+   |
| Database              | MongoDB                  | 6+      |
| ODM                   | Mongoose                 | 7+      |
| Frontend Framework    | React                    | 18+     |
| Build Tool            | Vite                     | 4+      |
| Styling               | CSS-in-JS (inline)       | -       |
| Animations            | Motion (Framer Motion)   | 10+     |
| Game Engine           | Phaser.js (planned)      | 3.60+   |
| Authentication        | JWT                      | 9+      |
| Password Hashing      | bcrypt                   | 5+      |
| HTTP Client           | Fetch API (native)       | -       |
| State Management      | React useState + Context | -       |
| Environment Variables | dotenv                   | 16+     |
| CORS                  | cors                     | 2.8+    |
| Version Control       | Git                      | -       |
| Database GUI          | MongoDB Compass          | -       |
| API Testing           | Postman / Thunder Client | -       |

---

## 3. Database Schema

### 3.1 Users Collection

```javascript
// models/User.js
{
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  gameProgress: {
    professionId: { type: String, default: null },
    compliance: { type: Number, default: 50, min: 0, max: 100 },
    money: { type: Number, default: 0 },
    scenarioIndex: { type: Number, default: 0 },
    completedScenarios: { type: [String], default: [] },
    totalIncome: { type: Number, default: 0 },
    totalTaxPaid: { type: Number, default: 0 },
    lastPlayed: { type: Date, default: Date.now },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}
```

### 3.2 Static Data (Frontend)

**Profession Object**

```javascript
{
  id: "yangoDriver",
  name: "Yango Driver",
  emoji: "🚗",
  color: "#FF6B35",
  description: "A ride-hailing driver navigating Lusaka's streets",
  startingMoney: 2500,
  scenarios: [
    // Array of scenario objects
  ]
}
```

**Scenario Object**

```javascript
{
  id: "yango_s1",
  title: "Monthly Earnings Arrive",
  situation: "You've had a great month on Yango — K2,500 deposited...",
  icon: "💰",
  choices: [
    {
      text: "Declare all K2,500 to ZRA",
      subtext: "Pay K125 turnover tax (5%)",
      outcome: "good",
      consequenceTitle: "Integrity Pays Off!",
      consequenceDesc: "You declared your income honestly...",
      scoreChange: 20,
      moneyChange: -125,
    },
    // 2 more choices (neutral, bad)
  ]
}
```

---

## 4. API Routes

### 4.1 Authentication Routes (`/api/auth`)

| Method | Endpoint  | Description       | Request Body                    | Response          |
| ------ | --------- | ----------------- | ------------------------------- | ----------------- |
| POST   | `/signup` | Create new user   | `{ fullName, email, password }` | `{ token, user }` |
| POST   | `/login`  | Authenticate user | `{ email, password }`           | `{ token, user }` |

### 4.2 Progress Routes (`/api/progress`)

| Method | Endpoint     | Description        | Headers                         | Request Body                                                                                        | Response                         |
| ------ | ------------ | ------------------ | ------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------- |
| GET    | `/progress`  | Load user progress | `Authorization: Bearer <token>` | -                                                                                                   | `{ success, progress }`          |
| POST   | `/progress`  | Save user progress | `Authorization: Bearer <token>` | `{ professionId, compliance, money, scenarioIndex, completedScenarios, totalIncome, totalTaxPaid }` | `{ success, message, progress }` |
| POST   | `/auto-save` | Auto-save progress | `Authorization: Bearer <token>` | `{ progress: { ... } }`                                                                             | `{ success, message, progress }` |

---

## 5. Frontend Routes (Screens)

| Route          | Component         | Description                           | Authentication |
| -------------- | ----------------- | ------------------------------------- | -------------- |
| `/`            | LoginModal        | Authentication gateway (login/signup) | Public         |
| `/start`       | StartScreen       | Main landing page                     | Required       |
| `/profession`  | ProfessionScreen  | Profession selection                  | Required       |
| `/city`        | CityScreen        | Main game view with city & progress   | Required       |
| `/decision`    | DecisionScreen    | Scenario decision screen              | Required       |
| `/consequence` | ConsequenceScreen | Outcome display                       | Required       |
| `/end`         | EndScreen         | Final results and rating              | Required       |
| `/dashboard`   | Dashboard         | User progress dashboard               | Required       |

---

## 6. Services Needed

### 6.1 ✅ Existing Services

| Service            | File                            | Purpose                           |
| ------------------ | ------------------------------- | --------------------------------- |
| Progress Service   | `services/progressService.js`   | Save/load/auto-save user progress |
| Profession Service | `services/professionService.js` | Get profession data, find by ID   |

### 6.2 🚨 Missing Services (Need to Create)

| Service              | File                              | Purpose                                               | Priority  |
| -------------------- | --------------------------------- | ----------------------------------------------------- | --------- |
| Auth Service         | `services/authService.js`         | Login, signup, logout, token management               | 🔴 HIGH   |
| API Service          | `services/apiService.js`          | Base API client with headers, error handling          | 🔴 HIGH   |
| Scenario Service     | `services/scenarioService.js`     | Get scenarios, filter by profession, random selection | 🟡 Medium |
| Game State Service   | `services/gameStateService.js`    | Game state management, calculations, validation       | 🟡 Medium |
| Storage Service      | `services/storageService.js`      | localStorage wrapper (get/set/remove)                 | 🟢 Low    |
| Notification Service | `services/notificationService.js` | Toast/alert management (replace alert())              | 🟢 Low    |
| Validation Service   | `services/validationService.js`   | Input validation (email, password, forms)             | 🟢 Low    |

### 6.3 Service Implementation Requirements

#### Auth Service (`authService.js`)

- [ ] `signup(userData)` — Register new user
- [ ] `login(credentials)` — Authenticate user
- [ ] `logout()` — Clear tokens and user data
- [ ] `getCurrentUser()` — Get user from localStorage
- [ ] `getToken()` — Get JWT from localStorage
- [ ] `isAuthenticated()` — Check if user is logged in
- [ ] `updateUser(userData)` — Update user in localStorage

#### API Service (`apiService.js`)

- [ ] `get(endpoint)` — GET request with auth headers
- [ ] `post(endpoint, body)` — POST request with auth headers
- [ ] `put(endpoint, body)` — PUT request with auth headers
- [ ] `del(endpoint)` — DELETE request with auth headers
- [ ] Error handling interceptor
- [ ] Response parsing helper

#### Scenario Service (`scenarioService.js`)

- [ ] `getScenariosForProfession(professionId)` — Get all scenarios
- [ ] `getRandomScenarios(professionId, count)` — Get random scenarios
- [ ] `getTotalScenarios(professionId)` — Count scenarios
- [ ] `getScenarioById(professionId, scenarioId)` — Get specific scenario

#### Game State Service (`gameStateService.js`)

- [ ] `calculateCompliance(current, change)` — Update compliance
- [ ] `calculateMoney(current, change)` — Update money (can't go negative)
- [ ] `calculateTotalIncome(current, change)` — Track income
- [ ] `calculateTotalTaxPaid(current, change)` — Track tax paid
- [ ] `canAfford(money, change)` — Check if choice is affordable
- [ ] `getGrade(compliance)` — Get grade based on compliance
- [ ] `getCityStatus(compliance)` — Get city status message
- [ ] `getOutcomeColor(outcome)` — Get color for outcome
- [ ] `getOutcomeLabel(outcome)` — Get label for outcome

#### Storage Service (`storageService.js`)

- [ ] `get(key)` — Get item from localStorage
- [ ] `set(key, value)` — Set item in localStorage
- [ ] `remove(key)` — Remove item from localStorage
- [ ] `clear()` — Clear all localStorage
- [ ] `getUser()` / `setUser(user)` — User data helpers
- [ ] `getToken()` / `setToken(token)` / `removeToken()` — Token helpers
- [ ] `getGameState()` / `setGameState(gameState)` — Game state helpers

#### Notification Service (`notificationService.js`)

- [ ] `showSuccess(message)` — Success toast
- [ ] `showError(message)` — Error toast
- [ ] `showInfo(message)` — Info toast
- [ ] `showWarning(message)` — Warning toast
- [ ] `showLoading(message)` — Loading state

#### Validation Service (`validationService.js`)

- [ ] `isValidEmail(email)` — Validate email format
- [ ] `isValidPassword(password)` — Validate password strength
- [ ] `isValidName(name)` — Validate name length
- [ ] `isValidBudget(min, max)` — Validate budget range
- [ ] `validateSignup(data)` — Validate signup form
- [ ] `validateLogin(data)` — Validate login form

---

## 7. Components Needed

### 7.1 ✅ Existing Components

| Component   | File                                | Purpose                      |
| ----------- | ----------------------------------- | ---------------------------- |
| CitySkyline | `components/CitySkyline.jsx`        | Dynamic city visualization   |
| ProgressBar | `components/ProgressBar.jsx`        | Compliance and progress bars |
| LoginModal  | `components/LoginModal.jsx`         | Authentication modal         |
| ExitButton  | `components/screens/ExitButton.jsx` | Reusable exit button         |

### 7.2 🚨 Missing Components (Need to Create)

| Component          | File                            | Purpose                  | Priority  |
| ------------------ | ------------------------------- | ------------------------ | --------- |
| Toast/Notification | `components/Toast.jsx`          | In-app notifications     | 🔴 HIGH   |
| LoadingSpinner     | `components/LoadingSpinner.jsx` | Loading states           | 🔴 HIGH   |
| StatusBadge        | `components/StatusBadge.jsx`    | Outcome badges           | 🟡 Medium |
| ProfessionCard     | `components/ProfessionCard.jsx` | Reusable profession card | 🟡 Medium |
| ChoiceButton       | `components/ChoiceButton.jsx`   | Reusable choice button   | 🟡 Medium |
| StatsCard          | `components/StatsCard.jsx`      | Reusable stats display   | 🟢 Low    |

### 7.3 Component Implementation Requirements

#### Toast/Notification (`Toast.jsx`)

- [ ] Success variant (green)
- [ ] Error variant (red)
- [ ] Info variant (blue)
- [ ] Warning variant (orange)
- [ ] Auto-dismiss after 3–5 seconds
- [ ] Slide in/out animation
- [ ] Multiple toasts stacking

#### LoadingSpinner (`LoadingSpinner.jsx`)

- [ ] Centered spinner
- [ ] Customizable size and color
- [ ] Optional overlay
- [ ] Optional loading text

#### StatusBadge (`StatusBadge.jsx`)

- [ ] Good outcome (green)
- [ ] Neutral outcome (orange)
- [ ] Bad outcome (red)
- [ ] Customizable labels
- [ ] Icon support

#### ProfessionCard (`ProfessionCard.jsx`)

- [ ] Emoji display
- [ ] Profession name and description
- [ ] Starting money
- [ ] Color-coded border
- [ ] Hover effects and click handler

#### ChoiceButton (`ChoiceButton.jsx`)

- [ ] Choice text and subtext
- [ ] Outcome badge
- [ ] Color-coded border
- [ ] Hover effects and click handler

#### StatsCard (`StatsCard.jsx`)

- [ ] Label, value, icon
- [ ] Color variant
- [ ] Animation on change

---

## 8. Screens Breakdown

### 8.1 ✅ Existing Screens

| Screen            | File                            | Purpose              |
| ----------------- | ------------------------------- | -------------------- |
| StartScreen       | `screens/StartScreen.jsx`       | Landing page         |
| ProfessionScreen  | `screens/ProfessionScreen.jsx`  | Profession selection |
| CityScreen        | `screens/CityScreen.jsx`        | Main game view       |
| DecisionScreen    | `screens/DecisionScreen.jsx`    | Scenario decisions   |
| ConsequenceScreen | `screens/ConsequenceScreen.jsx` | Outcome display      |
| EndScreen         | `screens/EndScreen.jsx`         | Final results        |
| Dashboard         | `screens/Dashboard.jsx`         | User dashboard       |

### 8.2 Screen Implementation Requirements

#### StartScreen

- [ ] Animated background rings
- [ ] Logo and title display
- [ ] Stats: Scenarios (5), Professions (dynamic), Kwacha (K)
- [ ] "Start New Game" button → ProfessionScreen
- [ ] "My Dashboard" button → Dashboard
- [ ] "Tax Education Guide" button → ZRA website

#### ProfessionScreen

- [ ] "Choose Your Profession" header
- [ ] Subtitle: "Each profession faces unique tax situations"
- [ ] Profession cards with emoji, name, description, starting money
- [ ] Click handler → CityScreen with random scenarios

#### CityScreen

- [ ] Header: Profession name, Wallet balance, Exit button
- [ ] Dynamic CitySkyline based on compliance
- [ ] City status message overlay
- [ ] Compliance Rating bar
- [ ] Scenarios Completed bar
- [ ] Last Choice Summary
- [ ] "Next Scenario" or "View Final Results" button

#### DecisionScreen

- [ ] Header: "SCENARIO X OF Y", Wallet balance, Exit button
- [ ] Scenario display: Icon, "SITUATION" label, Title, Description
- [ ] 3 choice buttons with text, subtext, outcome badges
- [ ] Color-coded borders based on outcome type

#### ConsequenceScreen

- [ ] Split City Visual (Compliant Path vs Non-Compliant Path)
- [ ] Outcome display: "OUTCOME" label, Title (colored), Description
- [ ] Stats: Compliance change, Money change
- [ ] Tax Tip: Educational message
- [ ] "View Your City" button → CityScreen

#### EndScreen

- [ ] Faded CitySkyline background
- [ ] Rating Card: Emoji, "FINAL RATING", Grade label, Profession
- [ ] Stats Grid: Compliance %, Wallet K, Completed X/Y
- [ ] Progress Bar: Overall Compliance Rating
- [ ] "Did You Know?" educational section
- [ ] "Play Again" button

#### Dashboard

- [ ] Header: Back button, "Dashboard" title, Wallet balance
- [ ] User Stats: Profession emoji + name
- [ ] Compliance Rating: Percentage, Grade label, Progress bar
- [ ] Stats Grid: Total Income, Tax Paid
- [ ] Scenarios Completed count
- [ ] "Change Profession" button → ProfessionScreen
- [ ] "Logout" button → LoginModal

---

## 9. Animation & Visual Effects

### 9.1 Current Animations (Motion)

| Animation    | Component         | Description                 | Status |
| ------------ | ----------------- | --------------------------- | ------ |
| Fade In      | LoginModal        | Modal appears with fade     | ✅     |
| Slide Up     | LoginModal        | Modal slides up from bottom | ✅     |
| Slide In     | ProfessionScreen  | Cards slide in from left    | ✅     |
| Hover Scale  | All Buttons       | Scale and shadow on hover   | ✅     |
| Progress Bar | CityScreen        | Animated progress bars      | ✅     |
| Split Screen | ConsequenceScreen | Two-column city view        | ✅     |
| Rating Card  | EndScreen         | Scale animation on mount    | ✅     |

### 9.2 Proposed Phaser.js Animations

| Animation               | Component         | Priority  | Implementation                             |
| ----------------------- | ----------------- | --------- | ------------------------------------------ |
| City Growth 🏙️          | CityScreen        | 🔴 High   | Buildings grow/shrink based on compliance  |
| Coin Rain 🪙            | DecisionScreen    | 🔴 High   | Coins fall after making choice             |
| Compliance Pulse 💫     | CityScreen        | 🟡 Medium | Glowing pulse around compliance meter      |
| Character Reactions 👤  | All Screens       | 🟡 Medium | Avatar changes expression based on outcome |
| Scenario Transitions 🎬 | Between Screens   | 🟡 Medium | Page curl, shatter, or fade effects        |
| Confetti Celebration 🎉 | EndScreen         | 🟢 Low    | Confetti rain on high compliance           |
| Floating Tax Tips 💡    | ConsequenceScreen | 🟢 Low    | Tips float up from bottom                  |
| Interactive City 🏗️     | CityScreen        | 🟢 Low    | Clickable buildings show tax info          |

### 9.3 Phaser.js Implementation Plan

#### City Growth Animation

```javascript
// Visual: City buildings grow/shrink based on compliance
// Trigger: On compliance change
// Effect: Buildings animate up/down, trees appear/disappear
// Duration: 1-2 seconds
// Implementation: Phaser tween animations
```

| Compliance | Buildings | Trees | Cars | Effect                       |
| ---------- | --------- | ----- | ---- | ---------------------------- |
| 0–30%      | 3–5       | 0     | 0    | Small village, no movement   |
| 31–70%     | 8–12      | 3–5   | 2–3  | Growing town, some activity  |
| 71–100%    | 15+       | 8+    | 5+   | Thriving city, full activity |

#### Coin Rain Effect

```javascript
// Visual: Coins falling from top of screen
// Trigger: After making a choice
// Good choice: Gold coins with sparkle
// Bad choice: Red coins with smoke
// Neutral choice: Blue coins with ripple
// Duration: 1.5 seconds
// Implementation: Phaser particle system
```

---

## 10. Development Phases

### Phase 1: Foundation ✅ Complete

- [x] Project setup (Vite + React)
- [x] Basic routing (screen state management)
- [x] Glass-morphism design system
- [x] Authentication (Login/Signup)
- [x] MongoDB integration
- [x] User model and JWT

### Phase 2: Core Gameplay ✅ Complete

- [x] Profession system (4 professions)
- [x] Scenario system (42 scenarios for YangoDriver)
- [x] Random scenario selection (5 per game)
- [x] Decision making (3 choices per scenario)
- [x] Consequence system (compliance + money changes)
- [x] City visualization (CitySkyline component)

### Phase 3: Progress & Persistence ✅ Complete

- [x] Progress tracking (compliance, money, income, tax)
- [x] Save/Load progress to MongoDB
- [x] Auto-save (every 30 seconds)
- [x] Dashboard (user stats)
- [x] Logout functionality
- [x] Progress loading on login

### Phase 4: Services & Components 🔄 Current

- [ ] Create Auth Service (`authService.js`)
- [ ] Create API Service (`apiService.js`)
- [ ] Create Scenario Service (`scenarioService.js`)
- [ ] Create Game State Service (`gameStateService.js`)
- [ ] Create Storage Service (`storageService.js`)
- [ ] Create Notification Service (`notificationService.js`)
- [ ] Create Validation Service (`validationService.js`)
- [ ] Create Toast/Notification component
- [ ] Create LoadingSpinner component
- [ ] Create StatusBadge component
- [ ] Create ProfessionCard component
- [ ] Create ChoiceButton component
- [ ] Create StatsCard component
- [ ] Replace all `alert()` calls with Toast notifications
- [ ] Add loading states to all screens

### Phase 5: Animations 📋 Planned

- [ ] Install Phaser.js
- [ ] Create PhaserCity component
- [ ] Implement city growth animation
- [ ] Implement coin rain effect
- [ ] Implement compliance pulse
- [ ] Implement character reactions
- [ ] Implement scenario transitions
- [ ] Implement confetti celebration
- [ ] Implement floating tax tips
- [ ] Implement interactive city elements

### Phase 6: Additional Content 📋 Planned

- [ ] Add more professions (Civil Servant, Farmer, etc.)
- [ ] Add more scenarios for existing professions
- [ ] Multi-language support (Bemba, Nyanja)
- [ ] Sound effects and background music
- [ ] Mobile responsiveness improvements
- [ ] Accessibility improvements

### Phase 7: Documentation & Handover 📝 Planned

- [ ] Complete project documentation
- [ ] API documentation
- [ ] User guide
- [ ] Developer setup guide
- [ ] Code comments
- [ ] Video walkthrough (optional)

---

## 11. Complete File Structure

```
Tax Trail v3/
├── Frontend/
│   └── src/
│       └── app/
│           ├── components/
│           │   ├── screens/
│           │   │   ├── StartScreen.jsx
│           │   │   ├── ProfessionScreen.jsx
│           │   │   ├── CityScreen.jsx
│           │   │   ├── DecisionScreen.jsx
│           │   │   ├── ConsequenceScreen.jsx
│           │   │   ├── EndScreen.jsx
│           │   │   ├── Dashboard.jsx
│           │   │   ├── ExitButton.jsx
│           │   │   └── export_all_Screens.js
│           │   ├── Professions/
│           │   │   ├── export_all.js
│           │   │   ├── YangoDriver/
│           │   │   │   ├── YangoDriver.js
│           │   │   │   └── scenarios.js
│           │   │   ├── FreelanceCreative/
│           │   │   │   └── FreelanceCreative.js
│           │   │   ├── ShopOwner/
│           │   │   │   └── ShopOwner.js
│           │   │   └── MarketTrader/
│           │   │       └── MarketTrader.js
│           │   ├── CitySkyline.jsx
│           │   ├── ProgressBar.jsx
│           │   ├── LoginModal.jsx
│           │   ├── Toast.jsx
│           │   ├── LoadingSpinner.jsx
│           │   ├── StatusBadge.jsx
│           │   ├── ProfessionCard.jsx
│           │   ├── ChoiceButton.jsx
│           │   └── StatsCard.jsx
│           ├── services/
│           │   ├── authService.js
│           │   ├── apiService.js
│           │   ├── progressService.js
│           │   ├── professionService.js
│           │   ├── scenarioService.js
│           │   ├── gameStateService.js
│           │   ├── storageService.js
│           │   ├── notificationService.js
│           │   └── validationService.js
│           ├── styles/
│           │   └── glassStyles.js
│           ├── App.jsx
│           └── main.jsx
├── Backend/
│   ├── routes/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── progress.js
│   ├── models/
│   │   └── User.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
├── PROJECT_DOCUMENTATION.md
└── README.md
```

---

## 12. Environment Variables

> Add details here.

---

## 13. NPM Packages Needed

> Add details here.

---

## 14. Development Environment

> Add details here.

---

## 15. Progress Tracker

> Add details here.

---

## 16. Next Steps

> Add details here.

---

## 17. Notes & Decisions

> Add details here.
