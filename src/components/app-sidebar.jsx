import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"


const data = {
  navMain: [
    {
      title: "HOME",
      url: "Home",
     
    },
    {
      title: "INVENTORY LIST",
      url: "Inventorylist",
    },

    // {
    //   title: "PROFILES",
    //   url: "Profile.jsx",
      
    // },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    
    (<Sidebar {...props} >
      <SidebarHeader className="bg-blue-300">
        <SidebarMenu className="bg-blue-300">
          <SidebarMenuItem className="bg-blue-300">
            <SidebarMenuButton size="lg" asChild className="bg-blue-300">
              <a href="#">
                <div
                  className="flex aspect-square size-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground bg-black-300">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-1.5 leading-none">
                  <span className="font-semibold">INVENTORY</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className=" bg-blue-300">
        <div className="p-1">
          <SidebarOptInForm />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)

  );
}
