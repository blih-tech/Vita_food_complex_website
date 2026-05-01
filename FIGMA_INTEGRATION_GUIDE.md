# Figma MCP Integration Guide - Vita Food Complex

## 🎯 Setup Complete

Your Figma MCP integration is now configured and ready to use! Here's what has been set up:

### ✅ Authentication Status
- **User**: blih.marketing2023@gmail.com
- **Handle**: bilhmarketing
- **Teams**: 9 teams available (including Vita Food Complex)
- **Access**: Full design system integration capabilities

### ✅ Created Assets
1. **Design System File**: [Vita Food Complex Design System](https://www.figma.com/design/mI9AUaONaYfLHAZGxdCh2a)
2. **Component Examples**: VitaButton, VitaHeroSection
3. **Integration Documentation**: FIGMA_DESIGN_SYSTEM.md

## 🚀 Quick Start Commands

### 1. Explore Your Figma Files
```bash
# List all available teams and files
mcp0_whoami

# Get design libraries for a specific file
mcp0_get_libraries --fileKey="YOUR_FILE_KEY"

# Search for components in design system
mcp0_search_design_system --query="button" --fileKey="mI9AUaONaYfLHAZGxdCh2a"
```

### 2. Extract Design Information
```bash
# Get design context for implementation
mcp0_get_design_context \
  --nodeId="NODE_ID" \
  --fileKey="FILE_KEY" \
  --clientFrameworks="react,next.js" \
  --clientLanguages="typescript"

# Get color tokens and variables
mcp0_get_variable_defs \
  --nodeId="NODE_ID" \
  --fileKey="FILE_KEY"

# Get component metadata
mcp0_get_metadata \
  --nodeId="NODE_ID" \
  --fileKey="FILE_KEY"
```

### 3. Capture Web Pages to Figma
```bash
# Capture your live website to Figma
mcp0_generate_figma_design \
  --captureId="CAPTURE_ID" \
  --outputMode="newFile" \
  --fileName="Vita Food Website Capture"

# For local development (http://localhost:3000)
mcp0_generate_figma_design \
  --captureId="CAPTURE_ID" \
  --outputMode="existingFile" \
  --fileKey="mI9AUaONaYfLHAZGxdCh2a"
```

### 4. Create Diagrams in FigJam
```bash
# Create workflow diagrams
mcp0_generate_diagram \
  --name="Vita Food Workflow" \
  --mermaidSyntax="graph LR
    A[Design] --> B[Development]
    B --> C[Testing]
    C --> D[Deployment]" \
  --planKey="team::1427304996132853227"
```

## 🎨 Design System Integration

### Current Design Tokens
```css
/* Primary Colors */
--color-primary: #23b349;
--color-primary-dark: #0f4b1f;
--color-background-page: #ffffff;
--color-body-text: #333733;

/* Typography */
--font-display: "Funnel Display", sans-serif;
--font-body: "Outfit", sans-serif;

/* Component Examples */
- Button: 60px height, #0F4B1F background
- Hero: 180px Funnel Display
- Body: 16px Outfit
```

### Component Mapping Examples

#### VitaButton Component
```typescript
// Location: /apps/frontend/src/components/ui/VitaButton.tsx
import { VitaButton } from "../ui/VitaButton";

<VitaButton variant="primary" size="xl">
  Get Started
</VitaButton>
```

#### Hero Section
```typescript
// Location: /apps/frontend/src/components/sections/VitaHeroSection.tsx
import { VitaHeroSection } from "../sections/VitaHeroSection";

<VitaHeroSection />
```

## 🔄 Workflow Integration

### Design-to-Code Workflow
1. **Design in Figma** → Create components and designs
2. **Extract Context** → Use `mcp0_get_design_context`
3. **Implement Component** → Follow existing patterns
4. **Test Integration** → Verify design consistency
5. **Update Mapping** → Maintain sync (Code Connect requires upgrade)

### Code-to-Design Workflow
1. **Capture Website** → Use `mcp0_generate_figma_design`
2. **Review in Figma** → Analyze layout and design
3. **Extract Improvements** → Get design suggestions
4. **Implement Changes** → Update code based on feedback
5. **Repeat** → Continuous improvement cycle

## 📋 Available Figma Teams

### Your Accessible Teams:
1. **Blih Marketing's team** (Full access) - `team::1427304996132853227`
2. **Vita Food Complex** (View access) - `team::1622968281583665201`
3. **Moodboard** (View access) - `team::1578688562949869917`
4. **LionStone** (View access) - `team::1578701581722050357`
5. **Equb_app Design** (View access) - `team::1578730507718615339`
6. **LONGTEA Website UI/UX** (View access) - `team::1578730710630390191`
7. **Tamra Website Design** (View access) - `team::1578731723255250950`
8. **Blih CORE** (View access) - `team::1603680138178290859`
9. **Brand Files & Templates** (View access) - `team::1613929689863144314`

## 🛠️ Advanced Features

### Asset Management
```bash
# Upload images to Figma
mcp0_upload_assets --fileKey="FILE_KEY" --count=3

# Get screenshots of designs
mcp0_get_screenshot --nodeId="NODE_ID" --fileKey="FILE_KEY"
```

### Design System Search
```bash
# Search for specific components
mcp0_search_design_system \
  --query="card" \
  --fileKey="FILE_KEY" \
  --includeComponents=true \
  --includeVariables=true \
  --includeStyles=true
```

### FigJam Integration
```bash
# Get FigJam content
mcp0_get_figjam --nodeId="NODE_ID" --fileKey="FILE_KEY"

# Generate diagrams
mcp0_generate_diagram \
  --name="Architecture Diagram" \
  --mermaidSyntax="graph TD
    A[Frontend] --> B[Backend]
    B --> C[Database]"
```

## 🎯 Next Steps

### Immediate Actions
1. **Explore Design System**: Open the created Figma file
2. **Test Integration**: Try the quick start commands
3. **Review Components**: Check VitaButton and VitaHeroSection
4. **Capture Current Site**: Use `mcp0_generate_figma_design` for your live site

### Development Integration
1. **Add to Workflow**: Include Figma MCP in your development process
2. **Design Tokens Sync**: Regularly update CSS variables from Figma
3. **Component Library**: Build reusable components based on designs
4. **Documentation**: Keep FIGMA_DESIGN_SYSTEM.md updated

### Advanced Usage
1. **Automated Sync**: Set up scripts to sync design tokens
2. **Component Mapping**: Consider upgrading for Code Connect (requires Developer seat)
3. **Design Reviews**: Regular design-to-code reviews
4. **Asset Pipeline**: Automated asset upload and optimization

## 📞 Support & Resources

### Documentation
- **Design System Guide**: `/FIGMA_DESIGN_SYSTEM.md`
- **Integration Examples**: Component files in `/apps/frontend/src/components/`
- **Figma File**: [Vita Food Complex Design System](https://www.figma.com/design/mI9AUaONaYfLHAZGxdCh2a)

### Common Commands
```bash
# Check authentication
mcp0_whoami

# Get help with any tool
# The MCP tools provide detailed error messages and guidance

# Create new design files
mcp0_create_new_file --fileName="New Design" --planKey="team::1427304996132853227" --editorType="design"
```

---

**🎉 Your Figma MCP integration is now fully configured and ready to use!**

Start by exploring your design system file and trying out the quick start commands above. The integration provides seamless workflow between your Figma designs and Vita Food Complex codebase.
