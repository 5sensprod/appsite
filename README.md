# AppSite 🚀

Application desktop moderne construite avec Electron, React et Vite.

## Technologies utilisées

- ⚡️ Electron - Interface desktop native
- ⚛️ React - UI réactive
- 🛠️ Vite - Développement ultrarapide
- 🎨 TailwindCSS - Styling moderne et responsive
- 📝 ESLint/Prettier - Qualité et cohérence du code

## Installation

```bash
git clone https://github.com/votre-username/appsite.git
cd appsite
npm install
```

## Développement

```bash
npm run start    # Lance Electron + Vite avec Hot Reload
```

## Production

```bash
npm run build           # Build l'application
npm run electron:build  # Crée l'exécutable
```

## Structure du projet

```
appsite/
├── electron/          # Configuration Electron
├── src/              # Code source React
│   ├── styles/       # CSS global
│   └── components/   # Composants React
```

## Scripts disponibles

- `npm run dev` - Lance Vite
- `npm run start` - Lance Electron + Vite (dev)
- `npm run build` - Build production
- `npm run electron:build` - Crée l'exécutable

## Licence

[MIT](LICENSE)