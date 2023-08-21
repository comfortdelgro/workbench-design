import {
  faFile,
  faHouse,
  faSquarePen,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons'
import {TSideNavItem} from 'types/common'

export const routes: TSideNavItem[] = [
  {
    pathname: '/getting-started',
    title: 'Getting started',
    icon: faFile,
    children: [
      {pathname: '/installation', title: 'Installation'},
      {pathname: '/usage', title: 'Usage'},
    ],
  },
  {
    pathname: '/components',
    title: 'Components',
    icon: faToggleOn,
    children: [
      {
        title: 'Accordions',
        pathname: '/accordions',
      },
      {
        title: 'Autocomplete',
        pathname: '/autocomplete',
      },
      {
        title: 'Avatar',
        pathname: '/avatar',
      },
      {
        title: 'Button',
        pathname: '/button',
      },
      {
        title: 'Chip',
        pathname: '/chip',
      },
      {
        title: 'DashboardSidecard',
        pathname: '/dashboard-sidecard',
      },
      {
        title: 'Dialog',
        pathname: '/dialog',
      },
      {
        title: 'Divider',
        pathname: '/divider',
      },
      {
        title: 'Dropdown',
        pathname: '/dropdown',
      },
    ],
  },
  {
    pathname: '/customization',
    title: 'Customization',
    icon: faSquarePen,
    children: [
      {pathname: '/theming', title: 'Theming'},
      {pathname: '/z-index', title: 'Z-index'},
    ],
  },
  {
    pathname: '/foundation',
    title: 'Foundation',
    icon: faHouse,
    children: [
      {pathname: '/overview', title: 'Overview'},
      {pathname: '/colors', title: 'Colors'},
      {pathname: '/typography', title: 'Typography'},
      {pathname: '/iconography', title: 'Iconography'},
    ],
  },
]

export default routes
