import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore(
  "User",
  () => {
    // state
    const name = ref("nxf")
    const age = ref(18)

    // getters
    const msg = computed(() => {
      return name.value + "------------" + age.value
    })

    // actions
    function changeName(payload) {
      name.value = payload
    }

    return { name, age, msg, changeName }
  },
  {
    persist: {
      storage: sessionStorage,
      paths: ['name'],
    },
  }
)
