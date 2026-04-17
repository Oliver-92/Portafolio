import SectionLayout from "../molecules/SectionLayout";
import SectionTitle from "../atoms/SectionTitle";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import { dataProjects } from "../../utils/dataProjects";
import ProjectCard from "../molecules/ProjectCard";

type Project = {
    key: string;
    title: string;
    description: string;
    github: string;
    demo: string;
    image: string;
    alt: string;
}

export default function Projects() {
    const { lang } = useLanguage();
    const t = translations[lang];

    const projects = dataProjects.map((project) => {
        const text = t[project.id];
        return {
            key: project.id,
            title: text.title,
            description: text.desc,
            github: project.github,
            demo: project.demo,
            image: project.img,
            alt: project.alt,
        }
    })

    console.log(projects);

    return (
        <SectionLayout id="projects">
            <SectionTitle>{t.projectsTitle}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.key} project={project} />
                ))}
            </div>
        </SectionLayout>
    )
}