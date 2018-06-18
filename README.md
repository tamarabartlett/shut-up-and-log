npm run 'script-name'

## Stuff that was in my old package.json
"client": "cd client && npm start",
"server": "nodemon server.js",
"dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\"",
