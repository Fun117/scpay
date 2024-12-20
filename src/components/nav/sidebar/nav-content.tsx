"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import React from "react";
import { DashboardNavType, DashboardTeamsType } from "./app";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SelectLanguageButton, SelectThemeButton } from "./change";

export function SidebarNavContent({
  activeTeam,
  nav,
}: {
  activeTeam: DashboardTeamsType | null;
  nav: DashboardNavType;
}) {
  function SidebarNavAdmin() {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>Admin</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {nav.admin.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <MoreHorizontal className="text-sidebar-foreground/70" />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  }

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {nav.main.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem: any) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      {activeTeam?.type === "admin" && <SidebarNavAdmin />}
      <SidebarGroup className="mt-auto group-data-[collapsible=icon]:hidden">
        <SidebarGroupContent>
          <SidebarMenu>
            {nav.secondary.map((item, index) => {
              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild size="sm">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <SidebarGroupLabel>その他</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild size="sm">
                <SelectThemeButton />
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild size="sm">
                <SelectLanguageButton />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
