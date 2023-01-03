// It's used for sub menus of the top menu of the site.
type SubItem = {
    name: string,
    link: string,
}

// It's used for root's menus of the top menu of the site.
export type TopMenuRoot = {
    name: string,
    link: string,
    hasSubitem?: boolean,
    subitems?: SubItem[],
    clicked?: boolean
}

// It's used for SubMenu component props' shape.
export type SubMenuProps = {subitems: SubItem[]}

// It's used for SM Root Menu component props' shape.
export type SmTopMenuRoot = {
    rootItems: TopMenuRoot,
    updaterCallback: (name: string) => void
}

// The type of the props in MdRootMenus component.
export type MdRootMenusProps = {items: TopMenuRoot[]}

// The type of the props in MdSubMenuItem component.
export type MdSubMenuItemProps = {items: TopMenuRoot[]}

// It's used for SmView component props' shape.
export type SmViewProps = {
    smButton: boolean,
    smButtonUpdater: () => void,
    rootMenus: TopMenuRoot[],
    subMenuUpdater: (name: string) => void
}





