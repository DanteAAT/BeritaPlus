import { Group, Code, ScrollArea, rem } from "@mantine/core"
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock
} from "@tabler/icons-react"
// import { UserButton } from "../UserButton/UserButton"
import { LinksGroup } from "@/features/home/SidebarLinksGroup"
// import { Logo } from "./Logo"
import classes from "@/styles/navbar.module.css"
import Image from "next/image"

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  
]

export function Navbar() {
  const links = mockdata.map(item => <LinksGroup {...item} key={item.label} />)

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
        <Image src="/Logo.png" width={120} height={100} alt="Picture of the author" />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        {/* <UserButton /> */}
      </div>
    </nav>
  )
}
