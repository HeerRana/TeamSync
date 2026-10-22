# 🚀 TeamSync – Collaborative Project Management Platform

## 📝 Project Overview

**TeamSync** is a comprehensive collaborative project management platform designed for modern teams. It streamlines workspace management, project collaboration, task tracking, and team communication—empowering organizations to work more efficiently with real-time collaboration, role-based permissions, and intelligent project analytics.

---

## 🌟 Key Features

- **Workspace Management**
  - Create and manage multiple workspaces for different teams or organizations
  - Role-based access control with granular permissions
  - Workspace analytics and performance insights
  - Member invitation and management system

- **Project Collaboration**
  - **Dynamic Project Creation:** Instantly create projects with customizable settings, deadlines, and team assignments
  - **Real-time Project Analytics:** Track project progress, completion rates, and team performance with interactive charts
  - **Project Templates:** Pre-built templates for different project types (Agile, Waterfall, Kanban)
  - **Project History & Versioning:** Track changes and maintain project history

- **Task Management System**
  - **Advanced Task Creation:** Create tasks with priorities, assignees, due dates, and custom fields
  - **Task Status Tracking:** Real-time status updates with visual progress indicators
  - **Task Dependencies:** Set up task dependencies and critical path analysis
  - **Bulk Task Operations:** Select and modify multiple tasks simultaneously
  - **Task Comments & Attachments:** Collaborative task discussion with file sharing

- **Team Member Management**
  - **Role-Based Permissions:** Granular permission system (Admin, Manager, Member, Viewer)
  - **Member Invitations:** Email-based invitation system with role assignment
  - **Member Analytics:** Track individual and team performance metrics
  - **Activity Timeline:** Monitor team activities and contributions

- **Real-time Collaboration**
  - **Live Updates:** Real-time synchronization across all team members
  - **Activity Notifications:** Instant notifications for task updates, comments, and deadlines
  - **Collaborative Editing:** Multiple users can work on the same project simultaneously
  - **Conflict Resolution:** Intelligent conflict detection and resolution

- **Analytics & Reporting**
  - **Workspace Analytics:** Comprehensive dashboard with key performance indicators
  - **Project Performance Metrics:** Track completion rates, time tracking, and resource utilization
  - **Team Productivity Insights:** Analyze team efficiency and identify bottlenecks
  - **Custom Reports:** Generate custom reports for stakeholders and management

- **User Authentication & Security**
  - **Google OAuth Integration:** Secure authentication with Google accounts
  - **JWT Token Management:** Secure session management with automatic token refresh
  - **Permission Guards:** Route-level security with role-based access control
  - **Data Encryption:** All sensitive data encrypted and securely stored

- **Modern Dashboard & UI**
  - **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices
  - **Dark/Light Mode:** Toggle between themes for comfortable viewing
  - **Accessible Interface:** WCAG compliant design for inclusive user experience
  - **Customizable Layout:** Drag-and-drop interface customization

- **Advanced Features**
  - **Task Filtering & Search:** Advanced filtering by status, assignee, priority, and date ranges
  - **Export Functionality:** Export projects and tasks to various formats (PDF, CSV, Excel)
  - **Integration Ready:** API endpoints for third-party integrations
  - **Backup & Recovery:** Automatic data backup and recovery systems

---

## 🛠️ Tools & Technologies

### Frontend
- **React 18** with TypeScript
- **Vite** (Build tool)
- **TailwindCSS** (Styling)
- **shadcn/ui** (UI components)
- **React Query** (Data fetching)
- **React Hook Form** (Form management)
- **Zod** (Validation)
- **Axios** (HTTP client)

### Backend
- **Node.js** with TypeScript
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **JWT** (Authentication)
- **Passport.js** (OAuth strategies)
- **bcrypt** (Password hashing)
- **UUID** (Unique identifiers)

### Development & Deployment
- **ESLint** (Code linting)
- **TypeScript** (Type safety)
- **Vercel** (Deployment)
- **Git** (Version control)

---

## 🚦 Getting Started

### 1. Set Up Environment Variables

Create a `.env` file in the backend directory and add:

```env
MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net/teamsync"
JWT_SECRET="your-jwt-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
PORT=5000
NODE_ENV=development
```

### 2. Install Dependencies

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd client
npm install
```

### 4. Run the Application

#### Start Backend Server
```bash
cd backend
npm run dev
```

#### Start Frontend Development Server
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 🌐 Deployment

### Backend Deployment (Vercel)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds

### Frontend Deployment (Vercel)
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy with automatic builds

**Explore:** [Your deployed URL here]

---

## 🙌 Credits

Built by [Harsh810](https://harsh810.vercel.app) – Inspired by modern project management tools and collaborative platforms.

---

## 📖 How It Works

1. **Workspace Setup:** Create workspaces for different teams or organizations
2. **Team Invitation:** Invite team members with appropriate roles and permissions
3. **Project Creation:** Set up projects with tasks, deadlines, and team assignments
4. **Collaborative Work:** Team members work together on tasks with real-time updates
5. **Progress Tracking:** Monitor project progress and team performance through analytics
6. **Reporting:** Generate reports and insights for stakeholders

---

## ❓ FAQ

- **What makes TeamSync unique?**  
  TeamSync combines real-time collaboration with advanced project management features, offering role-based permissions, comprehensive analytics, and seamless team coordination—all in a modern, accessible interface.

- **How does TeamSync handle team permissions?**  
  TeamSync uses a granular role-based permission system (Admin, Manager, Member, Viewer) that controls access to workspaces, projects, and tasks based on user roles.

- **How secure is my team's data?**  
  All data is encrypted and securely stored. JWT authentication and Google OAuth ensure your information is protected. Role-based access control prevents unauthorized access.

- **Can I integrate TeamSync with other tools?**  
  TeamSync provides RESTful APIs that allow integration with third-party tools and services. Documentation for API endpoints is available for developers.

---

## 📄 Terms & Privacy Policy

By using TeamSync, you agree to our terms of service and privacy policy. Your data is securely stored and never shared with third parties. For full details, please refer to our privacy policy document or contact us for more information.

---

## ⚠️ Intellectual Property Notice

The source code and features of this project are the intellectual property of Harsh810. Copying, modifying, or reusing any part of this code or its features is strictly prohibited.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

