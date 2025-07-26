"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { github } from '../utils/icons'
import ThemeDropdown from './ThemeDropdown/ThemeDropDown'
import SearchDialog from './SearchDialog/SearchDialog'
import { SunDim } from 'lucide-react'


const Navbar = () => {
  const router = useRouter();

  return (
    <div className='w-full py-4 flex flex-wrap items-center justify-between '>
      <div className="left font-bold text-2xl flex items-center justify-center sm:justify-start gap-2 w-full mb-2 sm:mb-0 sm:w-auto">
        AuraCast <SunDim/>
      </div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />

          <Button className='source-code flex items-center gap-2' onClick={() => {
            router.push("https://github.com/neerajc0des/weatherappnext");}}>
            {github} Source Code
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
