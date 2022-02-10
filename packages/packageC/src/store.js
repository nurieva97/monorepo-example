export default {
  namespaced: true,
  state: {
    list: [
      {
        text: 'Finish tasks',
        done: false,
      },
      {
        text: 'Take a rest',
        done: true,
      },
      {
        text: 'Sleep',
        done: false,
      }
    ]
  },
  mutations: {
    add(state, value) {
      state.list.push({ text: value, done: false})
    },
    toggle(state, item) {
      item.done = !item.done
    }
  },
}