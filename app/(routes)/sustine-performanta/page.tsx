import Hero from '@/components/Hero'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import PartnershipsContainer from './components/PartnershipsContainer'

const SustinePeformanta = () => {
  return (
    <div>
        <Hero label='Susține performanța'/>
        <div className="container mx-auto">
           
            <PartnershipsContainer/>
        </div>
    </div>
  )
}

export default SustinePeformanta