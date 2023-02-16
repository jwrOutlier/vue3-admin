import {
  ElButton,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon,
  ElSubMenu,
} from 'element-plus'

// 图标文件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default [
  ElButton,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon,
  ElSubMenu,
  ...Object.values(ElementPlusIconsVue),
]
