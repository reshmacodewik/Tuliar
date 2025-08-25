# Menu Screens

This directory contains all the menu-related screens for the Tuliar app.

## EditProfileScreen

A responsive profile editing screen that allows users to update their personal information.

### Features:
- **Profile Picture Selection**: Choose between photo and avatar with edit functionality
- **Form Fields**: 
  - Nickname (with public visibility note)
  - Full Name
  - Email Address
  - Date of Birth (MM/DD/YYYY pickers)
  - Phone Number (with country code selector)
  - Timezone
- **Responsive Design**: Adapts to different screen sizes using the responsive hook
- **Modern UI**: Clean design with shadows, gradients, and proper spacing
- **Bottom Navigation**: Integrated navigation bar with active states

### Files:
- `EditProfileScreen.tsx` - Main component
- `editProfileStyles.ts` - Responsive styles

### Navigation:
- Accessible from SettingsScreen via "Edit Profile" button
- Uses stack navigation with back button functionality

### Dependencies:
- React Native Vector Icons
- React Native Picker
- Responsive hook for adaptive design
- Navigation stack integration

### Usage:
```typescript
// Navigate to Edit Profile screen
navigation.navigate('EditProfileScreen');
```

### Styling:
- Uses responsive width (wp) and height (hp) calculations
- Modern card-based design with shadows
- Green accent colors for primary actions
- Proper spacing and typography scaling
