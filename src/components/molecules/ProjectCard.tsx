import ImageCard from "../atoms/ImageCard";
import TitleCard from "../atoms/TitleCard";
import DescriptionCard from "../atoms/DescriptionCard";
import GithubButton from "./GithubButton";
import DemoButton from "./DemoButton";
import BadgeContainer from "./BadgeContainer";

interface Project {
    title: string;
    description: string;
    github: string;
    demo: string;
    image: string;
    alt: string;
    tools?: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            className="
                flex flex-col gap-0 overflow-hidden
                rounded-(--border-radius)
                backdrop-blur-md
                transition-all duration-(--transition-speed) ease
                m-1 sm:m-4
            "
            style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "var(--box-shadow-buttons-hover), 0 0 0 1px var(--card-border)";
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.2)";
            }}
        >
            <ImageCard src={project.image} alt={project.alt} />

            <div>
                <div className="flex flex-col gap-2 px-2 sm:px-5 pt-2 sm:pt-4">
                    <TitleCard title={project.title} />
                    <DescriptionCard description={project.description} />
                    <span className="flex left-0">
                        <BadgeContainer type="tools" tools={project.tools} />
                    </span>
                </div>
                <div className="flex gap-2 mt-auto px-2 sm:px-5 py-2 sm:py-4">
                    <GithubButton url={project.github} />
                    <DemoButton url={project.demo} />
                </div>
            </div>
        </div>
    )
}
