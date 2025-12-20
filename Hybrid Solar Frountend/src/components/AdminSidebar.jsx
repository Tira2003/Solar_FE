import { Settings, Zap, LayoutDashboard, Search } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import logo from "@/pages/home/components/assests/logo.png";

// Menu items for admin navigation.
const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: <LayoutDashboard className="w-8 h-8" size={32} />,
  },
  {
    title: "Solar Units",
    url: "/admin/solar-units",
    icon: <Zap className="w-8 h-8" size={32} />,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: <Settings className="w-8 h-8" size={32} />,
  },
];

const AdminSideBarTab = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.url;

  return (
    <SidebarMenuItem key={item.url}>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link to={item.url}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function AdminSidebar() {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-bold text-foreground text-blue-900 my-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Hybrid Energy Logo" className="h-8 w-8" />
              <span>Hybrid Energy</span>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-blue-50 border-blue-200 focus:border-blue-400"
              />
            </div>
            <SidebarMenu className="mt-4">
              {filteredItems.map((item) => (
                <AdminSideBarTab key={item.url} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3 p-2 ">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
            <AvatarFallback className="bg-blue-600 text-white">
              {user?.firstName?.charAt(0) || user?.fullName?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium truncate">
              {user?.fullName || user?.firstName || "User"}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              {user?.primaryEmailAddress?.emailAddress || ""}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
