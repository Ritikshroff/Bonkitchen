# BON Kitchen - Reusable Components Documentation

This project now includes a comprehensive set of reusable UI components built with Flowbite React and Framer Motion. These components follow modern design principles and are fully mobile-first responsive.

## 🎨 Component Library

### `/src/components/ui/`

#### 1. **CustomButton**

A versatile button component with multiple variants and animations.

```tsx
import { CustomButton } from "../components/ui";

<CustomButton
  variant="primary" // primary | secondary | ghost | gradient | whatsapp
  icon={Phone}
  iconPosition="left" // left | right
  animate={true}
  fullWidth={false}
  onClick={handleClick}
>
  Button Text
</CustomButton>;
```

**Features:**

- Multiple styled variants
- Icon support with positioning
- Hover animations
- Full-width option
- Flowbite integration

#### 2. **CustomCard**

Flexible card component with different styles and hover effects.

```tsx
import { CustomCard } from "../components/ui";

<CustomCard
  title="Card Title"
  subtitle="Card subtitle"
  icon={Star}
  variant="default" // default | gradient | outlined | glass
  hoverable={true}
  animate={true}
  onClick={handleClick}
>
  <p>Card content goes here</p>
</CustomCard>;
```

**Features:**

- Multiple visual variants
- Optional title, subtitle, and icon
- Hover animations
- Click handling
- Glass morphism support

#### 3. **CustomBadge**

Small status indicators and labels.

```tsx
import { CustomBadge } from "../components/ui";

<CustomBadge
  variant="success" // success | warning | error | info | veg | nonveg | spicy | popular
  size="md" // sm | md | lg
  icon={CheckCircle}
>
  Badge Text
</CustomBadge>;
```

**Features:**

- Food-specific variants (veg/non-veg)
- Multiple sizes
- Icon support
- Rounded design

#### 4. **CustomSidebar**

Mobile-first sidebar navigation with hamburger menu.

```tsx
import { CustomSidebar } from "../components/ui";

<CustomSidebar
  title="Navigation Title"
  subtitle="Optional subtitle"
  navigationItems={[
    { id: "section1", label: "Section 1", icon: Home },
    { id: "section2", label: "Section 2", icon: Star },
  ]}
  activeSection="section1"
  onSectionClick={handleSectionClick}
  showBackButton={true}
>
  {/* Optional children content */}
</CustomSidebar>;
```

**Features:**

- Mobile hamburger menu
- Desktop fixed sidebar
- Smooth animations
- Active section highlighting
- Scroll-to-section functionality

#### 5. **MenuItemCard**

Specialized card for displaying menu items with cart functionality.

```tsx
import { MenuItemCard } from "../components/ui";

<MenuItemCard
  id="item1"
  name="Chicken Biryani"
  description="Authentic Hyderabadi style biryani"
  price={299}
  originalPrice={349}
  emoji="🍛"
  isVeg={false}
  isSpicy={true}
  isPopular={true}
  rating={4.8}
  quantity={2}
  onAdd={handleAdd}
  onRemove={handleRemove}
  onFavorite={handleFavorite}
/>;
```

**Features:**

- Veg/non-veg indicators
- Spice level indicators
- Rating display
- Quantity controls
- Add to cart functionality
- Favorite button

#### 6. **FloatingCart**

Floating cart widget with order summary.

```tsx
import { FloatingCart } from "../components/ui";

<FloatingCart
  cart={cartItems}
  total={totalAmount}
  onWhatsAppOrder={handleWhatsAppOrder}
  onCheckout={handleCheckout}
  minDeliveryAmount={299}
/>;
```

**Features:**

- Floating animation
- Real-time cart updates
- Delivery progress indicator
- Multiple checkout options
- Auto-hide when empty

#### 7. **SectionHeader**

Standardized section headers with icons and animations.

```tsx
import { SectionHeader } from "../components/ui";

<SectionHeader
  title="Section Title"
  subtitle="Optional description"
  icon={Star}
  centered={true}
  animate={true}
/>;
```

**Features:**

- Consistent typography
- Icon integration
- Animation support
- Centered or left-aligned
- Responsive sizing

## 🔧 Custom Hooks

### `/src/hooks/useCart.ts`

Cart state management hook with full CRUD operations.

```tsx
import { useCart } from "../hooks/useCart";

const {
  cart,
  cartTotal,
  addToCart,
  removeFromCart,
  getCartItemQuantity,
  clearCart,
  getTotalItems,
  handleWhatsAppOrder,
} = useCart();
```

## 📊 Data Management

### `/src/data/menuData.ts`

Centralized menu data with TypeScript interfaces.

```tsx
import { menuData, menuCategories } from "../data/menuData";
```

## 🎯 Design Principles

### Color Palette

- **Primary Orange**: `#f97316` (orange-500)
- **Dark Gray**: `#374151` (gray-700)
- **Light Gray**: `#f9fafb` (gray-50)
- **White**: `#ffffff`

### Mobile-First Approach

- All components start with mobile design
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized performance

### Animation Strategy

- Subtle entrance animations using Framer Motion
- Hover effects for desktop users
- Page transitions for navigation
- Performance-optimized animations

## 🚀 Usage Examples

### Simple Menu Page

```tsx
import { CustomSidebar, MenuItemCard, SectionHeader } from "../components/ui";
import { useCart } from "../hooks/useCart";
import { menuData } from "../data/menuData";

const MenuPage = () => {
  const { addToCart, removeFromCart, getCartItemQuantity } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomSidebar {...sidebarProps} />
      <div className="lg:ml-80">
        <SectionHeader title="Our Menu" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData.map((item) => (
            <MenuItemCard
              key={item.id}
              {...item}
              quantity={getCartItemQuantity(item.id)}
              onAdd={() => addToCart(item)}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
```

### Contact Form with Cards

```tsx
import { CustomCard, CustomButton, SectionHeader } from "../components/ui";

const ContactPage = () => (
  <div className="py-16">
    <SectionHeader title="Contact Us" />
    <div className="grid md:grid-cols-2 gap-8">
      <CustomCard title="Call Us" icon={Phone}>
        <p>+91 8076507512</p>
        <CustomButton variant="primary">Call Now</CustomButton>
      </CustomCard>
      <CustomCard title="Email Us" icon={Mail}>
        <p>hello@bonkitchen.com</p>
        <CustomButton variant="secondary">Send Email</CustomButton>
      </CustomCard>
    </div>
  </div>
);
```

## 📱 Responsive Behavior

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Component Adaptations

- Sidebar becomes hamburger menu on mobile
- Cards stack vertically on small screens
- Buttons become full-width on mobile
- Typography scales appropriately

## 🎨 Customization

### Theme Variables

Components use CSS custom properties that can be overridden:

```css
:root {
  --bon-orange: #f97316;
  --bon-gray-dark: #374151;
  --bon-gray-light: #f9fafb;
  --bon-white: #ffffff;
}
```

### Component Extension

All components accept className props for custom styling:

```tsx
<CustomButton className="my-custom-styles">Custom Button</CustomButton>
```

## 🧪 Testing

- Components are built with TypeScript for type safety
- Props are validated with TypeScript interfaces
- Responsive design tested across devices
- Performance optimized for mobile

## 📦 Dependencies

- **React 18+**
- **Flowbite React** - UI components
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

This component library provides a solid foundation for building consistent, mobile-first, and accessible user interfaces for the BON Kitchen application.
