import {Button} from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from 'react-router-dom';
import Inventorypage from './pages/Inventorylist';
function App() {
  return (
    <SidebarProvider>
      
      < AppSidebar />
        <Outlet/>
      
    </SidebarProvider>
  );
}

export default App
