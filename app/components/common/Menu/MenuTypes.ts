

export type MenuMenuItems = {
    type: 'menu'
    items: MenuMenuItem[]
}
export type MenuMenuItem = {
    label: string
    to: string
}

export type MenuSwitcherItems = {
    type: 'switcher'
    items: MenuSwitcherItem[]
    initialActiveLabel?: string
}
export type MenuSwitcherItem = {
    label: string
    onClick?: any
}