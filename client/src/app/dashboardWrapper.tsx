import React from "react";
import Link from "next/link";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-primary text-white dark:bg-dark.primary px-6 py-8 space-y-4">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="space-y-3">
          <Link href="/dashboard" className="block hover:text-accent">Home</Link>
          <Link href="/dashboard/projects" className="block hover:text-accent">Projects</Link>
          <Link href="/dashboard/team" className="block hover:text-accent">Team</Link>
          <Link href="/dashboard/settings" className="block hover:text-accent">Settings</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
