// 菜单的类型
declare namespace Menu {
    interface menuChildren extends menuOption { }

    interface menuOption<T = menuChildren> {
      key: string
      label: string
      icon?: string
      children?: T[]
    }
}