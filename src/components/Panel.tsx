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
                <div className="h-full w-full text-2xl bg-red-50 flex items-center justify-center">
                    <p>Please select a project from the menu.</p>
                </div>
            }
        </main>
    );
}

export default Panel;