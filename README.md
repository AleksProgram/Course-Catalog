# Course Catalog

A simple course catalog application built with **React** and **Vite**.

## About the Project

Course Catalog is a React application that displays a list of available courses. Each course contains information about its title, teacher, duration, price, and availability status.

The project demonstrates the use of React components, props, rendering lists, and conditional rendering.

## Features

- Display a list of courses.
- Show course information:
    - Course title
    - Teacher name
    - Duration in hours
    - Price in USD
    - Availability status
- Display availability status:
    - Available
    - Enrollment closed
- Show a message when no courses are found.

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── CourseList.jsx
│   ├── CourseCard.jsx
│   └── AvailabilityBadge.jsx
├── data/
│   └── courses.js
├── App.jsx
└── main.jsx
```

## Technologies

- React
- JavaScript
- Vite
- HTML
- CSS

## Learning Objectives

This project helps practice:

- Creating reusable React components.
- Passing data through props.
- Rendering lists using `.map()`.
- Using unique `key` props.
- Conditional rendering with ternary operators.
- Working with static data and JavaScript objects.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

