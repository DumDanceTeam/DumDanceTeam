
interface ManagerInfoProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

const ManagerInfo: React.FC<ManagerInfoProps> = ({title,description,icon}) => {
  return (
    <div>
        <div className="flex items-center gap-1 justify-center sm:justify-start">
            {icon ? icon:null}
            <p className="text-[1.1em] text-center sm:text-start xss:text-[1.2em] sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] font-bold">{title}</p>
        </div>
        <p className="text-gray-600 mt-1 mb-3 text-[1em] sm:text-[1.2em]">{description}</p>
    </div>
  )
}

export default ManagerInfo
