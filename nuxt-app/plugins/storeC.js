import Vue from 'vue'
import plugin from '@custom/package-c';

export default async ({ store, isClient}) => {
  Vue.use(plugin, { store, isClient })
}
