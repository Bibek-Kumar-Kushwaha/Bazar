import Link from 'next/link'
import {
    LayoutDashboard, Package, ShoppingBag, Users, Store,
    Settings, UsersRound, Factory
} from 'lucide-react'
import React from 'react'

interface SidebarItem {
    href: string
    icon: React.ReactNode
    text: string
}

const menuItems: SidebarItem[] = [
    {
        text: "Dashboard",
        icon: <LayoutDashboard />,
        href: "/dashboard"
    },
    {
        text: "Catalog",
        icon: <Package />,
        href: "/dashboard/catalog"
    },
    {
        text: "Orders",
        icon: <ShoppingBag />,
        href: "/dashboard/orders"
    },
    {
        text: "Customers",
        icon: <Users />,
        href: "/dashboard/customers"
    },
    {
        text: "Markets",
        icon: <Store />,
        href: "/dashboard/markets"
    },
    {
        text: "Farmers",
        icon: <Factory />,
        href: "/dashboard/farmers"
    },
    {
        text: "Staff",
        icon: <UsersRound />,
        href: "/dashboard/staff"
    },
    {
        text: "Settings",
        icon: <Settings />,
        href: "/dashboard/settings"
    },
    {
        text: "Online Store",
        icon: <Store />,
        href: "/dashboard/store"
    },
]

const Sidebar = () => {
    return (
        <aside className='h-full  bg-slate-800 w-56 text-slate-50 p-4 flex flex-col space-y-6 shadow-md border-r-2'>
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wide text-center py-3">LOGO</div>

            {/* Menu */}
            <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                    <SidebarLink key={index} {...item} />
                ))}
            </nav>
        </aside>
    )
}

/* Reusable Sidebar Link Component */
const SidebarLink: React.FC<SidebarItem> = ({ href, icon, text }) => (
    <Link href={href} className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-700 transition">
        {icon}
        <span className="font-medium tracking-wide">{text}</span>
    </Link>
)

export default Sidebar
