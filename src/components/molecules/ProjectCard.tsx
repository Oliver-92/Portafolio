import ImageCard from "../atoms/ImageCard";
import TitleCard from "../atoms/TitleCard";
import DescriptionCard from "../atoms/DescriptionCard";
import GithubButton from "./GithubButton";
import DemoButton from "./DemoButton";

export default function ProjectCard({ project }: { project: any }) {
    return (
        <div className="flex flex-col gap-4 bg-(--bg-secondary) 
        [border:var(--border-buttons)] rounded-(--border-radius) 
        p-4 hover:[box-shadow:var(--box-shadow-buttons-hover)]
        hover:-translate-y-1 
        transition-all duration-(--transition-speed) ease">
            <ImageCard src={project.image} alt={project.alt} />
            <TitleCard title={project.title} />
            <DescriptionCard description={project.description} />
            <div className="flex gap-2">
                <GithubButton url={project.github} />
                <DemoButton url={project.demo} />
            </div>
        </div>
    )
}