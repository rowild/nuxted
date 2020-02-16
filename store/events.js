import EventService from '@/services/EventService.js'

// In Nuxt, stte MUST return an anonyous function in order to create a
// new instance every time it is called!
// Also: Nuxt automatically adds namespaces to all the modules!!!
export const state = () => ({
  events: [],
  event: {}
})

export const mutations = {
  SET_EVENTS (state, events) {
    state.events = events
  },
  SET_EVENT (state, event) {
    state.event = event
  }
}

export const actions = {
  fetchEvents ({ commit }) {
    return EventService.getEvents()
      .then((response) => {
        commit('SET_EVENTS', response.data)
      })
  },
  fetchEvent ({ commit }, id) {
    return EventService.getEvent(id)
      .then((response) => {
        commit('SET_EVENT', response.data)
      })
  }
}
