# InterviewAI

InterviewAI is a premium, frontend-only interview preparation workspace built with semantic HTML, external CSS, vanilla JavaScript, and LocalStorage. It combines focused question practice, simulated mock interviews, and readable progress analytics in one responsive product experience.

## Features

- Responsive landing page with product preview and feature overview
- Dashboard with readiness score, performance chart, subject strength, and momentum widgets
- Searchable and filterable practice question bank
- Answer reveal and explanation flow for technical questions
- Timed mock interview room with role, experience, interview type, and question count configuration
- Honest AI-style simulated evaluation language, with local answer/session scoring
- Analytics, weak-area guidance, and demo weekly leaderboard
- Editable profile details persisted with LocalStorage
- Theme toggle, responsive sidebar drawer, toast notifications, focus states, and reduced-motion support

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage

## Structure

```text
InterviewAI/
├── index.html
├── dashboard.html
├── practice.html
├── interview.html
├── results.html
├── profile.html
├── css/style.css
├── js/app.js
├── js/dashboard.js
├── js/practice.js
├── js/interview.js
└── js/profile.js
```

## Run locally

Open the folder in VS Code and use Live Server, or run a static server from the project directory:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Future improvements

A production version could connect a real AI evaluation API, backend authentication, a database, cloud progress synchronization, and a live leaderboard. The current evaluation is explicitly simulated in the browser and is not a secure authentication system.
