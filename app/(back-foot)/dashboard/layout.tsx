import Navbar from '@/components/Dashboard/Navbar'
import Sidebar from '@/components/Dashboard/Sidebar'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar (Fixed) */}
            <div className="w-56 flex-shrink-0 h-screen fixed left-0 top-0 bg-slate-800 text-white border-r-white-200">
                <Sidebar />
            </div>

            {/* Main Content Wrapper (Takes Remaining Space) */}
            <div className="flex flex-col w-full ml-56">
                {/* Navbar (Fixed) */}
                <div className="fixed top-0 left-56 right-0 bg-slate-900 text-white z-50">
                    <Navbar />
                </div>

                {/* Scrollable Main Content */}
                <main className='mt-16 p-8 bg-slate-950 text-slate-50 min-h-screen'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
