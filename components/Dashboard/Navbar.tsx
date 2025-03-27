import { Button } from '@/components/ui/button';
import { Bell, LayoutDashboard, LogOut, Menu, MenuIcon, Sun, User, UserRoundPen } from 'lucide-react';
import React from 'react';
import { ModeToggle } from '../Theme/Mode';
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Notification from './Notification';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-background text-foreground h-16 px-6 md:px-8 shadow-md z-50">
      {/* Left Icon */}
      <Button variant="ghost" className="p-2 rounded-md hover:bg-background cursor-pointer">
        <Menu className="w-6 h-6" />
      </Button>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Mode Toggle */}
        <ModeToggle />

        {/* Notifications */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-2 rounded-md hover:bg-background relative cursor-pointer">
              <Bell className="w-6 h-6" />
              <Badge variant="destructive" className="w-4 h-4 rounded-full absolute right-1 top-1 opacity-90">
                1
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Notification/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


        {/* User Avatar Dropdown */}
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="hover:bg-background rounded-full p-2 w-12 h-12 cursor-pointer">
              <Image
                src="/avatar.png"
                alt="User Avatar"
                className="rounded-full object-cover w-full h-full "
                height={48}
                width={48}
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className='py-2 px-4 pr-8'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer'>
              <LayoutDashboard className="mr-2" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              <UserRoundPen className="mr-2" />
              Edit Profile
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
              <LogOut className="mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
