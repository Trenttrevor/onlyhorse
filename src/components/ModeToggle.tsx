"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button variant={"outline"} size={"icon"} onClick={()=>setTheme("light")}>
        <SunIcon/>
      </Button>
      <Button variant={"outline"} size={"icon"} onClick={()=>setTheme("dark")}>
        <MoonIcon/>
      </Button>

    </div>
  )
}
