import { NavbarConfig, NavItem, Socials } from '@/types'

export const sidebarNav: NavItem[] = [
  {
    id: 0,
    title: 'about',
    href: 'about',
  },
  // {
  //   id: 1,
  //   title: 'experience',
  //   href: 'experience',
  // },
  {
    id: 1,
    title: 'projects',
    href: 'projects',
  },
]

export const socials: Socials[] = [
  { title: 'GitHub', href: 'https://github.com/RenanSui', icon: 'github' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/renansui/', icon: 'linkedin' },
  { title: 'Gmail', href: 'mailto: renanddtao@gmail.com', icon: 'gmail' },
  { title: 'Whatsapp', href: 'https://api.whatsapp.com/send?phone=+5571985035606&text=Hello', icon: 'whatsapp' },
]

export const navbarConfig: NavbarConfig = {
  sidebarNav,
  socials,
}
