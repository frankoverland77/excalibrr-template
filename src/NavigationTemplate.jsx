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
  useNavigationContext,
  CodeBlock
} from '@gravitate-js/excalibrr';
import { 
  DashboardOutlined, 
  AnalyticsOutlined, 
  SettingsOutlined,
  PersonOutlined,
  NotificationsOutlined,
  HelpOutlined
} from '@mui/icons-material';

// Example of a comprehensive page configuration
const examplePageConfig = {
  dashboard: {
    index: 0,
    key: 'dashboard',
    icon: <DashboardOutlined />,
    title: 'Dashboard',
    element: '<Dashboard />',
    routes: [
      {
        title: 'Overview',
        key: 'overview',
        element: '<Overview />',
        index: true
      },
      {
        title: 'Reports',
        key: 'reports',
        element: '<Reports />',
        hasPermission: (scopes) => scopes.includes('reports.view')
      },
      {
        title: 'Metrics',
        key: 'metrics',
        element: '<Metrics />',
        routes: [
          {
            title: 'Performance',
            key: 'performance',
            element: '<Performance />'
          },
          {
            title: 'Revenue',
            key: 'revenue',
            element: '<Revenue />',
            hasPermission: (scopes) => scopes.includes('revenue.view')
          }
        ]
      }
    ]
  },
  analytics: {
    index: 1,
    key: 'analytics',
    icon: <AnalyticsOutlined />,
    title: 'Analytics',
    element: '<Analytics />',
    hasPermission: (scopes) => scopes.includes('analytics.access')
  },
  settings: {
    index: 2,
    key: 'settings',
    icon: <SettingsOutlined />,
    title: 'Settings',
    element: '<Settings />',
    routes: [
      {
        title: 'Profile',
        key: 'profile',
        element: '<Profile />'
      },
      {
        title: 'Security',
        key: 'security',
        element: '<Security />',
        hasPermission: (scopes) => scopes.includes('admin')
      }
    ]
  }
};

function NavigationTemplate() {
  const { validPages, currentPath } = useNavigationContext();

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Header */}
      <UnderlineHeader>
        <MaterialIcon name="map" />
        Navigation Template
      </UnderlineHeader>
      
      {/* Introduction */}
      <div style={{ marginBottom: '32px' }}>
        <Texto>
          This template demonstrates how to implement Excalibrr's powerful navigation system 
          with multi-level page structures, scope-based access control, and persistent navigation state.
        </Texto>
      </div>

      {/* Key Features Overview */}
      <DataSectionHeader>Key Features</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div style={{ 
            border: '1px solid #d9d9d9', 
            padding: '20px', 
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <Horizontal gap="12px" style={{ marginBottom: '12px' }}>
              <MaterialIcon name="layers" style={{ color: '#3E73A6' }} />
              <h4 style={{ margin: 0 }}>Seamless Integration</h4>
            </Horizontal>
            <Texto>
              Integrates with React Router and supports up to 3 levels of nested navigation
            </Texto>
          </div>

          <div style={{ 
            border: '1px solid #d9d9d9', 
            padding: '20px', 
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <Horizontal gap="12px" style={{ marginBottom: '12px' }}>
              <MaterialIcon name="lock" style={{ color: '#3E73A6' }} />
              <h4 style={{ margin: 0 }}>Access Control</h4>
            </Horizontal>
            <Texto>
              Granular scope-based access control for pages and sections
            </Texto>
          </div>

          <div style={{ 
            border: '1px solid #d9d9d9', 
            padding: '20px', 
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <Horizontal gap="12px" style={{ marginBottom: '12px' }}>
              <MaterialIcon name="search" style={{ color: '#3E73A6' }} />
              <h4 style={{ margin: 0 }}>Quick Search</h4>
            </Horizontal>
            <Texto>
              Command palette style navigation with keyboard shortcuts (Ctrl/Cmd + K)
            </Texto>
          </div>
        </div>
      </div>

      {/* Implementation Guide */}
      <DataSectionHeader>Implementation</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        
        {/* Step 1: Page Configuration */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#3E73A6', marginBottom: '16px' }}>1. Page Configuration</h3>
          <Texto style={{ marginBottom: '12px' }}>
            Define your page structure with nested routes and permissions:
          </Texto>
          <div style={{ 
            background: '#1e1e1e', 
            color: '#d4d4d4',
            padding: '20px', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '14px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0 }}>{`const pageConfig = {
  dashboard: {
    index: 0,
    key: 'dashboard',
    icon: <DashboardOutlined />,
    title: 'Dashboard',
    element: <Dashboard />,
    routes: [
      {
        title: 'Overview',
        key: 'overview',
        element: <Overview />
      },
      {
        title: 'Reports',
        key: 'reports',
        element: <Reports />,
        hasPermission: (scopes) => scopes.includes('reports.view')
      }
    ]
  }
}`}</pre>
          </div>
        </div>

        {/* Step 2: Navigation Provider */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#3E73A6', marginBottom: '16px' }}>2. Navigation Provider</h3>
          <Texto style={{ marginBottom: '12px' }}>
            Wrap your app with the NavigationContextProvider:
          </Texto>
          <div style={{ 
            background: '#1e1e1e', 
            color: '#d4d4d4',
            padding: '20px', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '14px',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0 }}>{`<NavigationContextProvider
  pageConfig={pageConfig}
  getScopes={() => getScopes()}
  navStyle="vertical"
  handleLogout={handleLogout}
  userControlPane={<UserProfile />}
>
  <YourApp />
</NavigationContextProvider>`}</pre>
          </div>
        </div>
      </div>

      {/* Props Reference */}
      <DataSectionHeader>Props Overview</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          border: '1px solid #d9d9d9'
        }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #d9d9d9' }}>Prop</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #d9d9d9' }}>Type</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #d9d9d9' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>
                <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>pageConfig</code>
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>Object</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>
                Configuration object defining the navigation structure
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>
                <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>getScopes</code>
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>Function</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>
                Returns a promise resolving to the user's permission scopes
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>
                <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>handleLogout</code>
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>Function</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>
                Function to handle user logout actions from the navigation
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>
                <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>userControlPane</code>
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>Component</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #d9d9d9' }}>
                Component to render in the user control section (e.g., profile, settings)
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px' }}>
                <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>navStyle</code>
              </td>
              <td style={{ padding: '12px' }}>String</td>
              <td style={{ padding: '12px' }}>
                Navigation layout style. Can be 'vertical' or 'horizontal'
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Advanced Example */}
      <DataSectionHeader>Advanced Example: Multi-Level Navigation</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <Texto style={{ marginBottom: '16px' }}>
          Here's an example showing a 3-level navigation structure with scope-based permissions:
        </Texto>
        
        <div style={{ 
          background: '#f9fafb', 
          border: '1px solid #d9d9d9',
          padding: '24px', 
          borderRadius: '8px' 
        }}>
          <div style={{ marginBottom: '20px' }}>
            <strong>Dashboard</strong> 
            <span style={{ color: '#666', marginLeft: '8px' }}>(Level 1)</span>
            <div style={{ marginLeft: '24px', marginTop: '8px' }}>
              <div style={{ marginBottom: '4px' }}>
                → Overview <span style={{ color: '#666' }}>(Level 2)</span>
              </div>
              <div style={{ marginBottom: '4px' }}>
                → Reports <span style={{ color: '#666' }}>(Level 2 - requires 'reports.view')</span>
              </div>
              <div style={{ marginBottom: '4px' }}>
                → Metrics <span style={{ color: '#666' }}>(Level 2)</span>
                <div style={{ marginLeft: '24px', marginTop: '4px' }}>
                  <div style={{ marginBottom: '2px' }}>
                    • Performance <span style={{ color: '#666' }}>(Level 3)</span>
                  </div>
                  <div>
                    • Revenue <span style={{ color: '#666' }}>(Level 3 - requires 'revenue.view')</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Navigation State Display */}
      <DataSectionHeader>Current Navigation State</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ 
          background: '#e6f7ff', 
          border: '1px solid #91d5ff',
          padding: '20px', 
          borderRadius: '8px' 
        }}>
          <DataItem label="Current Path" value={currentPath || '/'} />
          <DataItem label="Valid Pages Count" value={validPages ? validPages.length : 0} />
          <DataItem label="Navigation Style" value="Vertical" />
        </div>
      </div>

      {/* Best Practices */}
      <DataSectionHeader>Best Practices</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <Vertical gap="16px">
          <div style={{ 
            padding: '16px', 
            background: '#f6ffed', 
            border: '1px solid #b7eb8f', 
            borderRadius: '6px' 
          }}>
            <strong>✅ Use Consistent Icons:</strong> Always use MaterialIcon or MUI icons for consistency across your navigation
          </div>
          <div style={{ 
            padding: '16px', 
            background: '#fff2e6', 
            border: '1px solid #ffd591', 
            borderRadius: '6px' 
          }}>
            <strong>⚠️ Set Index Pages:</strong> Always set one page with index: true in each route group for proper default routing
          </div>
          <div style={{ 
            padding: '16px', 
            background: '#e6f7ff', 
            border: '1px solid #91d5ff', 
            borderRadius: '6px' 
          }}>
            <strong>💡 Leverage Quick Search:</strong> The built-in search (Ctrl/Cmd + K) automatically indexes all valid pages
          </div>
          <div style={{ 
            padding: '16px', 
            background: '#fff1f0', 
            border: '1px solid #ffaaa5', 
            borderRadius: '6px' 
          }}>
            <strong>🔐 Implement Scopes:</strong> Use hasPermission functions to control access based on user permissions
          </div>
        </Vertical>
      </div>

      {/* Action Section */}
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Horizontal gap="16px" style={{ justifyContent: 'center' }}>
          <GraviButton 
            onClick={() => {
              const code = `npm install @gravitate-js/excalibrr`;
              if (navigator.clipboard) {
                navigator.clipboard.writeText(code);
                alert('Install command copied!');
              }
            }}
          >
            <MaterialIcon name="content_copy" />
            Copy Install Command
          </GraviButton>
          <GraviButton 
            type="primary"
            onClick={() => window.open('https://github.com/gravitate-js/excalibrr', '_blank')}
          >
            <MaterialIcon name="launch" />
            View Documentation
          </GraviButton>
        </Horizontal>
      </div>
    </div>
  );
}

export default NavigationTemplate;
