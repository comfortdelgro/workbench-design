<<<<<<< HEAD
import Divider from './divider'
import Sidebar from './sidebar'
import SidebarItem from './sidebar-item'
export type {DividerProps} from './divider'
export type {SidebarProps} from './sidebar'
export {SidebarContext} from './sidebar-context'
export type {SidebarContextValue} from './sidebar-context'
export type {SidebarItemProps} from './sidebar-item'

Sidebar.Item = SidebarItem
Sidebar.Divider = Divider
=======
import Sidebar from './sidebar'
import SidebarActions from './sidebar-actions'
import SidebarContent from './sidebar-content'
import SidebarTitle from './sidebar-title'

export type {SidebarProps} from './sidebar'
export type {SidebarActionsProps} from './sidebar-actions'
export type {SidebarContentProps} from './sidebar-content'
export type {SidebarTitleProps} from './sidebar-title'

Sidebar.Actions = SidebarActions
Sidebar.Content = SidebarContent
Sidebar.Title = SidebarTitle
>>>>>>> develop

export default Sidebar
