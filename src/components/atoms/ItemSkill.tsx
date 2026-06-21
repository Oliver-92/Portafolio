export default function ItemSkill ( {icon, name }: { icon: string; name: string } ) {
    return (
        <div className="flex flex-col items-center justify-around gap-2 w-25 sm:w-30">
            <div>
                <img src={icon} alt={name} className="w-20 hover:scale-105 transition-all duration-300" />
            </div>
            <p className="text-sm text-center">{name}</p>
        </div>
    )
}