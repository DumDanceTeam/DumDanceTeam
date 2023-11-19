import { FC } from 'react'

interface DcDansProps {
  number?:number
  title:string,
  description?:string,
  colorClause?:string
}

const DcDans: FC<DcDansProps> = ({ number, title, description, colorClause }) => {
  return <div className={`flex flex-col self-start h-full max-h-[372px] xl:self-end flex-1 group p-2 ${colorClause === "white" && "hover:bg-black rounded-[10px] transition-colors"}`}>
  <div className="flex items-center gap-5 w-full">
    <div className={`text-xs font-bold self-start text-white bg-black px-5 py-5 flex items-center whitespace-break-spaces justify-center rounded-full text-center`}>
      <div className={`px-4 py-2.5 border-2 border-ddtWhite rounded-full`}>
        {number}
      </div>
    </div>

    <p className={`font-semibold text-[1.7em] ${colorClause==="black" ? "text-ddtWhite":"group-hover:text-white text-black transition-colors"}`}>
      {title}
    </p>
  </div>

  <p className={`tracking-tight leading-8 font-medium text-center sm:text-[1.25em] max-w-[400px] mt-2 ${colorClause==="black" ? "text-ddtWhite":"group-hover:text-white text-black transition-colors"}`}>
    {description}
  </p>
</div>
}

export default DcDans