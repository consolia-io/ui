#!/usr/bin/env node
/* eslint-disable no-console */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Generating component documentation...');

try {
  // Generate TypeDoc documentation
  execSync('npx typedoc', { stdio: 'inherit' });
  
  // Read the generated interfaces documentation
  const docsPath = path.join(__dirname, '..', 'docs');
  const interfacesPath = path.join(docsPath, 'interfaces');
  
  if (!fs.existsSync(interfacesPath)) {
    console.log('❌ No interfaces documentation found');

    return;
  }
  
  // Get all interface files
  const interfaceFiles = fs.readdirSync(interfacesPath)
    .filter(file => file.endsWith('.md'))
    .sort();
  
  // Generate component list for README with better descriptions
  const componentDescriptions = {
    'Accordion': 'Collapsible content sections with multiple expansion support',
    'Avatar': 'User profile image with fallback text display',
    'Badge': 'Small status indicators and informational labels',
    'Box': 'Versatile container with optional image, header, and footer',
    'Button': 'Interactive element for user actions with multiple themes',
    'Calendar': 'Date picker with range and single selection modes',
    'CalendarMonths': 'Month and year selection interface',
    'Divider': 'Visual separator line with customizable spacing',
    'Drawer': 'Slide-out panel overlay for secondary content',
    'Field': 'Multi-line textarea input with validation and actions',
    'Form': 'Form wrapper with validation and submission handling',
    'Icon': 'Consistent icon wrapper with theming support',
    'Image': 'Enhanced Next.js Image with additional styling options',
    'Input': 'Single-line form input with validation and actions',
    'Loading': 'Animated loading spinner with customizable appearance',
    'LoadingOverlay': 'Full-screen loading overlay with message display',
    'Logo': 'Consolia brand logo in various formats and styles',
    'Menu': 'Dropdown menu with nested options and keyboard navigation',
    'Modal': 'Centered overlay dialog for important interactions',
    'Nodes': 'Hierarchical node tree visualization with connecting lines',
    'Popover': 'Floating content overlay triggered by user interaction',
    'Portal': 'Render content outside normal DOM hierarchy',
    'Provider': 'Theme and context provider for the entire UI system',
    'Select': 'Dropdown selection with filtering and positioning options',
    'SelectMulti': 'Multi-selection dropdown with limits and batch operations',
    'Stack': 'Responsive layout container with flexible spacing and alignment',
    'Table': 'Data table with sorting, pagination, and nested rows',
    'Tabs': 'Tabbed interface for organizing content into panels',
    'Text': 'Versatile text element with multiple sizes, styles, and link support',
    'Upload': 'File upload with drag & drop, validation, and progress',
    'View': 'Main layout container with hero styling and responsive behavior'
  };

  const components = interfaceFiles
    .map(file => file.replace('.md', ''))
    .filter(name => name.startsWith('I') && name.length > 1)
    .map(name => name.substring(1)) // Remove 'I' prefix
    .sort();
  
  console.log(`📚 Found ${components.length} components:`, components.join(', '));
  
  // Update README.md with component documentation links
  const readmePath = path.join(__dirname, '..', 'README.md');
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  
  // Find and replace the components section
  const componentsSection = `
## Components

This library includes the following components with full TypeScript support and comprehensive documentation:

${components.map(component => {
  const description = componentDescriptions[component] || `Component for ${component.toLowerCase()} functionality`;

  return `- **[${component}](./docs/interfaces/I${component}.md)** - ${description}`;
}).join('\n')}

> 📖 **Full API Documentation**: Detailed TypeScript interfaces, props, and examples are available in the [\`docs/interfaces/\`](./docs/interfaces/) directory. All documentation is auto-generated from TSDoc comments in the source code.

`;

  // Check if components section exists, if not add it before License
  const licenseIndex = readmeContent.indexOf('## License');
  const componentsIndex = readmeContent.indexOf('## Components');
  
  if (componentsIndex !== -1) {
    // Replace existing components section
    const nextSectionIndex = readmeContent.indexOf('## ', componentsIndex + 1);

    if (nextSectionIndex !== -1) {
      readmeContent = readmeContent.substring(0, componentsIndex) + 
                    componentsSection + 
                    readmeContent.substring(nextSectionIndex);
    } else {
      readmeContent = readmeContent.substring(0, componentsIndex) + componentsSection;
    }
  } else if (licenseIndex !== -1) {
    // Add before License section
    readmeContent = readmeContent.substring(0, licenseIndex) + 
                    componentsSection + '\n' +
                    readmeContent.substring(licenseIndex);
  } else {
    // Add at the end
    readmeContent += '\n' + componentsSection;
  }
  
  fs.writeFileSync(readmePath, readmeContent);
  
  console.log('✅ Documentation generated successfully!');
  console.log('📝 README.md updated with component links');
  console.log('🌐 View full documentation in the ./docs directory');
  
} catch (error) {
  console.error('❌ Error generating documentation:', error.message);
  process.exit(1);
} 