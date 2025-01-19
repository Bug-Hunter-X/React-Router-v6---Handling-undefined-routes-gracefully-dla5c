# React Router v6 - Handling undefined routes

This repository demonstrates a common issue in React Router v6: navigating to a route that doesn't exist.  The `bug.js` file showcases the problem, where navigating to a non-existent route causes the application to render nothing. The `bugSolution.js` file demonstrates how to solve this by implementing a `NotFound` component to gracefully handle such scenarios using `useRoutes` hook.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Bug Description

The bug occurs when you try to navigate to a route that is not defined in your routes configuration. This is often due to typos or incorrect path definitions in your routes.

## Solution

The solution involves implementing a `NotFound` component to catch any undefined routes and display an appropriate message. This prevents your app from crashing or rendering nothing and improves the user experience.