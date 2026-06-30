import { projects, type Project } from "@/data/projects";
import type { FC } from "react";

type SideBarProps = {
    open: boolean,
    toggleSideBar: () => void,
    setActiveProject: React.Dispatch<React.SetStateAction<Project | undefined>>
}

const SideBar: FC<SideBarProps> = ({ open, toggleSideBar, setActiveProject }) => {

    const handleClick = (proj: Project) => {
        setActiveProject(proj);
        toggleSideBar();
    }

    return (
        <>
            <aside className={`z-20 shrink-0 w-70 h-full overflow-y-auto fixed top-0 left-0 md:static md:translate-x-0 transition duration-300 bg-white shadow-md shadow-neutral-400 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <button onClick={toggleSideBar} className="md:hidden float-right p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
                <ul className="clear-both">
                    {
                        projects.map(proj =>
                            <li className="w-full" key={proj.id}>
                                <button className="w-full text-center hover:bg-red-500 text-red-500 hover:text-white font-medium py-2" onClick={() => handleClick(proj)}>{proj.label}</button>
                            </li>
                        )
                    }
                </ul>
            </aside>
            {
                open
                &&
                <div className="z-10 fixed md:hidden inset-0 bg-transparent backdrop-blur-xs" onClick={toggleSideBar}></div>
            }
        </>
    );
}

export default SideBar;