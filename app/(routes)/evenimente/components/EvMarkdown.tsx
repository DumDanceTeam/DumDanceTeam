"use client"

import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'

const EvMarkdown = ({desc}:{desc: string}) => {
  return (
    <div className="whitespace-pre-line font-light text-[1em] text-start sm:text-center lg:text-start md:break-words md:overflow-y-scroll lg:min-h-[400px] p-0 sm:p-2">
        <Markdown className="overflow-auto h-[400px] break-words" remarkPlugins={[remarkGfm]}>{desc}</Markdown>
    </div>
  )
}

export default EvMarkdown;