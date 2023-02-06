import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

function dealSetupReset(context) {
  console.log('context', context)
  const { store } = context
  const initialState = JSON.parse(JSON.stringify(store.$state))  
  store.$reset = () => {
    store.$state = initialState
  }
}

function SecretPiniaPlugin() {
  console.log('plugin')
  return { secret: "the cake is a lie" }
}
const pinia = createPinia()
pinia.use(dealSetupReset)
pinia.use(SecretPiniaPlugin)
pinia.use(piniaPluginPersistedstate)

export default pinia
