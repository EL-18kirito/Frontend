import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarInput } from "@/components/ui/sidebar"

export function SidebarOptInForm() {
  return (
    (<Card className=" bg-blue-300">
     
        
         
          <Button
            className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none rounded"
            size="sm">
             LOGOUT
          </Button>
        
     
    </Card>)
  );
}
