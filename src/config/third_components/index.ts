import type { App } from 'vue'
import { create } from 'naive-ui'
import components from './components'

export default (app: App<Element>) => {
  const naive = create({
    components,
  })
  app.use(naive)
}
