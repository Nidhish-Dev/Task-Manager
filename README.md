# Task Manager App

A simple task management application built with React, TypeScript, and Tailwind CSS, which allows users to add, delete, search, and manage tasks with various features such as prioritization, completion tracking, and sorting.

## Features

### Basic Features
1. **Task Input**: Users can add tasks with a title.
2. **Task Deletion**: Users can delete tasks from the list.
3. **Task Persistence**: Tasks are persisted in the browser's local storage, so they persist across page refreshes.

### Stretch Goals
1. **Task Search**: A search bar allows users to filter tasks by title.
2. **Task Completion**: Users can mark tasks as completed. Completed tasks are visually distinguished.
3. **Priority Setting**: Users can assign a priority level (e.g., High, Medium, Low) to each task.
4. **Task Sorting**: Users can sort tasks by title, priority, or completion status.
5. **UI Animation**: Smooth animations for adding/removing tasks and toggling completion status.

## Demo

![Screenshot of Task Manager](./public/ss.png)

## Tech Stack

- **React** (for the frontend framework)
- **TypeScript** (for type safety)
- **Vite** (for fast development build)
- **Tailwind CSS** (for styling)

## Setup & Launch

### Prerequisites

Before you can run the app, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/Nidhish-Dev/Task-Manager.git
cd Task-Manager
```
### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev

```

## Assumptions Made During Development
Persistent Data: I assumed the user would prefer data to persist in local storage across browser sessions. This means when the user refreshes the page, their tasks will still be available.

No Authentication: I did not implement any form of authentication. The app is designed to work without a backend.

Simple UI: The UI is kept minimalistic and lightweight using Tailwind CSS for styling. No advanced UI libraries were included.

Local Storage Limitation: The app uses local storage, which is typically limited to around 5MB per origin. For large datasets, a more scalable solution (e.g., a database) would be needed.

No Task Due Dates: I did not include due dates for tasks as part of the stretch goals. It’s assumed that users can manage priorities without specific deadlines.
