import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({
    locale: 'es'
  }),
  getters: {
    currrentLocale: (state) => state.locale
  },
  actions: {
    setLocale(locale) {
      this.locale = locale
    }
  }
})