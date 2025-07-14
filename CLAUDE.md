# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application built with Create React App that uses the Excalibrr UI framework from @gravitate-js. The application includes navigation, theming, and dashboard capabilities.

## Development Commands

```bash
# Install dependencies (if node_modules is missing)
npm install

# Start development server
npm start

# Run tests in watch mode
npm test

# Run a specific test file
npm test -- Dashboard.test.js

# Build for production
npm run build
```

## Architecture & Key Components

### Core Dependencies
- **React 18.2** with React Router v7.5
- **@gravitate-js/excalibrr** - Primary UI framework providing navigation, theming, and Material icons
- **Ant Design (antd)** - Component library
- **AG-Grid** - Data grid components (community & enterprise)
- **Nivo** - Data visualization library
- **Zustand** - State management
- **React Query (TanStack Query)** - Server state management

### Application Structure

**Entry Points:**
- `src/index.js` - React app entry point
- `src/App.js` - Main application component with routing and context providers

**Context Providers:**
- `ThemeContextProvider` - Manages light/dark theme switching
- `NavigationContextProvider` - Handles sidebar navigation and page configuration

**Routing:**
The app uses React Router v7 with routes defined in App.js. The `pageConfig` object defines both the navigation structure and route elements.

**Key Pages:**
- `DefaultPage` - Home/landing page
- `Dashboard` - Main dashboard view
- `BasicNavigation` - Navigation guide/documentation
- Analytics page (placeholder)

### Testing

The project uses Jest with React Testing Library. Test files follow the `.test.js` pattern and are configured through Create React App's default setup.

### State Management

The project has both Zustand and React Query installed, suggesting a hybrid approach:
- Zustand for local/UI state
- React Query for server state and data fetching

### Styling

Multiple styling approaches are available:
- CSS modules (App.css, index.css)
- Ant Design components
- Inline styles
- Potentially CSS-in-JS through Excalibrr framework