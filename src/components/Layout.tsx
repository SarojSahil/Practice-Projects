import { useState, type FC, type PropsWithChildren } from "react";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import SideBar from "@/components/SideBar";
import { type Project } from "@/data/projects";

const Layout: FC<PropsWithChildren> = () => {

    const [open, setOpen] = useState(false);
    const [activeProject, setActiveProject] = useState<Project | undefined>(undefined);
    const toggleSideBar = () => setOpen(prev => !prev);

    return (
        <div className="w-full h-dvh">
            <Header toggleSideBar={toggleSideBar} />
            <div className="h-[calc(100%-60px)] flex">
                <SideBar setActiveProject={setActiveProject} open={open} toggleSideBar={toggleSideBar} />
                <Panel activeProject={activeProject} />
            </div>
        </div>
    );
}

export default Layout;