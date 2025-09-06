"use client";
import { useAuth } from "@/context/AuthContext";
import { userSections, adminSections } from "@/lib/sidebarConfig";
import Link from "next/link";
import { LogOut, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; // shadcn dropdown

export function UserDropdown() {
  const { session, logout } = useAuth();
  if (!session) return null;
  const role = (session as any).role as string;
  const sections = role === "admin" ? adminSections : userSections;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full size-8 bg-muted flex items-center justify-center">
        <User className="size-4"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {sections.map((s: any) => !s.disabled && (
          <DropdownMenuItem asChild key={s.key}>
            <Link href={s.path}>{s.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem onClick={logout} className="flex gap-2 items-center text-red-600">
          <LogOut size={14}/> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}