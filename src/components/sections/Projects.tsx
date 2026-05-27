import SectionLayout from "../molecules/SectionLayout";
import SectionTitle from "../atoms/SectionTitle";
import { useLanguage } from "../../context/LangContext";
import { translations, type ProjectTranslation } from "../../utils/translations";
import { dataProjects } from "../../utils/dataProjects";
import ProjectCard from "../molecules/ProjectCard";
import Carousel from "../atoms/Carousel";

export default function Projects() {
    const { lang } = useLanguage();
    const t = translations[lang];

    const projects = dataProjects.map((project) => {
        const text = t[project.id as keyof typeof t] as ProjectTranslation;
        return {
            key: project.id,
            title: text.title,
            description: text.desc,
            github: project.github,
            demo: project.demo,
            image: project.img,
            alt: project.alt,
            tools: project.tools,
        }
    })

    return (
        <SectionLayout id="projects">
            <SectionTitle>{t.projectsTitle}</SectionTitle>
            <Carousel>
                {projects.map((project) => (
                    <ProjectCard key={project.key} project={project} />
                ))}
            </Carousel>
        </SectionLayout>
    )
}
