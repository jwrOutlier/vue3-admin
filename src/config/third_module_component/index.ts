import type { App } from 'vue'
import components from './components'

export default (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}
