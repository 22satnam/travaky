"use client";
import { useAuth } from "@/context/AuthContext";
import { userSections, adminSections } from "@/lib/sidebarConfig";
import Link from "next/link";
import { LogOut, User } from "lucide-react";
import { Menu, MenuItem, MenuButton } from "@/components/ui/dropdown"; // shadcn dropdown

export function UserDropdown() {
  const { session, logout } = useAuth();
  if (!session) return null;
  const role = session.user.role as string;
  const sections = role === "admin" ? adminSections : userSections;
  return (
    <Menu>
      <MenuButton className="rounded-full size-8 bg-muted flex items-center justify-center">
        <User className="size-4"/>
      </MenuButton>
      {sections.map(s => !s.disabled && (
        <MenuItem asChild key={s.key}>
          <Link href={s.path}>{s.label}</Link>
        </MenuItem>
      ))}
      <MenuItem onSelect={logout} className="flex gap-2 items-center text-red-600">
        <LogOut size={14}/> Logout
      </MenuItem>
    </Menu>
  );
}