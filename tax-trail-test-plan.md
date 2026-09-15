# The Tax Trail — QA Test Plan

**Instructions for Cline:** Work through each test below in order. Perform the described action, check the result against "Pass", and check the box only once confirmed. If a test fails, leave the box unchecked and add a short note directly beneath it describing what actually happened (console error, wrong value, screenshot description, etc.) instead of the expected result. Don't skip a section just because an earlier one failed — note the failure and continue, since later sections may depend on state set up by earlier ones (e.g. Section 9 needs a logged-in account from Section 2).

---

## Section 1 — Backend Health

- [ ] **T1.1 — Backend root responds**
  Open `http://localhost:5000`
  Pass: `{"message":"Tax Trail Backend is running!"}`

- [ ] **T1.2 — API sub-route responds**
  Open `http://localhost:5000/api/test`
  Pass: `{"message":"API is working!"}`

- [ ] **T1.3 — MongoDB connection in backend terminal**
  Check backend terminal.
  Pass: `✅ Connected to MongoDB`

- [ ] **T1.4 — Unknown route returns 404**
  Open `http://localhost:5000/api/nonexistent`
  Pass: HTML 404 page, not a crash

---

## Section 2 — Authentication

- [ ] **T2.1 — Login modal appears on load**
  Load `http://localhost:5173`
  Pass: Modal overlays the Start screen

- [ ] **T2.2 — Switch to signup mode**
  Click "Click Here to create an account"
  Pass: Modal changes to "Create Account" with Full Name field

- [ ] **T2.3 — Signup validation (empty fields)**
  Leave fields empty, click Create Account
  Pass: Browser prevents submission (HTML required)

- [ ] **T2.4 — Signup with valid data**
  Email: `test1@tax.com`, Password: `1234`, Name: `Test User`
  Pass: Modal closes, no console errors, user is on Start screen

- [ ] **T2.5 — Signup duplicate email**
  Sign up again with `test1@tax.com`
  Pass: Alert/message "Email already registered"

- [ ] **T2.6 — Login with wrong password**
  Logout, try `test1@tax.com` with password `wrongpass`
  Pass: "Invalid password" message

- [ ] **T2.7 — Login with wrong email**
  Try `nonexistent@test.com`
  Pass: "Not a registered account" message

- [ ] **T2.8 — Login with correct credentials**
  Login with `test1@tax.com` / `1234`
  Pass: Modal closes, no console errors

- [ ] **T2.9 — Token stored in localStorage**
  Open DevTools → Application → Local Storage
  Pass: `token` key exists with a JWT-like value

- [ ] **T2.10 — Token persists across reload**
  Refresh the page
  Pass: Not logged out; token still in localStorage

---

## Section 3 — Start Screen

- [ ] **T3.1 — Start screen renders in frame**
  Desktop view
  Pass: Content is inside a rounded framed card, centered, with margins on the sides

- [ ] **T3.2 — Title "The Tax Trail" is visible**
  Pass: Gold "Tax Trail" text on two lines with "The" above

- [ ] **T3.3 — Stats display correct counts**
  Pass: "5 Scenarios", "4 Professions", "K Kwacha"

- [ ] **T3.4 — Buttons visible**
  Pass: Start New Game, My Dashboard, Tax Education Guide buttons

- [ ] **T3.5 — Continue Game button does NOT appear (no saved game)**
  Pass: Only three buttons visible

- [ ] **T3.6 — Tax Education Guide opens ZRA site**
  Click it
  Pass: New tab opens zra.org.zm

- [ ] **T3.7 — Mobile layout is full-bleed**
  Open on phone or resize to under 640px
  Pass: No frame, content fills the screen; buttons stack vertically

---

## Section 4 — Profession Selection

- [ ] **T4.1 — Profession list appears**
  Click Start New Game
  Pass: All 4 professions listed vertically: Yango Driver, Freelance Creative, Shop Owner, Market Trader

- [ ] **T4.2 — Each profession shows correct data**
  Pass: Emoji, name, description, and starting money display (K3200, K2800, K4500, K2500)

- [ ] **T4.3 — Home icon in header**
  Pass: House icon top-left of the header row (not in its own bar)

- [ ] **T4.4 — Home icon returns to Start**
  Click it
  Pass: Returns to Start screen

- [ ] **T4.5 — Hover effects on profession cards**
  Hover over any card
  Pass: Card lifts slightly, colored glow, brighter background

- [ ] **T4.6 — Select Yango Driver**
  Click Yango Driver
  Pass: Navigates to City screen

---

## Section 5 — City Screen

- [ ] **T5.1 — City renders in frame**
  Pass: App frame visible, content centered (desktop); full-bleed (mobile)

- [ ] **T5.2 — Phaser canvas renders**
  Pass: Night sky, stars, moon, and city silhouettes appear

- [ ] **T5.3 — Character/city matches compliance**
  Starting compliance is 50%
  Pass: City shows "struggling" state (fewer buildings, dimmer)

- [ ] **T5.4 — Header displays correctly**
  Pass: Profession info left, wallet center, red ✕ right

- [ ] **T5.5 — Wallet shows starting money**
  Pass: K3,200 for Yango Driver

- [ ] **T5.6 — Compliance progress bar**
  Pass: Shows 50% with amber color

- [ ] **T5.7 — Scenario progress bar**
  Pass: Shows 0/5

- [ ] **T5.8 — Status message correct**
  Pass: "⚡ Your city needs better compliance to grow"

- [ ] **T5.9 — Next Scenario button**
  Pass: Button label "Next Scenario (5 remaining) →"

- [ ] **T5.10 — Touchpad scrolling works**
  Try scrolling with two fingers on trackpad
  Pass: Page scrolls (not blocked by canvas)

---

## Section 6 — Decision Screen (Character)

- [ ] **T6.1 — Character renders**
  Click Next Scenario
  Pass: Character appears on left, phone in front, city behind

- [ ] **T6.2 — Character has correct hat/shirt**
  For Yango Driver
  Pass: Red cap, red shirt, steering wheel accessory

- [ ] **T6.3 — ProfessionKit errors gone**
  Check console
  Pass: No `[ProfessionKit] Unknown profession` errors

- [ ] **T6.4 — No Phaser errors**
  Check console
  Pass: No `Phaser is not defined` errors

- [ ] **T6.5 — Idle animation works**
  Watch the character for 3 seconds
  Pass: Subtle breathing, blinking, gentle sway

- [ ] **T6.6 — Scenario text fits inside phone**
  Read the phone
  Pass: Title and body text fully visible, wrapped inside phone, not overflowing

- [ ] **T6.7 — Text is readable**
  Pass: Font sizes scale appropriately on desktop and mobile

- [ ] **T6.8 — Choices are neutral-styled**
  Pass: All 3 choices look identical (no green/orange/red coloring, no outcome labels)

- [ ] **T6.9 — Choices shuffle**
  Restart the game
  Pass: Choices appear in different order across playthroughs

- [ ] **T6.10 — Header correct**
  Pass: "SCENARIO 1 OF 5" left, wallet and compliance right

---

## Section 7 — Consequence Screen

- [ ] **T7.1 — Screen renders in frame**
  Pass: App frame visible with accent-colored glow

- [ ] **T7.2 — Accent color matches outcome**
  Pass: Good choice → green glow; Neutral choice → orange glow; Bad choice → red glow

- [ ] **T7.3 — Split-city visual**
  Pass: Two halves — compliant path (green) and non-compliant (red)

- [ ] **T7.4 — Correct side highlighted**
  If you made a good choice
  Pass: Green half has a green border

- [ ] **T7.5 — Outcome description shows**
  Pass: Consequence title and description display

- [ ] **T7.6 — Stats cards show change**
  Pass: Compliance delta (+/-) and wallet delta (+/-K) display with correct colors

- [ ] **T7.7 — Tax Tip displays**
  Pass: Tax tip text appears in gold panel

- [ ] **T7.8 — View Your City button**
  Click it
  Pass: Returns to City screen

---

## Section 8 — Game Loop & State

- [ ] **T8.1 — Compliance updates after choice**
  Play one scenario
  Pass: City screen shows compliance changed from 50% based on choice

- [ ] **T8.2 — Wallet updates after choice**
  Pass: Wallet changes by the choice's money value

- [ ] **T8.3 — Scenario count increments**
  After 1 choice
  Pass: Progress bar shows 1/5

- [ ] **T8.4 — Remaining count decrements**
  Pass: Button shows "(4 remaining)"

- [ ] **T8.5 — Complete all 5 scenarios**
  Play through all scenarios
  Pass: After 5th, City button becomes "🏆 View Final Results →"

- [ ] **T8.6 — Reload preserves state within session**
  Refresh the page mid-game
  Pass: Still logged in; if this is on City, layout preserved

- [ ] **T8.7 — Character matches profession (Yango)**
  Pass: Red cap + steering wheel

- [ ] **T8.8 — Switch to Freelance Creative**
  Exit and pick Freelance Creative
  Pass: Character changes to purple beanie + tablet accessory

- [ ] **T8.9 — Switch to Shop Owner**
  Pass: Green band + ledger accessory

- [ ] **T8.10 — Switch to Market Trader**
  Pass: Yellow brim + basket accessory

---

## Section 9 — Progress Saving

- [ ] **T9.1 — Progress saves on choice**
  Play one scenario, watch Network tab
  Pass: `POST /api/progress/progress` fires with 200 response

- [ ] **T9.2 — Progress saves on auto-save**
  Stay on a game screen for 5 seconds
  Pass: `POST /api/progress/auto-save` fires with 200 response

- [ ] **T9.3 — No 500 errors**
  Watch Network tab
  Pass: No 500 responses

- [ ] **T9.4 — Progress saves on logout**
  Log out
  Pass: `POST /api/progress/progress` fires before logout

- [ ] **T9.5 — Progress in MongoDB**
  Open MongoDB Compass → `tax_trail` DB → `users` collection
  Pass: Your user's `gameProgress` shows `professionId`, `compliance`, `money`, `scenarioIndex`

- [ ] **T9.6 — Continue Game button appears after logout**
  After playing 1+ scenarios, log out
  Pass: StartScreen now shows [▶ Continue Game] above [🎮 Start New Game]

- [ ] **T9.7 — Continue resumes correct state**
  Click Continue Game
  Pass: Returns to City screen with the same compliance, money, and scenario index

- [ ] **T9.8 — Start New Game shows confirmation**
  Click Start New Game while a saved game exists
  Pass: Confirmation dialog appears asking to erase progress

- [ ] **T9.9 — Cancel confirmation**
  Click Cancel
  Pass: Stays on Start screen, saved game preserved

- [ ] **T9.10 — Confirm and start new**
  Click Start New Game → Confirm
  Pass: Progress reset in DB, goes to Profession screen

- [ ] **T9.11 — After confirming, Continue disappears**
  Log out, log back in
  Pass: No Continue button (fresh state)

---

## Section 10 — End Screen

- [ ] **T10.1 — End screen renders in frame**
  Complete all 5 scenarios
  Pass: App frame visible, skyline at top

- [ ] **T10.2 — Grade correct**
  Pass: Grade matches compliance — ≥80: Tax Champion · 60–79: Compliant Citizen · 40–59: Needs Improvement · <40: Non-Compliant

- [ ] **T10.3 — Stats display**
  Pass: Compliance %, wallet, scenarios completed shown

- [ ] **T10.4 — Progress bar correct**
  Pass: Overall compliance bar reflects final %

- [ ] **T10.5 — Did You Know panel shows**
  Pass: K82.6B fact with ZRA reference

- [ ] **T10.6 — Play Again button**
  Click it
  Pass: Returns to Start, backend reset, no Continue button

---

## Section 11 — Dashboard

- [ ] **T11.1 — Dashboard opens**
  From Start, click My Dashboard
  Pass: Dashboard renders in frame

- [ ] **T11.2 — Header layout**
  Pass: Home icon left, title centered ("🏛️ TAX TRAIL" / "Dashboard"), logout icon right

- [ ] **T11.3 — Profession displays**
  Pass: Shows currently-selected profession with emoji

- [ ] **T11.4 — Compliance ring**
  Pass: Circular progress ring shows compliance %, ring color matches grade

- [ ] **T11.5 — Stats row**
  Pass: Total Income, Tax Paid, Scenarios — all three display

- [ ] **T11.6 — Scenario count correct**
  After playing 2 scenarios
  Pass: Scenarios shows 2 / 5, not 0 / 5

- [ ] **T11.7 — Did You Know panel**
  Pass: K82.6B fact displays

- [ ] **T11.8 — Change Profession fills row**
  Pass: Full-width gold button at bottom

- [ ] **T11.9 — Change Profession works**
  Click it
  Pass: Goes to Profession screen

- [ ] **T11.10 — Home icon returns to Start**
  Click it
  Pass: Returns to Start screen

- [ ] **T11.11 — Logout from header**
  Click red logout icon top-right
  Pass: Logs out, returns to Start with login modal

- [ ] **T11.12 — Mobile layout**
  Resize to under 640px
  Pass: Everything stacks vertically, no horizontal scroll

---

## Section 12 — Responsive Design

- [ ] **T12.1 — Mobile (<640px)**
  Resize browser or use phone
  Pass: All screens full-bleed, stacked, no frame

- [ ] **T12.2 — Tablet (640–1023px)**
  Pass: Content in a max-width ~720px frame, rounded corners

- [ ] **T12.3 — Desktop (≥1024px)**
  Pass: Content in max-width ~1100px frame (1400px for Decision), centered

- [ ] **T12.4 — Decision two-column on desktop**
  Pass: Canvas and choices side by side

- [ ] **T12.5 — Decision single-column on mobile**
  Pass: Canvas on top, choices below

- [ ] **T12.6 — No horizontal scroll on any screen**
  Pass: On every screen, at every size

- [ ] **T12.7 — Text doesn't get cut off**
  On phone, all screens
  Pass: All text readable, nothing clipped

---

## Section 13 — Error Handling

- [ ] **T13.1 — Backend down during login**
  Stop backend, try login
  Pass: Graceful error message, no crash

- [ ] **T13.2 — MongoDB down during signup**
  Stop MongoDB, try signup
  Pass: Error shown, server doesn't crash

- [ ] **T13.3 — Invalid saved profession**
  If you can edit DB, set `professionId` to something invalid
  Pass: Falls back gracefully, no crash

- [ ] **T13.4 — Refresh mid-game**
  Refresh during a scenario
  Pass: Returns to City screen (not blank, not error)

---

## Section 14 — Console / Code Health

- [ ] **T14.1 — No red console errors**
  Play through one full game
  Pass: No uncaught exceptions

- [ ] **T14.2 — No 400/500 responses**
  Pass: All API calls return 2xx

- [ ] **T14.3 — No useEffect warnings**
  Pass: No missing dependency warnings

- [ ] **T14.4 — No "Cannot read property of undefined"**
  Pass: No null-access errors in console

---

## Section 15 — Performance

- [ ] **T15.1 — Page load time**
  Hard refresh
  Pass: Under 3 seconds

- [ ] **T15.2 — Screen transitions smooth**
  Click through screens
  Pass: Animations feel smooth, no jank

- [ ] **T15.3 — Canvas renders without lag**
  Pass: Phaser canvas starts within 1 second
