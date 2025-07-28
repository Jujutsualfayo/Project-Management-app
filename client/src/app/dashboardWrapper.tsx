import React from "react";
import Navbar from "@/app/(components)/Navbar";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-primary text-white dark:bg-dark.primary px-6 py-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        {/* You can add anything else here (e.g., logo or user info) */}
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
