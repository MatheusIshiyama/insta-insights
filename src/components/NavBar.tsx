import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

export function NavBar() {
  const [showDashboard, setShowDashboard] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowDashboard(router.pathname.startsWith('/dashboard'));
  }, [router.pathname]);

  function toggleDashboard(throughIcon = false) {
    if (throughIcon && router.pathname === '/') return;

    setShowDashboard(!showDashboard);

    router.push(showDashboard ? '/' : '/dashboard');
  }

  if (!showDashboard) {
    return (
      <div className="px-4 lg:px-6 h-14 flex items-center border-b">
        <div className="flex items-center justify-center cursor-pointer" onClick={() => toggleDashboard(true)}>
          <FaInstagram className="h-6 w-6 text-pink-600" />
          <h1 className="ml-2 text-xl font-bold text-pink-600">InstaInsights</h1>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button
            className="text-sm font-medium hover:underline underline-offset-4 bg-gradient-to-r from-purple-600 to-pink-600"
            onClick={() => toggleDashboard(false)}
          >
            Dashboard
          </Button>
        </nav>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => toggleDashboard(true)}>
          <FaInstagram className="w-8 h-8" />
          <h1 className="text-2xl font-bold">InstaInsights</h1>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="relative h-8 w-8 rounded-full flex-col justify-center outline-none">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-accent text-gray-800 p-2 mt-2 rounded-md flex flex-col gap-2" align="end">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem className="p-1">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">username</p>
                  <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row gap-1 cursor-pointer" onClick={() => toggleDashboard()}>
                <div className="flex flex-col justify-center">
                  <LogOut className="h-4 w-4" />
                </div>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
