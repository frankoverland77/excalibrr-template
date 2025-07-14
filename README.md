# Excalibrr Template

This is a template project showcasing the Excalibrr design system with React. It includes examples of navigation, theming, and component usage.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/frankoverland77/excalibrr-template.git
cd excalibrr-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Pages

The template includes several example pages to help you get started:

### 1. **Home** (`/`)
The default landing page showcasing basic Excalibrr components and layout.

### 2. **Navigation Guide** (`/navigation`)
A comprehensive guide showing how to configure and use the Excalibrr navigation system.

### 3. **Navigation Template** (`/navigation-template`) 🆕
An advanced template demonstrating:
- Multi-level navigation structure (up to 3 levels)
- Scope-based access control
- Navigation provider configuration
- Best practices for navigation implementation
- Quick search functionality (Ctrl/Cmd + K)

### 4. **Dashboard** (`/dashboard`)
A simple dashboard example page.

### 5. **Analytics** (`/analytics`)
A placeholder for analytics functionality.

## Key Features

- **Theme Support**: Light and Dark themes with easy configuration
- **Navigation System**: Vertical sidebar with multi-level support
- **Material Icons**: Consistent iconography throughout
- **Responsive Design**: Works on all device sizes
- **Access Control**: Built-in scope-based permissions

## Navigation Configuration

The navigation is configured in `src/App.js`:

```javascript
const pageConfig = {
  home: {
    key: 'home',
    title: 'Home',
    icon: <MaterialIcon name="home" />,
    index: true,
    element: <DefaultPage />,
  },
  // ... more pages
};
```

## Theme Configuration

Themes are configured in `src/App.js`:

```javascript
const themes = [
  {
    key: 'light',
    isDark: false,
    default: true,
    display: 'PE Light',
    colors: {
      info: '#3E73A6',
      nav1: '#19304B',
      nav2: '#30455D',
    },
  },
  // ... more themes
];
```

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner.

### `npm run build`
Builds the app for production.

## Learn More

- [Excalibrr Documentation](https://github.com/gravitate-js/excalibrr)
- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## Contributing

Feel free to submit issues and enhancement requests!
