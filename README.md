# 🥠 Fortune Cookie

A fun little pet project — a virtual fortune cookie you can crack open right in your browser!

Click the cookie, get a random fortune message, and click again for another one. Simple as that.

## Demo

1. You see a fortune cookie.
2. Click it — the cookie cracks open and reveals a fortune message.
3. Want another one? Hit the **"I want another cookie"** button and try your luck again.

## Tech Stack

- **Next.js 14** (App Router, Server Actions)
- **React 18**
- **CSS Modules** for styling
- **classnames** for conditional CSS

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/app/
├── page.js                        # Main page
├── Components/
│   └── FortuneCookie/
│       ├── FortuneCookie.js       # Interactive cookie component
│       ├── getFortuneCookie.js    # Server action — picks a random fortune
│       ├── fortuneMessages.js    # Pool of fortune messages
│       └── fortuneCookie.module.css
```

## How It Works

- The cookie image is clickable. On click, a **Server Action** randomly picks a message from a predefined list.
- The cookie "opens" with a new image and the fortune text appears.
- A reset button lets you start over and crack another cookie.

## Why?

Built purely for fun as a pet project. Because who doesn't love fortune cookies? 🍪
