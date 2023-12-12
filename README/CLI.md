### CLI COMMANDS
```bash
npx create-react-app@latest
npx create-next-app@latest
npx create-next-app your-app-name
npx create-react-app your-app-name

npm install bootstrap
npm run dev

npm run build
npx serve@latest out

npm run lint
npm run test
npm run generate

npm install @reduxjs/toolkit react-redux
npx tailwindcss init --full
npm run build-css

git config --global --add --bool push.autoSetupRemote true
```

## Script for Package.json
```json
{
  "scripts": {
    "build-css" : "tailwindcss build src/css/global.css -o src/css/global.css"
  }
}
```