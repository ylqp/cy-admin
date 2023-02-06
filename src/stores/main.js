import { defineStore } from "pinia"

export const useStore = defineStore("mainStore", {
  state: () => ({
    count: 0,
    tierList: [],
  }),
  getters: {
    sortedTierList(state) {
      return state.tierList.sort((a, b) => {
        return b.rank - a.rank
      })
    },
  },
  actions: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
    promote(idx) {
      this.tierList[idx].rank += 1
    },
    demote(idx) {
      this.tierList[idx].rank -= 1
    },
    addTier(title) {
      this.tierList.push({
        title,
        rank: 0,
      })
    },
  },
},
 {persist: true,})

// export const useStore2 = defineStore("mainStore", {
//   state: () => ({
//     count: 5,
//   }),
// })