# 🚀 Suggested Improvements & Future Enhancements

Here is a list of recommended features, UI/UX refinements, and technical enhancements that could be added to the Wordle Guesser AI project.

---

## 🎮 Game Modes & Features

### 1. Global Daily Leaderboard
* **Concept:** Currently, leaderboards are only active for custom challenges. A global leaderboard for the **Daily Challenge** would allow players worldwide to compare scores every day.
* **Implementation:** Store daily scores in a new Supabase table `daily_leaderboard` keyed by the date (e.g., `YYYY-MM-DD`).

### 2. Daily Challenge Archive
* **Concept:** Allow users to play past daily challenges.
* **Implementation:** Add a calendar interface where users can select a past date, retrieve that day's secret word (using the daily word generator seed), and play it.

### 3. Anti-Cheat & Security for Leaderboards
* **Concept:** Currently, the "one-play-per-device" restriction is enforced using `localStorage`, which is easily bypassed by opening an incognito tab or clearing site data.
* **Implementation:** 
  * Require a lightweight, anonymous user login (e.g., Supabase Anonymous Auth).
  * Record the start of a challenge in the database so a user cannot submit a score if they didn't start the game session legitimately.

### 4. Custom Word Lengths (4 to 7 Letters)
* **Concept:** Let users choose between different word lengths (e.g., 4, 5, 6, or 7 letters) for both local gameplay and custom challenges.
* **Implementation:** Fetch letters-specific dictionaries dynamically and adjust the grid layout (CSS grid columns) programmatically.

---

## 🧠 AI Solver Enhancements

### 1. Interactive Decision Tree / Visualization
* **Concept:** Show how the AI partitions the remaining search space. For example, show a visual breakdown of how many words will be left if the user inputs different clue colors for the recommended word.
* **Implementation:** Render a interactive tree map or chart (e.g., using a lightweight charting library or custom SVGs) in the Insights Panel.

### 2. AI Benchmark / Sandbox Mode
* **Concept:** Allow users to select any word and watch the AI solve it step-by-step automatically, calculating average guess rates and time-to-solve.
* **Implementation:** A simulator loop that plays the game against itself and outputs statistical summaries (e.g., "Solved 100 random words in an average of 3.8 guesses").

---

## 🎨 UI/UX & Polish

### 1. Supabase Realtime Leaderboards
* **Concept:** Make the leaderboard update live! If you are viewing a leaderboard and a friend completes the challenge, their score should pop up immediately with a nice animation.
* **Implementation:** Enable **Supabase Realtime** on the `wordle_leaderboard` table and listen to `INSERT` events in the client.

### 2. Audio Control Panel
* **Concept:** Since the game uses Tone.js for synthesised audio feedback, users should have a way to control it.
* **Implementation:** Add a gear/settings icon in the header to open a settings menu containing:
  * Sound effects toggle (On/Off).
  * Volume slider.
  * Sound profile selector (retro synth, piano, mechanical keyboard clicks).

### 3. Smooth Micro-Animations
* **Concept:** Add premium visual flair to interactions:
  * A gentle pulse/glow on tiles when the AI is "thinking".
  * Confetti burst variations (e.g., custom colors matching the player's performance).
  * Springy transitions when switching between game modes.

---

## 🛠️ Codebase & Performance

### 1. Transition to Supabase JS Client (Modular SDK)
* **Concept:** Replace the manual HTTP `fetch` requests with the official `@supabase/supabase-js` client.
* **Why:** Simplifies query code, automatically handles connection retries, and provides built-in support for Realtime subscriptions.

### 2. Componentization & Bundling
* **Concept:** Since `script.js` has grown very large (over 3000 lines), it would be beneficial to split it into smaller modules (e.g., `ai-solver.js`, `game-engine.js`, `supabase-db.js`, `ui-manager.js`) and bundle them using a modern bundler like Vite or ESBuild.
