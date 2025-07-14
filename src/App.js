// Inside src/App.js

import React from 'react';
// Ensure all necessary imports are here
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationContextProvider, ThemeContextProvider, MaterialIcon } from '@gravitate-js/excalibrr';

// Import page components
import Dashboard from './Dashboard.jsx';
import DefaultPage from './DefaultPage.jsx';
import BasicNavigation from './BasicNavigation.jsx';

import './App.css';

// --- Theme Configuration ---
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
  {
    key: 'dark',
    isDark: true,
    display: 'Dark Theme',
    colors: {
      info: '#77bfff',
      nav1: '#76ABF3',
      nav2: '#8BBCF7',
    },
  },
];
// --- Navigation Configuration (For Sidebar/Layout) ---
const pageConfig = {
  home: {
    key: 'home',
    title: 'Home',
    icon: <MaterialIcon name="home" />,
    index: true,
    element: <DefaultPage />,
  },
  navigation: {
    key: 'navigation',
    title: 'Navigation Guide',
    icon: <MaterialIcon name="navigation" />,
    element: <BasicNavigation />,
  },
  dashboard: {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <MaterialIcon name="dashboard" />,
    element: <Dashboard />,
  },
  analytics: {
    key: 'analytics',
    title: 'Analytics',
    icon: <MaterialIcon name="analytics" />,
    element: <div>Analytics Page Placeholder</div>,
  }
};

const getScopes = async () => {
  return Promise.resolve([]);
};

// --- App Component ---
function App() {
  return (
    <ThemeContextProvider themeConfigs={themes}>
      <BrowserRouter>
        <NavigationContextProvider
          pageConfig={pageConfig} // Used for sidebar generation
          getScopes={getScopes}
          navStyle="vertical"
        >
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="home" element={<DefaultPage />} />
            <Route path="navigation" element={<BasicNavigation />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="analytics" element={<div>Analytics Page RENDERED!</div>} />
          </Routes>
        </NavigationContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;