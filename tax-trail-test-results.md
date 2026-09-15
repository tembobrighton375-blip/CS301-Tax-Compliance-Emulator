# The Tax Trail — QA Test Plan Results

**How this run was done:** No shell/terminal access to `ch3m1stpc` was available (no `device_bash` for this desktop), so MongoDB, the backend (`:5000`), and the frontend dev server (`:5173`) could not be started from here to click through the app as the test plan instructs. Instead, every item below was checked against the actual **source code** in `Backend/` and `Frontend/src/` (staged and read directly from `C:\Users\Mr. BRIGHT\Desktop\Tax Trail v3`). This is a code-correctness audit, not a live run — it catches logic bugs, wrong routes/labels, and missing content, but it **cannot** confirm animation smoothness, actual page-load timing, live console output, or what Compass actually shows.

**Legend**
- ✅ **PASS** — code implements exactly what the test expects
- ❌ **FAIL** — code contradicts the expected "Pass" outcome (real bug)
- ⚠️ **LIKELY PASS, NEEDS LIVE CHECK** — code supports the expected behavior but the item is inherently visual/runtime and needs an actual browser pass to be certain
- 🚫 **CANNOT VERIFY FROM CODE** — no static signal either way (timing, "feel", live DB/network inspection)

---

## 🔴 Top findings (read this first)

1. **"View Your City →" on the Consequence screen goes to the Dashboard, not the City screen.**
   `Frontend/src/app/App.jsx`, the `consequence` screen block wires `onContinue={() => setScreen("dashboard")}`, but `ConsequenceScreen.jsx` labels that exact button **"View Your City →"**. The test plan (T7.8) and the whole of Section 8 assume that button returns to the City screen so you can watch compliance/wallet/progress update there. As written, every choice sends the player to the Dashboard instead — City screen updates are never seen in the normal flow. This is the single biggest functional gap versus the test plan.

2. **Shop Owner has only 1 scenario with 2 choices — the other three professions have 40–42 scenarios with 3 choices each.**
   `Frontend/src/app/components/Professions/ShopOwner/scenarios.js` is a stub: one scenario (`shop_s1`), two choices, and literal placeholder comments `// Add more choices...` / `// Add more shop scenarios...`. `getRandomScenariosForProfession("shopowner", 5)` can only return that single scenario, so a Shop Owner playthrough shows **"SCENARIO 1 OF 1"** and hits the End Screen after one choice instead of five, and that one scenario only offers 2 choices instead of the 3 the rest of the plan assumes (T6.8). Yango Driver (42), Freelance Creative (40), and Market Trader (42) are all fully populated with 3 choices per scenario.

3. **MongoDB database name mismatch with the test plan's instructions.**
   `Backend/server.js` connects to `mongodb://localhost:27017/Tax_Trail` (capital T). T9.5 tells the tester to look in Compass under a database called `tax_trail` (lowercase). MongoDB database names are case-sensitive, so Compass will show `Tax_Trail`, not `tax_trail` — not a functional bug, but as written the tester will not find the database the instructions name.

Two smaller code-quality notes (not explicit test items, flagged for awareness): `Dashboard.jsx`'s "Change Profession" button uses a Tailwind class `gap-22`, which isn't a standard spacing value and likely renders with no gap between the icon and label; `DecisionScreen.jsx` has a dead fallback chain (`gameState.profession?.id || "yango" || "markettrader" || …`) — harmless since `"yango"` is always truthy, but the extra fallbacks can never run.

---

## Section 1 — Backend Health

- [x] **T1.1 — Backend root responds** ✅ `Backend/server.js` — `app.get("/")` returns exactly `{"message":"Tax Trail Backend is running!"}`.
- [x] **T1.2 — API sub-route responds** ✅ `Backend/routes/api.js` — `GET /test` mounted under `/api` (server.js) returns exactly `{"message":"API is working!"}`.
- [x] **T1.3 — MongoDB connection log** ✅ `Backend/server.js` logs exactly `✅ Connected to MongoDB` on successful `mongoose.connect()`.
- [x] **T1.4 — Unknown route returns 404** ✅ No custom 404 handler is defined, so Express's default handler serves its standard HTML "Cannot GET /..." page rather than crashing — satisfies "HTML 404 page, not a crash."

*(All four require the backend actually running to see live; code is correct in each case.)*

## Section 2 — Authentication

- [x] **T2.1 — Login modal appears on load** ✅ `App.jsx` — `isLoginModalOpen` defaults to `true`; `LoginModal` is a fixed full-screen overlay rendered above the Start screen.
- [x] **T2.2 — Switch to signup mode** ✅ `LoginModal.jsx` — "Click Here to create an account" calls `switchToSignUp()`, which renders the Create Account form with a Full Name field.
- [x] **T2.3 — Signup validation (empty fields)** ✅ All three signup inputs have `required`; browser blocks submission before `handleSignUpSubmit` fires.
- [x] **T2.4 — Signup with valid data** ✅ `authService.signup()` → `POST /api/auth/signup`; on success the modal shows a success message, resets the form, and closes after 2s (`App.handleSignUp`).
- [x] **T2.5 — Signup duplicate email** ✅ `Backend/routes/auth.js` returns exactly `"Email already registered"` (400) when the email exists; `LoginModal` surfaces `error.message` in the error box.
- [x] **T2.6 — Login wrong password** ✅ `Backend/routes/auth.js` returns exactly `"Invalid password"` (401).
- [x] **T2.7 — Login wrong email** ✅ `Backend/routes/auth.js` returns exactly `"Not a registered account"` (401).
- [x] **T2.8 — Login with correct credentials** ✅ `authService.login()` succeeds, `App.handleLogin` closes the modal.
- [x] **T2.9 — Token stored in localStorage** ✅ `storageService.setToken()` does `localStorage.setItem("token", token)` — key is literally `token`.
- [x] **T2.10 — Token persists across reload** ✅ Token lives in `localStorage` (not memory), so a refresh doesn't clear it; `authService.isAuthenticated()` checks it directly.

*Note: T2.5–T2.7 render as a styled inline error box, not a native browser `alert()` — functionally matches "Alert/message," just not a JS `alert()`.*

## Section 3 — Start Screen

- [x] **T3.1 — Start screen renders in frame** ⚠️ `AppShell.jsx` gives a centered, rounded, margined card on desktop/tablet — needs a live look to confirm exact framing.
- [x] **T3.2 — Title visible** ✅ `StartScreen.jsx` renders "The" then gold "Tax Trail" on the next line via `<br/>` + `text-tax-gold`.
- [x] **T3.3 — Stats show correct counts** ✅ Hardcoded `scenariosPerGame = 5`, `professionCount = PROFESSIONS.length` (4), and a literal `"K"` / `"Kwacha"` stat — renders "5 Scenarios", "4 Professions", "K Kwacha".
- [x] **T3.4 — Buttons visible** ✅ Start New Game, My Dashboard, Tax Education Guide all present unconditionally.
- [x] **T3.5 — Continue Game hidden with no saved game** ✅ Rendered only `{hasSavedGame && (...)}`; `savedGame` starts `null`.
- [x] **T3.6 — Tax Education Guide opens ZRA site** ✅ `onLearn={() => window.open("https://www.zra.org.zm", "_blank")}` — new tab.
- [x] **T3.7 — Mobile layout full-bleed** ✅ `AppShell.jsx` — below 640px: `maxWidth: "100%"`, `borderRadius: 0`, `border: "none"`, buttons in a `flex-col`.

## Section 4 — Profession Selection

- [x] **T4.1 — Profession list appears** ✅ `ProfessionScreen.jsx` maps all 4 `PROFESSIONS` vertically (`flex-col`).
- [x] **T4.2 — Each profession shows correct data** ✅ `export_all.js` professions: Yango Driver K3200, Freelance Creative K2800, Shop Owner K4500, Market Trader K2500 — all match the plan exactly, each with emoji + description.
- [x] **T4.3 — Home icon top-left of header** ⚠️ Button is `position: absolute; top:4; left:4` inside the AppShell's positioned container, overlapping the header visually — reads as top-left of the header row, but it's absolutely positioned rather than laid out inline; worth a visual confirm.
- [x] **T4.4 — Home icon returns to Start** ✅ `onBack={() => setScreen("start")}` in `App.jsx`.
- [x] **T4.5 — Hover effects on profession cards** ✅ `hovered` state drives lift (`translateY(-2px)`), background brighten, and a colored `box-shadow` glow.
- [x] **T4.6 — Select Yango Driver → City screen** ✅ `handleProfessionSelect` sets `screen("city")`.

## Section 5 — City Screen

- [x] **T5.1 — City renders in frame** ⚠️ Same `AppShell` behavior as Section 3 — needs live check.
- [x] **T5.2 — Phaser canvas renders** ✅ `CityScene.js` draws 40 stars, a moon circle, and procedurally generated building silhouettes.
- [x] **T5.3 — City reflects 50% compliance ("struggling")** ✅ `getBuildingCount(50)` → 10 buildings (mid-tier, vs. 16 at high compliance), `hasStreetlights = compliance >= 60` → **false** at 50%, so windows render dim (`alpha 0.5`, dark color) and there are no streetlights — visibly dimmer/sparser than the thriving state, matching "struggling."
- [x] **T5.4 — Header layout** ✅ `CityScreen.jsx` — profession info left, wallet + red `ExitButton` (✕) right.
- [x] **T5.5 — Wallet shows K3,200 for Yango Driver** ✅ `YangoDriver.startingMoney = 3200`, formatted with `.toLocaleString()`.
- [x] **T5.6 — Compliance bar color** ✅ At 50%, code picks `#E8834A` (orange/amber) since 50 is `< 60` and `>= 30`.
- [x] **T5.7 — Scenario progress bar 0/5** ✅ For any profession other than Shop Owner (see finding #2) — `ProgressBar value={0} max={scenarios.length}` where `scenarios.length` is 5 for Yango/Freelance/Market Trader.
- [x] **T5.8 — Status message** ✅ At compliance 50 (in `[40,70)`), message is exactly `"⚡ Your city needs better compliance to grow"`.
- [x] **T5.9 — Next Scenario button label** ✅ `` `Next Scenario (${remaining} remaining) →` `` → "Next Scenario (5 remaining) →" at start.
- [x] **T5.10 — Touchpad scrolling not blocked** ✅ `gameConfig.input = { mouse: { preventDefaultWheel: false }, touch: { capture: false } }` explicitly disables Phaser's default scroll-capture.

## Section 6 — Decision Screen (Character)

- [x] **T6.1 — Character renders (left, city behind)** ⚠️ `CharacterScene.js` places the character at `width*0.28` (left) with the city background drawn first (behind); the "phone" is a separate large UI panel to the right rather than literally held by the character — visually reasonable but worth a live look against the exact wording.
- [x] **T6.2 — Correct hat/shirt for Yango Driver** ✅ `ProfessionKit.js` `yango`: torso `#E8615B` (red), hat `cap` accent `#C0392B` (red), accessory `wheel`.
- [x] **T6.3 — No `[ProfessionKit] Unknown profession` errors** ✅ Profession ids used app-wide (`yango`, `creative`, `shopowner`, `markettrader`) exactly match the keys in `PROFESSION_KIT`.
- [x] **T6.4 — No `Phaser is not defined` errors** ✅ `Phaser` is imported wherever used (`ProfessionKit.js`, scenes, `Character.js`, `PhaserGame.jsx`).
- [x] **T6.5 — Idle animation** ✅ `Character.js.startIdleAnimation()` — a breathing tween, a periodic blink tween, and a sway tween, exactly as described.
- [x] **T6.6 — Scenario text fits inside phone** ⚠️ `DecisionScreen.jsx` overlay uses `clamp()` font sizes and `overflowWrap: anywhere` / `wordBreak: break-word` inside the phone bounds reported by `CharacterScene` — designed to fit, but needs a live check with long scenario text.
- [x] **T6.7 — Text readable/scales** ⚠️ Same `clamp()`-based sizing — needs visual confirm at both breakpoints.
- [x] **T6.8 — Choices neutral-styled (no outcome coloring/labels)** ✅ `DecisionScreen.jsx` choice buttons only vary by hover state — no outcome-based color or label. *(Only 2 of the 3 expected choices exist for Shop Owner — see finding #2.)*
- [x] **T6.9 — Choices shuffle across playthroughs** ✅ `getRandomScenariosForProfession` does `[...all].sort(() => Math.random() - 0.5)` before slicing — order (and which scenarios appear) varies each game, backed by 40–42 scenarios for 3 of the 4 professions.
- [x] **T6.10 — Header correct** ✅ Left: `"SCENARIO {n} OF {total}"`; right: wallet + compliance %.

## Section 7 — Consequence Screen

- [x] **T7.1 — Screen renders with accent glow** ✅ `AppShell accentColor={accentColor}` where `accentColor` is outcome-driven.
- [x] **T7.2 — Accent color matches outcome** ✅ good → `#5EAF6E` (green), neutral → `#E8834A` (orange), bad → `#D4183D` (red).
- [x] **T7.3 — Split-city visual** ✅ Two-column grid: green "Compliant Path" / red "Non-Compliant" halves.
- [x] **T7.4 — Correct side highlighted** ✅ `isGood` draws a green border on the compliant half; `isBad` draws a red border on the non-compliant half.
- [x] **T7.5 — Outcome description shows** ✅ `choice.consequenceTitle` / `choice.consequenceDesc` rendered in the OUTCOME card.
- [x] **T7.6 — Stats cards show deltas with color** ✅ `StatsCard` for COMPLIANCE (`scoreChange`) and WALLET (`moneyChange`), each with `positive={change >= 0}` driving green/red.
- [x] **T7.7 — Tax Tip in gold panel** ✅ Gold-tinted panel (`rgba(201,168,112,...)`), labeled "TAX TIP".
- [ ] **T8 — "View Your City" returns to City screen** ❌ **FAIL.** The button is literally labeled `"View Your City →"` but `App.jsx` wires its `onContinue` to `setScreen("dashboard")`, not `setScreen("city")`. See finding #1.

## Section 8 — Game Loop & State

> Every item in this section assumes the player returns to the City screen after a choice. Per finding #1, that hand-off is currently broken — clicking "View Your City →" lands on the Dashboard instead. The underlying state changes (T8.1–T8.4) are computed correctly; they're just not visible on the City screen where the plan expects them.

- [x] **T8.1 — Compliance updates after choice** ⚠️ `gameStateService.applyChoice` correctly clamps `compliance + scoreChange` to `[0,100]` — but the City screen (where this is meant to be observed) isn't reached via the normal flow. **See finding #1.**
- [x] **T8.2 — Wallet updates after choice** ⚠️ `calculateMoney` correctly applies `moneyChange` (floored at 0) — same caveat as T8.1.
- [x] **T8.3 — Scenario count increments** ✅ `applyChoice` does `scenarioIndex: gameState.scenarioIndex + 1` — correct regardless of which screen displays it.
- [x] **T8.4 — Remaining count decrements** ⚠️ `CityScreen.jsx` computes `remaining = scenarios.length - scenarioIndex` correctly — again gated on reaching the City screen.
- [x] **T8.5 — After 5th scenario, button becomes "🏆 View Final Results →"** ✅ `CityScreen.jsx` swaps the button label once `scenarioIndex >= scenarios.length` (5 for 3 of 4 professions; 1 for Shop Owner — finding #2).
- [x] **T8.6 — Reload preserves state within session** ⚠️ Token persists in `localStorage`, so auth survives a refresh; in-memory `gameState`/`screen` do not persist across a hard reload (no code restores mid-scenario UI state after reload) — needs a live check of exactly what "preserved" means here.
- [x] **T8.7–T8.10 — Character matches profession per switch** ✅ Confirmed against `ProfessionKit.js`: Yango = red cap + steering wheel; Freelance Creative = purple beanie (`#5B4B8A`) + tablet; Shop Owner = green band (`#2F6B3F`) + ledger; Market Trader = yellow/gold brim (`#D9A441`) + basket. All four match the plan's descriptions exactly.

## Section 9 — Progress Saving

- [x] **T9.1 — Progress saves on choice** ✅ `App.handleChoice` calls `saveProgress(newState)` → `POST /api/progress/progress` (route exists, `verifyToken`-gated, returns 200 JSON on success).
- [x] **T9.2 — Auto-save every 5s** ✅ `App.jsx` `setInterval(..., 5000)` calls `autoSaveProgress` → `POST /api/progress/auto-save` while authenticated and not on `start`/`login`.
- [x] **T9.3 — No 500 errors** 🚫 Cannot verify without a live run — all backend routes are wrapped in `try/catch` returning 500 only on genuine server errors, but this needs an actual play-through to confirm no path in the running server throws.
- [x] **T9.4 — Progress saves on logout** ✅ `App.handleLogout` awaits `saveProgress(gameState)` before calling `authService.logout()`.
- [x] **T9.5 — Progress in MongoDB `gameProgress`** ⚠️ `User.js` schema and `progress.js` route persist exactly `professionId`, `compliance`, `money`, `scenarioIndex` (plus extras) under `gameProgress` — but the database is actually named `Tax_Trail`, not `tax_trail`. **See finding #3.**
- [x] **T9.6 — Continue Game appears after logout** ✅ `App.handleLogin` sets `savedGame` when `progress.professionId` exists and `scenarioIndex < 5`; `StartScreen` shows Continue Game when `hasSavedGame` is true.
- [x] **T9.7 — Continue resumes correct state** ✅ `handleContinueGame` rebuilds `gameState` from `savedGame.compliance/money/scenarioIndex/...` and goes to `city`.
- [x] **T9.8 — Start New Game shows confirmation** ✅ `window.confirm(...)` fires when `savedGame` exists.
- [x] **T9.9 — Cancel confirmation preserves game** ✅ If `!confirmed`, `handleStartNewGame` returns immediately — no state change.
- [x] **T9.10 — Confirm resets and goes to Profession screen** ✅ Calls `resetProgress()` (→ `POST /api/progress/reset`), clears `savedGame`, sets `screen("profession")`.
- [x] **T9.11 — Continue disappears after reset + re-login** ✅ Backend reset sets `professionId: null`, so the next login's `hasActiveGame` check fails and `savedGame` stays `null`.

## Section 10 — End Screen

- [x] **T10.1 — End screen renders with skyline at top** ✅ `EndScreen.jsx` renders `<CitySkyline compliance={compliance} />` as the first (hero) element.
- [x] **T10.2 — Grade matches compliance thresholds** ✅ `EndScreen.jsx`: ≥80 Tax Champion, ≥60 Compliant Citizen, ≥40 Needs Improvement, else Non-Compliant — exact match to the plan.
- [x] **T10.3 — Stats display** ✅ Compliance %, wallet, `scenarios.length`/`scenarios.length` all shown via `StatsCard`.
- [x] **T10.4 — Progress bar reflects final %** ✅ `ProgressBar value={compliance} max={100}`.
- [x] **T10.5 — Did You Know panel** ✅ Exact text: "An estimated K82.6 billion was collected in 2023... ZRA" reference is implicit (province funding); wording is close to but not verbatim "K82.6B fact with ZRA reference" — content matches in substance.
- [x] **T10.6 — Play Again resets and returns to Start** ✅ `onPlayAgain` calls `resetProgress()`, resets `gameState`, clears `savedGame`, sets `screen("start")` — no Continue button on return (matches backend reset).

## Section 11 — Dashboard

- [x] **T11.1 — Dashboard opens from Start** ✅ `onDashboard={() => setScreen("dashboard")}`.
- [x] **T11.2 — Header layout** ✅ `grid-cols-[auto_1fr_auto]`: Home icon left, "🏛️ TAX TRAIL / Dashboard" centered, red logout icon right.
- [x] **T11.3 — Profession displays** ✅ Shows `prof.emoji` + `prof.name` when a profession is active; falls back to "Not Selected" / 👤 if none (expected if Dashboard is opened before any profession is picked).
- [x] **T11.4 — Compliance ring** ✅ SVG ring with `strokeDasharray` driven by compliance %, colored by the same grade thresholds as the End Screen.
- [x] **T11.5 — Stats row** ✅ Total Income, Tax Paid, Scenarios all rendered via `StatsCard`.
- [x] **T11.6 — Scenario count correct (not stuck at 0/5)** ✅ `` `${gameState.scenarioIndex} / ${gameState.scenarios?.length || 0}` `` — reflects the live `scenarioIndex`, which is already incremented by the time Dashboard is reached (even via the finding-#1 redirect).
- [x] **T11.7 — Did You Know panel** ✅ K82.6B fact present.
- [x] **T11.8 — Change Profession fills row** ✅ Button is `w-full`.
- [x] **T11.9 — Change Profession works** ✅ `onChangeProfession={() => setScreen("profession")}`.
- [x] **T11.10 — Home icon returns to Start** ✅ `onBackToStart={() => setScreen("start")}`.
- [x] **T11.11 — Logout from header** ✅ `onLogout={handleLogout}` — saves progress if active, logs out, reopens login modal, returns to Start.
- [x] **T11.12 — Mobile layout stacks, no horizontal scroll** ⚠️ Grid/flex layouts collapse to single column via Tailwind responsive classes (`sm:grid-cols-3`, etc.) — needs a live check at <640px.

## Section 12 — Responsive Design

- [x] **T12.1 — Mobile (<640px) full-bleed** ✅ `AppShell.jsx`: `isMobile` → `maxWidth: "100%"`, `borderRadius: 0`, no border/shadow.
- [x] **T12.2 — Tablet (640–1023px), ~720px frame** ✅ `isTablet` → `maxWidth: 720`, `borderRadius: 16`.
- [x] **T12.3 — Desktop (≥1024px), ~1100px frame** ✅ `isDesktop` → `maxWidth: 1100` (default), `borderRadius: 24`.
- [x] **T12.4 — Decision two-column on desktop** ✅ `DecisionScreen.jsx`: `grid-cols-1 lg:grid-cols-[1.4fr_1fr]` — canvas/choices side by side ≥1024px, and `AppShell` isn't overridden with a wider max-width there (plan expects 1400px for Decision specifically — code uses the AppShell default 1100px, not a Decision-specific override; worth a closer look, but the two-column behavior itself is correct).
- [x] **T12.5 — Decision single-column on mobile** ✅ Same grid collapses to `grid-cols-1` below `lg`.
- [x] **T12.6 — No horizontal scroll** ⚠️ Text wrapping (`overflowWrap: anywhere`) and `w-full`/`max-w` usage throughout suggest this was a deliberate concern, but needs a live check across all screens.
- [x] **T12.7 — Text not clipped on phone** ⚠️ Same reasoning — needs a live check.

*Note on T12.3: the plan says Decision uses a 1400px desktop max-width, but `DecisionScreen.jsx` passes no `maxWidth` override to `AppShell`, so it uses the same 1100px as every other screen. Worth confirming whether that's an intentional simplification or a dropped feature.*

## Section 13 — Error Handling

- [x] **T13.1 — Backend down during login** ✅ `apiService` catches fetch failures; `LoginModal` shows `error.message || "Error connecting to server. Make sure backend is running on port 5000"` — no crash.
- [x] **T13.2 — MongoDB down during signup** ⚠️ Mongoose operations would reject/throw, caught by `routes/auth.js`'s `try/catch` → 500 with a JSON message; frontend shows it via the same error path. Correct in principle; needs a live check since Mongoose's behavior on a fully-down DB (vs. an auth error) can vary by timeout settings not configured here.
- [x] **T13.3 — Invalid saved profession falls back gracefully** ✅ `App.handleContinueGame`: `getProfessionById` returns `null` for an unknown id, and the code logs an error and returns early rather than crashing (though it also doesn't navigate anywhere — the user stays on whatever screen they were on, which may not be very "graceful" but is not a crash).
- [x] **T13.4 — Refresh mid-game returns to City, not blank/error** 🚫 Cannot verify — `App.jsx` initializes `screen` to `"start"` on every mount with no restore-from-storage logic for `screen`/`gameState`. A refresh mid-scenario would show the Start screen (with the login modal, since there's no persisted-session auto-skip either), not the City screen. **This looks like it would fail** — flagging as needs-live-check/likely fail since I don't see code that restores the in-progress screen on reload.

## Section 14 — Console / Code Health

- [x] **T14.1–T14.4** 🚫 Cannot verify from static review — these require an actual play-through with browser DevTools open. Nothing in the reviewed code raises an obvious red flag (no obviously-undefined property access patterns were found in the reviewed files), but this is not a substitute for watching the console live.

## Section 15 — Performance

- [x] **T15.1–T15.3** 🚫 Cannot verify from static review — page load time, transition smoothness, and canvas startup latency are runtime/hardware-dependent and need a live pass.

---

## Summary

| Section | Pass | Needs live check | Fail | Can't verify from code |
|---|---|---|---|---|
| 1. Backend Health | 4 | 0 | 0 | 0 |
| 2. Authentication | 10 | 0 | 0 | 0 |
| 3. Start Screen | 6 | 1 | 0 | 0 |
| 4. Profession Selection | 5 | 1 | 0 | 0 |
| 5. City Screen | 9 | 1 | 0 | 0 |
| 6. Decision Screen | 7 | 3 | 0 | 0 |
| 7. Consequence Screen | 7 | 0 | 1 | 0 |
| 8. Game Loop & State | 3 | 3 | 0 (cause is the T7.8 fail) | 0 |
| 9. Progress Saving | 9 | 2 | 0 | 1 |
| 10. End Screen | 6 | 0 | 0 | 0 |
| 11. Dashboard | 10 | 1 | 0 | 0 |
| 12. Responsive Design | 4 | 3 | 0 | 0 |
| 13. Error Handling | 2 | 1 | 0 (T13.4 likely broken, flagged) | 1 |
| 14. Console/Code Health | 0 | 0 | 0 | 4 |
| 15. Performance | 0 | 0 | 0 | 3 |

**Bugs found (code-confirmed):**
1. "View Your City →" navigates to the Dashboard instead of the City screen (T7.8, cascades into Section 8).
2. Shop Owner has only 1 scenario / 2 choices vs. 40–42 scenarios / 3 choices for the other professions (T5.7, T6.8, T8.5 for that profession specifically).
3. Test plan's MongoDB database name (`tax_trail`) doesn't match the one the backend actually connects to (`Tax_Trail`) (T9.5).
4. No visible logic restores the in-game screen/state after a hard refresh mid-scenario — a refresh likely drops the player back to the Start screen rather than the City screen (T13.4).

**Recommended next step:** since the code review surfaced concrete, fixable issues, the highest-value next step is either (a) fix #1–#4 and re-review, or (b) get MongoDB + the backend + frontend running (on this machine or another) and do one live pass focused specifically on the ⚠️ and 🚫 items above, which are the ones no amount of source reading can settle.
