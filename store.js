// store.js
import { createPinia } from 'pinia';

export const pinia = createPinia();

export const useMyStore = pinia.defineStore('myStore', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
