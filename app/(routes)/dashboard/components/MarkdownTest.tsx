"use client"

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const MarkdownTest = () => {
    const markdown = `A paragraph with emphasis and strong importance.

    A block quote with ~strikethrough~ and a URL: https://reactjs.org.
    
    __p and__ Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - | si

    inca

    ceva
    `
    return (
        <div>
            <p>md test</p>
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
    )
}

export default MarkdownTest