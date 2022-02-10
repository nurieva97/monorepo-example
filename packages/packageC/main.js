import storeModule from './src/store';
import ComponentC from './src/ComponentC';

const plugin = {
  installed: false,
  async install(Vue, { store, isClient }) {
    if (this.installed) return;
    this.installed = true;

    const opts = {}
    if (isClient) {
      opts.preserveState = true
    }
    console.log(storeModule)
    store.registerModule('customModule', storeModule, opts)
  }
}

let globalVue = null;
if (typeof window !== "undefined") {
  globalVue = window.Vue;
} else if (typeof global !== "undefined") {
  globalVue = global.Vue;
}
if (globalVue) { globalVue.use(plugin); }

export default plugin;
export { ComponentC }

