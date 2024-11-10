import { createApp } from 'vue'
import App from './App.vue'

export function mount(elementId) {
  const app = createApp(App)
  app.mount(elementId)
  return app
}

export function unmount(app) {
  app.unmount()
}
