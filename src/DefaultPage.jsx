import React from 'react';
import {
  GraviButton,
  IconButton,
  BigButton,
  MaterialIcon,
  DashboardWidget,
  DataItem,
  DataItemRow,
  DataSectionHeader,
  Horizontal,
  Vertical,
  UnderlineHeader,
  Texto,
  CheckCard,
  CheckCardGroup,
  BBDTag,
  DeltaTag,
  ManyTag,
  WidgetHeader,
  LoadingAnimation,
  NothingMessage
} from '@gravitate-js/excalibrr';

function DefaultPage() {
  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Header */}
      <UnderlineHeader>
        <MaterialIcon name="dashboard" />
        Excalibrr Design System Showcase
      </UnderlineHeader>
      
      {/* Introduction */}
      <div style={{ marginBottom: '32px' }}>
        <Texto>
          Welcome to the Excalibrr Design System! This page demonstrates various components 
          using the PE Light theme. The theme features a professional color palette with 
          info blue (#3E73A6) and navy navigation colors.
        </Texto>
      </div>

      {/* Buttons Section */}
      <DataSectionHeader>Button Components</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <Horizontal gap="12px" style={{ marginBottom: '16px' }}>
          <GraviButton>Standard Button</GraviButton>
          <GraviButton type="primary">Primary Button</GraviButton>
          <GraviButton danger>Danger Button</GraviButton>
          <GraviButton disabled>Disabled Button</GraviButton>
        </Horizontal>
        
        <Horizontal gap="12px" style={{ marginBottom: '16px' }}>
          <IconButton icon={<MaterialIcon name="settings" />} />
          <IconButton icon={<MaterialIcon name="refresh" />} />
          <IconButton icon={<MaterialIcon name="download" />} />
        </Horizontal>
        
        <BigButton>
          <MaterialIcon name="add" />
          Big Action Button
        </BigButton>
      </div>

      {/* Data Display Section */}
      <DataSectionHeader>Data Display Components</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <Horizontal gap="24px" wrap style={{ marginBottom: '16px' }}>
          <DataItem label="Total Users" value="12,345" />
          <DataItem label="Revenue" value="$987,654" />
          <DataItem label="Growth Rate" value="23.5%" />
          <DataItem label="Active Sessions" value="1,890" />
        </Horizontal>
        
        <DataItemRow 
          items={[
            { label: "API Calls", value: "2.1M" },
            { label: "Success Rate", value: "99.8%" },
            { label: "Avg Response", value: "145ms" }
          ]} 
        />
      </div>

      {/* Tags Section */}
      <DataSectionHeader>Tag Components</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <Horizontal gap="12px" style={{ marginBottom: '16px' }}>
          <BBDTag>Active</BBDTag>
          <BBDTag type="warning">Pending</BBDTag>
          <BBDTag type="error">Error</BBDTag>
          <BBDTag type="success">Complete</BBDTag>
        </Horizontal>
        
        <Horizontal gap="12px" style={{ marginBottom: '16px' }}>
          <DeltaTag value={12.5} />
          <DeltaTag value={-3.2} />
          <DeltaTag value={0} />
        </Horizontal>
        
        <ManyTag count={5} label="notifications" />
      </div>

      {/* Cards Section */}
      <DataSectionHeader>Card Components</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <CheckCardGroup style={{ marginBottom: '16px' }}>
          <CheckCard 
            title="Option 1"
            description="First choice with detailed description"
            value="option1"
          />
          <CheckCard 
            title="Option 2"
            description="Second choice with more information"
            value="option2"
          />
          <CheckCard 
            title="Option 3"
            description="Third choice for comparison"
            value="option3"
          />
        </CheckCardGroup>
      </div>

      {/* Widgets Section */}
      <DataSectionHeader>Dashboard Widgets</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <Horizontal gap="24px" wrap>
          <DashboardWidget 
            title="Performance Metrics"
            style={{ minWidth: '300px', minHeight: '200px' }}
          >
            <Vertical gap="16px">
              <DataItem label="CPU Usage" value="67%" />
              <DataItem label="Memory" value="4.2GB" />
              <DataItem label="Disk I/O" value="156 MB/s" />
            </Vertical>
          </DashboardWidget>
          
          <DashboardWidget 
            title="System Status"
            style={{ minWidth: '300px', minHeight: '200px' }}
          >
            <Vertical gap="12px">
              <Horizontal gap="8px">
                <MaterialIcon name="check_circle" style={{ color: '#52c41a' }} />
                <Texto>All systems operational</Texto>
              </Horizontal>
              <Horizontal gap="8px">
                <MaterialIcon name="schedule" style={{ color: '#faad14' }} />
                <Texto>Maintenance scheduled</Texto>
              </Horizontal>
              <Horizontal gap="8px">
                <MaterialIcon name="info" style={{ color: '#3E73A6' }} />
                <Texto>Updates available</Texto>
              </Horizontal>
            </Vertical>
          </DashboardWidget>
        </Horizontal>
      </div>

      {/* Layout Components */}
      <DataSectionHeader>Layout Examples</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ 
          border: '1px solid #d9d9d9', 
          borderRadius: '6px', 
          padding: '16px',
          marginBottom: '16px'
        }}>
          <WidgetHeader>Horizontal Layout</WidgetHeader>
          <Horizontal gap="16px" style={{ marginTop: '12px' }}>
            <div style={{ padding: '12px', background: '#f0f0f0', borderRadius: '4px' }}>Item 1</div>
            <div style={{ padding: '12px', background: '#f0f0f0', borderRadius: '4px' }}>Item 2</div>
            <div style={{ padding: '12px', background: '#f0f0f0', borderRadius: '4px' }}>Item 3</div>
          </Horizontal>
        </div>
        
        <div style={{ 
          border: '1px solid #d9d9d9', 
          borderRadius: '6px', 
          padding: '16px'
        }}>
          <WidgetHeader>Vertical Layout</WidgetHeader>
          <Vertical gap="8px" style={{ marginTop: '12px' }}>
            <div style={{ padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>Row 1</div>
            <div style={{ padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>Row 2</div>
            <div style={{ padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>Row 3</div>
          </Vertical>
        </div>
      </div>

      {/* State Components */}
      <DataSectionHeader>State & Feedback</DataSectionHeader>
      <div style={{ marginBottom: '32px' }}>
        <Vertical gap="16px">
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <LoadingAnimation />
            <Texto style={{ marginTop: '12px' }}>Loading Animation</Texto>
          </div>
          
          <NothingMessage 
            message="No data available" 
            description="Try adjusting your filters or check back later"
          />
        </Vertical>
      </div>

      {/* Theme Information */}
      <DataSectionHeader>Current Theme: PE Light</DataSectionHeader>
      <div style={{ 
        padding: '16px', 
        background: '#f6f6f6', 
        borderRadius: '6px',
        marginBottom: '32px'
      }}>
        <Horizontal gap="24px" wrap>
          <div>
            <strong>Info Color:</strong>
            <div style={{ 
              width: '40px', 
              height: '20px', 
              background: '#3E73A6', 
              display: 'inline-block', 
              marginLeft: '8px',
              borderRadius: '3px'
            }} />
          </div>
          <div>
            <strong>Nav1 Color:</strong>
            <div style={{ 
              width: '40px', 
              height: '20px', 
              background: '#19304B', 
              display: 'inline-block', 
              marginLeft: '8px',
              borderRadius: '3px'
            }} />
          </div>
          <div>
            <strong>Nav2 Color:</strong>
            <div style={{ 
              width: '40px', 
              height: '20px', 
              background: '#30455D', 
              display: 'inline-block', 
              marginLeft: '8px',
              borderRadius: '3px'
            }} />
          </div>
        </Horizontal>
      </div>
    </div>
  );
}

export default DefaultPage;