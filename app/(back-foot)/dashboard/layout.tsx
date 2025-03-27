
import Navbar from '@/components/Dashboard/Navbar';
import Sidebar from '@/components/Dashboard/Sidebar';
import { ThemeProvider } from '@/components/Theme/theme-provider';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>

            <div className="flex h-screen ">
                {/* Sidebar - Hidden on Mobile, Shown on Large Screens */}
                <div className="hidden lg:flex lg:w-56 flex-shrink-0 fixed left-0 top-0 bg-slate-800 text-white h-full">
                    <Sidebar />
                </div>

                {/* Main Content Wrapper (Takes Remaining Space) */}
                <div className="flex flex-col w-full lg:ml-56">
                    {/* Navbar (Fixed) */}
                    <div className="fixed top-0 left-0 lg:left-56 right-0 bg-slate-900 text-white z-50">
                        <Navbar />
                    </div>

                    {/* Scrollable Main Content */}
                    <main className="mt-16 p-8 bg-background text-foreground light">
                        {children}
                    </main>
                </div>
            </div>

        </>
    );
};

export default DashboardLayout;
