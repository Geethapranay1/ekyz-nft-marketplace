# EKYZ NFT Marketplace Frontend

A React + Tailwind CSS frontend implementation for the **EKYZ NFT Marketplace** UI.  
The design is inspired by a provided Figma file, with custom fonts, SVG vectors, and reusable components.

---
## 🚀 Live Demo
[🔗 View Demo](#https://ekyz-nft-marketplace.vercel.app/)

## 🚀 Project Structure
```├── assets/
│ ├── fonts/ # Custom TTF fonts from Figma
│ │ ├── Atomos-Outline.ttf
│ │ ├── Atomos-Regular.ttf
│ │ ├── Megaton.ttf
│ │ ├── Orbitron.ttf
│ │ ├── PressStart2P.ttf
│ │ └── Voltec.ttf
│ └── images/ # SVG icons and vectors from Figma
│ ├── Button.svg
│ ├── connect-wallet-box.svg
│ ├── Container.svg
│ ├── Group.svg
│ ├── Image [team-logo] (1).svg
│ ├── Image [team-logo] (2).svg
│ ├── Image [team-logo] (3).svg
│ ├── neon-grid.svg
│ ├── thick-line.svg
│ ├── vector.svg
│ └── react.svg
│
├── components/ # Reusable UI components
│ ├── Footer.jsx
│ ├── FooterBar.jsx
│ ├── FooterIcons.jsx
│ ├── HeroSection.jsx
│ ├── LeaderboardSection.jsx
│ ├── NFTGrid.jsx
│ ├── ScrollingBanner.jsx
│ ├── TopBar.jsx
│ └── TronFloor.jsx
│
├── App.jsx
├── App.css
├── index.css
├── main.jsx
```



---

## 🛠 Approach

1. **Top Bar as App Bar**  
   - The `TopBar` component serves as the main application bar.
   - Includes branding, navigation, and wallet connection UI.

2. **Custom Fonts from Figma**  
   - Fonts used:
     - `Voltec`
     - `Orbitron`
     - `Atomos-Outline`
     - `Atomos-Regular`
     - `Megaton`
     - `PressStart2P`
   - Downloaded from the provided Figma file and stored in `src/assets/fonts/`.

3. **Vector Assets from Figma**  
   - Extracted SVG assets like:
     - `neon-grid.svg`
     - `connect-wallet-box.svg`
     - Corner half-squares
     - Decorative elements
   - Stored in `src/assets/images/`.

4. **Component-Based Architecture**  
   - All UI sections are modularized inside the `components/` folder.
   - Each section uses **Tailwind CSS** utility classes for styling.

---

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Geethapranay1/ekyz-nft-marketplace.git
cd ekyz-nft-marketplace
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Add tailwindcss Dependencies
```bash
npm install tailwindcss @tailwindcss/vite
```

### 4. Update vite.config.js
```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### 5. Update src/index.css
```bash
@import "tailwindcss";
@font-face {
  font-family: 'Voltec';
  src: url('./assets/fonts/Voltec.ttf') format('truetype');
}
@font-face {
  font-family: 'Orbitron';
  src: url('./assets/fonts/Orbitron.ttf') format('truetype');
}
@font-face {
  font-family: 'Atomos-Outline';
  src: url('./assets/fonts/Atomos-Outline.ttf') format('truetype');
}
@font-face {
  font-family: 'Atomos-Regular';
  src: url('./assets/fonts/Atomos-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Megaton';
  src: url('./assets/fonts/Megaton.ttf') format('truetype');
}
@font-face {
  font-family: 'PressStart2P';
  src: url('./assets/fonts/PressStart2P.ttf') format('truetype');
}

```


### 6. Start your application
```bash
npm run dev
```


