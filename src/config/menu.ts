import type { MenuOption } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
export const adminMenu: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'threeJs',
          },
        },
        {
          default: () => 'threeJs组件',
        }
      ),
    key: 'three',
  },
  {
    label: '基础功能',
    key: 'baseFunction',
    children: [
      {
        label: '基础组件',
        key: 'baseComponent',
        href: '/login',
      },
    ],
  },
  {
    label: '工作台',
    key: 'wordbench2',
  },
  {
    label: '工作台',
    key: 'wordbench3',
  },
  {
    label: '工作台',
    key: 'wordbench4',
  },
  {
    label: '工作台',
    key: 'wordbench5',
  },
]
