import type { Project } from "@/data/projects";
import type { FC } from "react";

type PanelProps = {
    activeProject: Project | undefined
}

const Panel: FC<PanelProps> = ({ activeProject }) => {
    return (
        <main className="w-full h-full">
            {
                activeProject
                ?
                <iframe className="w-full h-full outline-none" src={activeProject.url}></iframe>
                : 
                "Please Select A Project"
            }
        </main>
    );
}

export default Panel;