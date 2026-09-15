# 📁 Tax Trail v3 — Folder Structure

This document outlines the current directory and file layout of the **Tax Trail v3** project.

> **Note:** The `Frontend/node_modules/` and `.git/` directories are intentionally excluded from this document because they are generated/version-control directories and are not part of the authored source code.

---

## 🌳 Directory Tree

```
Tax Trail v3/
├── .vscode/
│   └── settings.json
│
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
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── src/
│   │   ├── main.jsx
│   │   ├── app/
│   │   │   ├── App.jsx
│   │   │   ├── game/
│   │   │   │   ├── main.js
│   │   │   │   ├── EventBus.js
│   │   │   │   ├── scenes/
│   │   │   │   │   ├── CoinRainScene.js
│   │   │   │   │   ├── CityScene.js
│   │   │   │   │   └── CharacterScene.js
│   │   │   │   └── objects/
│   │   │   │       └── Character.js
│   │   │   ├── components/
│   │   │   │   ├── Screens/
│   │   │   │   │   ├── export_all_Screens.js
│   │   │   │   │   ├── Exit_Button.jsx
│   │   │   │   │   ├── StartScreen.jsx
│   │   │   │   │   ├── ProfessionScreen.jsx
│   │   │   │   │   ├── CityScreen.jsx
│   │   │   │   │   ├── DecisionScreen.jsx
│   │   │   │   │   ├── ConsequenceScreen.jsx
│   │   │   │   │   ├── EndScreen.jsx
│   │   │   │   │   └── Dashboard.jsx
│   │   │   │   ├── Professions/
│   │   │   │   │   ├── export_all.js
│   │   │   │   │   ├── ShopOwner/
│   │   │   │   │   │   ├── ShopOwner.jsx
│   │   │   │   │   │   └── scenarios.js
│   │   │   │   │   ├── YangoDriver/
│   │   │   │   │   │   ├── YangoDriver.jsx
│   │   │   │   │   │   └── scenarios.js
│   │   │   │   │   ├── FreelanceCreative/
│   │   │   │   │   │   ├── FreelanceCreative.jsx
│   │   │   │   │   │   └── scenarios.js
│   │   │   │   │   └── MarketTrader/
│   │   │   │   │       ├── MarketTrader.jsx
│   │   │   │   │       └── scenarios.js
│   │   │   │   ├── layout/
│   │   │   │   │   └── AppShell.jsx
│   │   │   │   ├── export_all_components.js
│   │   │   │   ├── ChoiceButton.jsx
│   │   │   │   ├── CitySkyline.jsx
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   ├── LoginModal.jsx
│   │   │   │   ├── PhaserGame.jsx
│   │   │   │   ├── ProfessionCard.jsx
│   │   │   │   ├── ProgressBar.jsx
│   │   │   │   ├── StatsCard.jsx
│   │   │   │   ├── StatusBadge.jsx
│   │   │   │   └── Toast.jsx
│   │   │   └── services/
│   │   │       ├── apiService.js
│   │   │       ├── authService.js
│   │   │       ├── gameStateService.js
│   │   │       ├── notificationService.js
│   │   │       ├── professionService.js
│   │   │       ├── progressService.js
│   │   │       ├── scenarioService.js
│   │   │       ├── storageService.js
│   │   │       └── validationService.js
│   │   └── styles/
│   │       ├── fonts.css
│   │       ├── globals.css
│   │       ├── index.css
│   │       ├── tailwind.css
│   │       └── theme.css
│   ├── dist/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── index-DjpwX8v9.js
│   │       └── index-B2oOMw3L.css
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── pnpm-workspace.yaml
│   ├── postcss.config.mjs
│   ├── vite.config.js
│   ├── README.md
│   ├── CODE4AI_CONTEXT.md
│   ├── default_shadcn_theme.css
│   └── fix-common-issues.mjs
│
├── Mon comps/
│   ├── BoardSpace.jsx
│   ├── CornerSpace.jsx
│   ├── CornerTile.jsx
│   ├── GameCorner.jsx
│   ├── GameData.js
│   ├── GameTile.jsx
│   ├── MonopolyBoard.jsx
│   ├── MsonkhoBoard.jsx
│   ├── MsonkhoTycoonBoard.jsx
│   ├── MsonkoTycoonBoard.jsx
│   ├── PlayerToken.jsx
│   ├── PropertySpace.jsx
│   ├── SpecialSpace.jsx
│   └── Tile.jsx
│
├── Project_documentation.md
└── .gitignore
```

---

## 📂 Folder & File Descriptions

### 🗂️ Backend/
Express (Node.js) REST API for the game.

| Path | Purpose |
| ---- | ------- |
| `server.js` | Application entry point; sets up Express, middleware, and routes. |
| `routes/api.js` | General API route definitions. |
| `routes/auth.js` | Authentication-related routes (register/login). |
| `routes/progress.js` | Routes for saving/loading player progress. |
| `models/User.js` | Mongoose schema/model for users. |
| `middleware/auth.js` | JWT authentication middleware. |
| `package.json` / `package-lock.json` | Backend dependency manifests. |

### 🗂️ Frontend/
Vite + React client application.

| Path | Purpose |
| ---- | ------- |
| `index.html` | HTML entry point for the Vite app. |
| `package.json` / `package-lock.json` | Frontend dependency manifests. |
| `vite.config.js` | Vite build/dev server configuration. |
| `postcss.config.mjs` | PostCSS (Tailwind) configuration. |
| `pnpm-workspace.yaml` | pnpm workspace configuration. |
| `README.md` | Frontend-specific readme. |
| `CODE4AI_CONTEXT.md` | Context notes for AI-assisted development. |
| `default_shadcn_theme.css` | Default shadcn/ui theme styles. |
| `fix-common-issues.mjs` | Utility script to fix common issues. |
| `dist/` | Build output generated by Vite. |

#### `Frontend/src/`

| Path | Purpose |
| ---- | ------- |
| `main.jsx` | React entry point that mounts the app. |
| `app/App.jsx` | Root application component and routing. |

##### `src/app/game/` — Phaser game engine code
| Path | Purpose |
| ---- | ------- |
| `main.js` | Phaser game setup/initialization. |
| `EventBus.js` | Event bus bridging Phaser and React. |
| `scenes/CoinRainScene.js` | Coin-rain animation scene. |
| `scenes/CityScene.js` | City visuals scene. |
| `scenes/CharacterScene.js` | Character visuals scene. |
| `objects/Character.js` | Character game object. |

##### `src/app/components/Screens/` — Full-screen UI
| Path | Purpose |
| ---- | ------- |
| `StartScreen.jsx` | Landing/start screen. |
| `ProfessionScreen.jsx` | Profession selection screen. |
| `CityScreen.jsx` | City view screen. |
| `DecisionScreen.jsx` | Decision/scenario screen. |
| `ConsequenceScreen.jsx` | Shows consequences of decisions. |
| `EndScreen.jsx` | Game-over/end screen. |
| `Dashboard.jsx` | Player stats dashboard. |
| `Exit_Button.jsx` | Reusable exit button. |
| `export_all_Screens.js` | Central screen exports. |


##### `src/app/components/Professions/` — Per-profession logic
| Path | Purpose |
| ---- | ------- |
| `ShopOwner/ShopOwner.jsx` + `scenarios.js` | Shop owner profession & its scenarios. |
| `YangoDriver/YangoDriver.jsx` + `scenarios.js` | Yango driver profession & its scenarios. |
| `FreelanceCreative/FreelanceCreative.jsx` + `scenarios.js` | Freelance creative profession & scenarios. |
| `MarketTrader/MarketTrader.jsx` + `scenarios.js` | Market trader profession & its scenarios. |
| `export_all.js` | Central profession exports. |

##### `src/app/components/` — Shared/reusable components
| Path | Purpose |
| ---- | ------- |
| `layout/AppShell.jsx` | Main app layout wrapper. |
| `ChoiceButton.jsx` | Decision choice button. |
| `CitySkyline.jsx` | City skyline visual. |
| `LoadingSpinner.jsx` | Loading indicator. |
| `LoginModal.jsx` | Login modal. |
| `PhaserGame.jsx` | React wrapper around the Phaser game. |
| `ProfessionCard.jsx` | Profession selection card. |
| `ProgressBar.jsx` | Progress indicator. |
| `StatsCard.jsx` | Stat display card. |
| `StatusBadge.jsx` | Compliance/status badge. |
| `Toast.jsx` | Toast notifications. |
| `export_all_components.js` | Central component exports. |

##### `src/app/services/` — Business logic & API helpers
| Path | Purpose |
| ---- | ------- |
| `apiService.js` | Generic API calls. |
| `authService.js` | Authentication logic. |
| `gameStateService.js` | Game state management. |
| `notificationService.js` | Notifications/toasts. |
| `professionService.js` | Profession data logic. |
| `progressService.js` | Player progress logic. |
| `scenarioService.js` | Scenario handling. |
| `storageService.js` | Local storage helpers. |
| `validationService.js` | Input/validation helpers. |

##### `src/styles/` — Global CSS
| Path | Purpose |
| ---- | ------- |
| `globals.css` | Global styles. |
| `index.css` | Main stylesheet entry. |
| `tailwind.css` | Tailwind directives. |
| `theme.css` | Theme variables. |
| `fonts.css` | Font-face declarations. |

### 🗂️ Mon comps/
Standalone/experimental Monopoly-style board components (in-development).

| Path | Purpose |
| ---- | ------- |
| `MonopolyBoard.jsx`, `MsonkhoBoard.jsx`, `MsonkhoTycoonBoard.jsx`, `MsonkoTycoonBoard.jsx` | Board layout variants. |
| `BoardSpace.jsx`, `CornerSpace.jsx`, `CornerTile.jsx`, `GameTile.jsx`, `Tile.jsx`, `SpecialSpace.jsx`, `PropertySpace.jsx` | Different board space/tile types. |
| `GameCorner.jsx`, `PlayerToken.jsx` | Corner & player token components. |
| `GameData.js` | Board/game data. |

### 🗂️ Root files
| Path | Purpose |
| ---- | ------- |
| `Project_documentation.md` | Full project documentation. |
| `.gitignore` | Git ignore rules. |
| `.vscode/settings.json` | Editor/workspace settings. |

---

## ✅ Summary

| Area | Directory | Purpose |
| ---- | --------- | ------- |
| Backend | `Backend/` | Express REST API, models, auth, routes. |
| Frontend | `Frontend/` | Vite + React client, Phaser game, components, services, styles. |
| Experimental | `Mon comps/` | Monopoly-style board component experiments. |
| Docs | `Project_documentation.md` | Full project documentation. |
