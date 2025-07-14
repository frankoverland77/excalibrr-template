import React from 'react';
import {
  UnderlineHeader,
  DataSectionHeader,
  MaterialIcon,
  Texto,
  GraviButton,
  Horizontal,
  Vertical,
  DataItem,
  useNavigationContext
} from '@gravitate-js/excalibrr';

function BasicNavigation() {
  const { validPages } = useNavigationContext();

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Header */}
      <UnderlineHeader>
        <MaterialIcon name="navigation" />
        Basic Navigation Guide
      </UnderlineHeader>
      
      {/* Introduction */}
      <div style={{ marginBottom: '32px' }}>
        <Texto>
          This page demonstrates the navigation system setup and configuration options 
          available in the Excalibrr design system. Learn how to configure pages, 
          navigation styles, and permissions.
        </Texto>
      </div>

      {/* Current Navigation State */}
      <DataSectionHeader>Current Navigation Configuration</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ 
          background: '#f6f6f6', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '16px'
        }}>
          <strong>Active Navigation Style:</strong> Vertical Sidebar
          <br />
          <strong>Total Pages:</strong> {validPages ? validPages.length : 0}
          <br />
          <strong>Quick Search:</strong> Press Ctrl+K (or Cmd+K on Mac) to open
        </div>
        
        <DataSectionHeader>Available Pages</DataSectionHeader>
        <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {validPages && validPages.map((page) => (
            <div key={page.key} style={{ 
              border: '1px solid #d9d9d9', 
              padding: '16px', 
              borderRadius: '6px',
              background: 'white'
            }}>
              <Horizontal gap="8px" style={{ marginBottom: '8px' }}>
                {page.icon}
                <strong>{page.title}</strong>
              </Horizontal>
              <Texto style={{ fontSize: '12px', color: '#666' }}>
                Key: {page.key}
                {page.index && <span style={{ color: '#3E73A6' }}> (Index Page)</span>}
              </Texto>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Setup Guide */}
      <DataSectionHeader>Navigation Setup Guide</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        
        {/* Step 1 */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#3E73A6', marginBottom: '12px' }}>1. NavigationContextProvider Setup</h3>
          <div style={{ 
            background: '#f8f8f8', 
            padding: '16px', 
            borderRadius: '6px',
            fontFamily: 'monospace',
            fontSize: '14px',
            overflow: 'auto'
          }}>
{`<NavigationContextProvider
  pageConfig={pageConfig}
  getScopes={getScopes}
  navStyle="vertical"
>
  <Routes>
    {/* Your routes */}
  </Routes>
</NavigationContextProvider>`}
          </div>
        </div>

        {/* Step 2 */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#3E73A6', marginBottom: '12px' }}>2. Page Configuration Object</h3>
          <div style={{ 
            background: '#f8f8f8', 
            padding: '16px', 
            borderRadius: '6px',
            fontFamily: 'monospace',
            fontSize: '14px',
            overflow: 'auto'
          }}>
{`const pageConfig = {
  home: {
    key: 'home',
    title: 'Home',
    icon: <MaterialIcon name="home" />,
    index: true,
    element: <HomePage />
  },
  dashboard: {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <MaterialIcon name="dashboard" />,
    element: <DashboardPage />
  }
};`}
          </div>
        </div>

        {/* Step 3 */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#3E73A6', marginBottom: '12px' }}>3. Navigation Styles</h3>
          <Vertical gap="12px">
            <div style={{ padding: '12px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
              <strong>Vertical (Current):</strong> Traditional sidebar navigation
            </div>
            <div style={{ padding: '12px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
              <strong>Horizontal:</strong> Top navigation bar
            </div>
            <div style={{ padding: '12px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
              <strong>Inline:</strong> Inline navigation elements
            </div>
          </Vertical>
        </div>
      </div>

      {/* Page Configuration Properties */}
      <DataSectionHeader>Page Configuration Properties</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <div style={{ border: '1px solid #d9d9d9', padding: '16px', borderRadius: '6px' }}>
            <h4 style={{ color: '#3E73A6', marginBottom: '8px' }}>Required Properties</h4>
            <Vertical gap="8px">
              <DataItem label="key" value="Unique page identifier" />
              <DataItem label="title" value="Display name in navigation" />
              <DataItem label="element" value="React component to render" />
            </Vertical>
          </div>

          <div style={{ border: '1px solid #d9d9d9', padding: '16px', borderRadius: '6px' }}>
            <h4 style={{ color: '#3E73A6', marginBottom: '8px' }}>Optional Properties</h4>
            <Vertical gap="8px">
              <DataItem label="icon" value="Navigation icon element" />
              <DataItem label="index" value="Mark as default/index page" />
              <DataItem label="hideNav" value="Hide from navigation menu" />
              <DataItem label="hasPermission" value="Permission check function" />
            </Vertical>
          </div>

          <div style={{ border: '1px solid #d9d9d9', padding: '16px', borderRadius: '6px' }}>
            <h4 style={{ color: '#3E73A6', marginBottom: '8px' }}>Advanced Properties</h4>
            <Vertical gap="8px">
              <DataItem label="routes" value="Sub-pages array" />
              <DataItem label="defaultRedirect" value="Default redirect URL" />
              <DataItem label="query_page" value="Query parameter handling" />
            </Vertical>
          </div>
        </div>
      </div>

      {/* Permission System */}
      <DataSectionHeader>Permission System</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ 
          background: '#f8f8f8', 
          padding: '16px', 
          borderRadius: '6px',
          fontFamily: 'monospace',
          fontSize: '14px',
          overflow: 'auto'
        }}>
{`const getScopes = async () => {
  return Promise.resolve(['admin', 'user']);
};

// In page config:
hasPermission: (scopes) => {
  return scopes.includes('admin');
}`}
        </div>
      </div>

      {/* Navigation Context Hook */}
      <DataSectionHeader>Using Navigation Context</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ 
          background: '#f8f8f8', 
          padding: '16px', 
          borderRadius: '6px',
          fontFamily: 'monospace',
          fontSize: '14px',
          overflow: 'auto'
        }}>
{`import { useNavigationContext } from '@gravitate-js/excalibrr';

function MyComponent() {
  const { validPages } = useNavigationContext();
  
  return (
    <div>
      {validPages.map(page => (
        <div key={page.key}>{page.title}</div>
      ))}
    </div>
  );
}`}
        </div>
      </div>

      {/* Quick Tips */}
      <DataSectionHeader>Quick Tips</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <Vertical gap="12px">
          <div style={{ padding: '12px', background: '#e6f7ff', border: '1px solid #91d5ff', borderRadius: '4px' }}>
            <strong>💡 Quick Search:</strong> Press Ctrl+K (Cmd+K on Mac) to open the built-in page search
          </div>
          <div style={{ padding: '12px', background: '#f6ffed', border: '1px solid #b7eb8f', borderRadius: '4px' }}>
            <strong>✅ Best Practice:</strong> Use MaterialIcon components for consistent iconography
          </div>
          <div style={{ padding: '12px', background: '#fff2e6', border: '1px solid #ffd591', borderRadius: '4px' }}>
            <strong>⚠️ Remember:</strong> Set one page with index: true for the default route
          </div>
          <div style={{ padding: '12px', background: '#fff1f0', border: '1px solid #ffaaa5', borderRadius: '4px' }}>
            <strong>🔐 Security:</strong> Use hasPermission to control page access based on user scopes
          </div>
        </Vertical>
      </div>

      {/* Action Buttons */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Horizontal gap="16px" style={{ justifyContent: 'center' }}>
          <GraviButton 
            onClick={() => window.open('https://github.com/gravitate-js/excalibrr', '_blank')}
          >
            <MaterialIcon name="code" />
            View Source
          </GraviButton>
          <GraviButton 
            type="primary"
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText('npm install @gravitate-js/excalibrr');
              }
            }}
          >
            <MaterialIcon name="content_copy" />
            Copy Install Command
          </GraviButton>
        </Horizontal>
      </div>
    </div>
  );
}

export default BasicNavigation;