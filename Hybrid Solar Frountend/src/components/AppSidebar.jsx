import { ChartLine, LayoutDashboard, TriangleAlert, Receipt } from "lucide-react";
import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { useGetInvoicesQuery } from "@/lib/redux/query";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <LayoutDashboard className="w-8 h-8" size={32} />,
  },
  {
    title: "Anomalies",
    url: "/dashboard/anomalies",
    icon: <TriangleAlert className="w-8 h-8" size={32} />,
  },
  {
    title: "Invoices",
    url: "/dashboard/invoices",
    icon: <Receipt className="w-8 h-8" size={32} />,
    hasBadge: true,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: <ChartLine className="w-8 h-8" size={32} />,
  },
];

const SideBarTab = ({ item, pendingCount }) => {
  let location = useLocation();
  let isActive = location.pathname === item.url;

  return (
    <SidebarMenuItem key={item.url}>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link
          to={item.url}
        >
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
      {item.hasBadge && pendingCount > 0 && (
        <SidebarMenuBadge className="bg-yellow-500 text-white">
          {pendingCount}
        </SidebarMenuBadge>
      )}
    </SidebarMenuItem>
  );
};

export function AppSidebar() {
  const { data: invoices } = useGetInvoicesQuery();
  const pendingCount = invoices?.filter(
    (invoice) => invoice.status?.toLowerCase() === "pending"
  ).length || 0;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-bold text-foreground">
            <Link to="/">Aelora</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4 text">
              {items.map((item) => (
                <SideBarTab key={item.url} item={item} pendingCount={pendingCount} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

