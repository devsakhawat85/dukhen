# Duke Nutrition Experts — Clinical Website Redesign

An award-winning, conversion-optimized clinical web application for **Duke Nutrition Experts** (`https://www.dukenutritionexperts.com/`), built with React, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Deploying to Netlify via GitHub

This project is pre-configured for one-click deployment on Netlify using both `netlify.toml` and `public/_redirects`.

### Step 1: Push Code to GitHub

1. Initialize git and commit all files (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: Award-winning Duke Nutrition Experts website redesign"
   ```
2. Create a new repository on your GitHub account (e.g. `duke-nutrition-experts`).
3. Link your local repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/duke-nutrition-experts.git
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. Log into your [Netlify Dashboard](https://app.netlify.com/).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **GitHub** and authorize access to your repository.
4. Select the repository: `duke-nutrition-experts`.
5. Netlify will automatically detect the build settings from `netlify.toml`:
   - **Base directory:** *(leave blank / root)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**. Netlify will build the production bundle and assign an instant live URL (with automatic SSL and custom domain support).

---

## 🛠 Local Development

To run the application locally on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Verify production build:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📂 Included Pages & Key Features

- **Home (`/`)**: Hero with verified brand messaging, 6 key benefits, functional approach explanation, 4-step clinical process, interactive conditions explorer, featured client reviews, team preview, and consultation CTA.
- **Services & Lab Tests (`/services`)**: In-depth breakdown of Mediator Release Testing (MRT 170 panel), leaky gut mechanisms, functional intracellular micronutrient testing, 24-hour food reintroduction protocol, and FAQs.
- **About (`/about`)**: Full biographies, specialties, education, and authentic photographs for all 9 clinicians and dietitians, with clinical specialty filtering.
- **Testimonials (`/testimonials`)**: Complete client case stories with condition categories, search filter, and healthcare disclaimers.
- **Guide (`/guide`)**: The 5 pillars of reducing inflammatory load with instant downloadable PDF resource capture.
- **Plans & Pricing (`/pricing`)**: Recurring weekly meal plan memberships (*Simply Clean* $25/mo and *Simply Clean Expert* $35/mo), clinical diagnostic pathways, and insurance/cancellation policies.
- **Contact Us (`/contact`)**: Verified Arizona clinic addresses (Oro Valley & Tucson Foothills), phone (`520 477 1650`), fax (`520 829 3551`), hours, and interactive validated inquiry form with SMS consent.
- **Legal Hub (`/legal`)**: Tabbed reader with Privacy Policy, Terms & Conditions, Terms of Purchase and Refund Policy, Digital Products Terms, Voucher Terms, and Code of Conduct.
- **Interactive Booking Modal**: Real client-side validated consultation scheduling accessible from any CTA across the site.
