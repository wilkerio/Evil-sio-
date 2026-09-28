# Evil-sio-

Frontend landing-page project built with React, TypeScript and Vite.

## Overview

Evil-sio- is a focused frontend project centered on presenting a product or service through a dedicated landing-page experience.

The application keeps a deliberately small runtime stack and uses React as the rendering layer with Vite for development and production builds.

## Technology

- React 18
- TypeScript
- Vite
- React DOM

## Project structure

The application entry point renders the main LandingPage component and loads the project stylesheet:

~~~
src/
├── main.tsx
├── LandingPage
└── index.css
~~~

## Development

~~~bash
npm install
npm run dev
npm run build
npm run preview
~~~

## Engineering focus

~~~
content
  ↓
interface
  ↓
React components
  ↓
Vite build
  ↓
web delivery
~~~

This project demonstrates a focused approach to building lightweight, presentation-oriented web experiences without adding unnecessary backend complexity.
