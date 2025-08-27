import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Page = () => {
  const [activeTab, setActiveTab] = useState("code");

  return (
    <SidebarProvider style={{ "--sidebar-width": "30rem" }}>
      <AppSideBar />
      <SidebarInset className="bg-[#1e1e1e] rounded-lg">
        <div className="flex flex-col h-screen border-1 border-b rounded-lg">
          {/* Top bar with trigger + tabs */}
          <div className="flex h-14 items-center relative">
            <SidebarTrigger className="ml-2" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            {/* Tab buttons with animated background */}
            <div className="relative flex gap-2 p-1 rounded-full bg-black">
              {/* Animated pill */}
              <motion.div
                layout
                className="absolute top-1 bottom-1 rounded-full bg-[#0f99fcb4]"
                initial={false}
                animate={{
                  left: activeTab === "code" ? "4px" : "calc(50% + 4px)",
                  width: "calc(50% - 8px)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />

              <Button
                variant="ghost"
                className={`relative z-10 rounded-full h-8 w-20 transition-colors ${
                  activeTab === "code"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("code")}
              >
                Code
              </Button>
              <Button
                variant="ghost"
                className={`relative z-10 rounded-full h-8 w-20 transition-colors ${
                  activeTab === "preview"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("preview")}
              >
                Preview
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-4 pt-0">
            <SandpackProvider template="react" theme="dark">
              <SandpackLayout>
                {activeTab === "code" ? (
                  <>
                    <SandpackFileExplorer style={{ height: "85vh" }} />
                    <SandpackCodeEditor style={{ height: "85vh" }} />
                  </>
                ) : (
                  <SandpackPreview style={{ height: "85vh" }} />
                )}
              </SandpackLayout>
            </SandpackProvider>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
