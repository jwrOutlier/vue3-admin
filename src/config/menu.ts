interface menuChildren extends menuOption {}
interface menuOption<T = menuChildren> {
  key: string
  label: string
  icon?: string
  children?: T[]
}

export const adminMenu: menuOption[] = [
  {
    key: 'compont1',
    label: '组件',
    icon: '',
  },
  {
    key: 'compont2',
    label: '组件',
    icon: '',
  },
  {
    key: 'compont3',
    label: '组件',
    icon: '',
  },
  {
    key: 'compont4',
    label: '组件',
    icon: '',
    children: [
      {
        key: 'tableCom5',
        label: '表格组件',
      },
    ],
  },
]
