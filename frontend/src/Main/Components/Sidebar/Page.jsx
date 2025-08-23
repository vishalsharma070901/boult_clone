import React from "react";
import AppSideBar from "./AppSideBar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";

const Page = () => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "30rem",
      }}
    >
      <AppSideBar />
      <SidebarInset className="p-4">
        <div className="flex flex-col h-screen bg-amber-300 rounded-lg ">
            <div className="flex h-10">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          </div>
        
        <div className="flex flex-1 flex-col gap-4 pt-0">
          <SandpackProvider template="react" theme="dark" st>
            <SandpackLayout>
              <SandpackFileExplorer style={{ height: "85vh" }} />
              <SandpackCodeEditor style={{ height: "85vh" }} />
              <SandpackPreview style={{ height: "85vh" }} />
            </SandpackLayout>
          </SandpackProvider>
        </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
