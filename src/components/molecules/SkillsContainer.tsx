import ItemSkill from "../atoms/ItemSkill";
import html from "../../assets/skills/html5.svg"
import css from "../../assets/skills/css3.svg"
import js from "../../assets/skills/javascript.svg"
import ts from "../../assets/skills/typescript.svg"
import react from "../../assets/skills/react.svg"
import next from "../../assets/skills/nextjs.svg"
import tailwind from "../../assets/skills/tailwind.svg"
import nodejs from "../../assets/skills/nodejs.svg"
import postgresql from "../../assets/skills/postgresql.svg"

const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "TypeScript", icon: ts },
    { name: "React", icon: react },
    { name: "Next.js", icon: next },
    { name: "Tailwind", icon: tailwind },
    { name: "Node.js", icon: nodejs },
    { name: "PostgreSQL", icon: postgresql },
]

export default function SkillsContainer() {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-2">
                {skills.map(skill => (
                    <ItemSkill name={skill.name} icon={skill.icon} key={skill.name} />
                ))}
            </div>
        </div>
    )
}