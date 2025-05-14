# KisanERP - Farmers ERP System

A comprehensive ERP system designed specifically for farmers to manage their agricultural operations, market transactions, and business processes.

## Features

### Core Modules
1. **Authentication & User Management**
   - Farmer registration and login
   - Buyer registration and login
   - Admin dashboard
   - Role-based access control

2. **Market Management**
   - Real-time market prices
   - Bid management
   - Transaction history
   - Price reports and analytics

3. **Inventory Management**
   - Crop inventory tracking
   - Production cost management
   - Stock levels
   - QR code generation for inventory items

4. **Buyer Management**
   - Buyer profiles
   - Transaction history
   - Rating system
   - Communication system

5. **Farm Information**
   - Farm details
   - Crop management
   - Production tracking
   - Cost analysis

6. **Insights & Analytics**
   - Market trends
   - Price analysis
   - Transaction reports
   - Performance metrics

7. **Settings & Configuration**
   - User preferences
   - System settings
   - Offline mode
   - Data management

## Technical Requirements

### Prerequisites
- Node.js 18.x or higher
- pnpm 8.x or higher
- Git

### Environment Setup
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd farmers-erp-app/erp
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_auth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

### Technology Stack
- **Frontend Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form + Zod
- **State Management**: React Context
- **Authentication**: NextAuth.js
- **Database**: (To be configured)
- **API**: Next.js API Routes

### Development Guidelines
1. **Code Style**
   - Follow TypeScript best practices
   - Use ESLint for code linting
   - Follow component-based architecture
   - Implement proper error handling

2. **Git Workflow**
   - Use feature branches
   - Follow conventional commits
   - Maintain clean commit history
   - Regular code reviews

3. **Testing**
   - Unit tests for components
   - Integration tests for features
   - E2E tests for critical paths
   - Regular testing before deployment

4. **Performance**
   - Optimize images and assets
   - Implement proper caching
   - Use code splitting
   - Monitor bundle size

## Project Structure
```
erp/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin dashboard
│   ├── auth/              # Authentication
│   ├── buyer/             # Buyer portal
│   ├── farm-info/         # Farm management
│   ├── inventory/         # Inventory management
│   ├── market/            # Market operations
│   └── settings/          # User settings
├── components/            # Reusable components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## Deployment
1. Build the application:
   ```bash
   pnpm build
   ```

2. Start production server:
   ```bash
   pnpm start
   ```

## Support
For support and queries, please contact:
- Email: support@kisanerp.com
- Documentation: [Link to documentation]

## License
[Your License Type] - See LICENSE file for details 