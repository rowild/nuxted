/* eslint-disable no-console */
<template>
  <div>
    <h1>Events List</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard'
// import EventService from '@/services/EventService.js' // remove as soon as store is implemented

export default {
  components: {
    EventCard
  },
  // asyncData (context) { // ES 6 destructuring saves "context" =>
  // asyncData ({ $axios, error }) {
  //   // return context.$axios.get('http://localhost:3001/events') //  // ES 6 destructuring =>
  //   return $axios.get('http://localhost:3001/events')
  //     .then((response) => {
  //       return {
  //         // will be automatically merged with this component's data, so no separate
  //         // definition of "data" needed, as long as there is no extra data to be
  //         // defined.
  //         // Also, for the time of "events" being empty (which it is in the beginning until
  //         // AJAX populates it with data), there is not need to define an empty "events"
  //         // in the beginning!
  //         events: response.data
  //       }
  //     })
  //     .catch((e) => {
  //       error({
  //         statusCode: 503,
  //         message: 'Unable to fetch the data from the server at this time. Please try again later.'
  //       })
  //     })
  // },
  // async asyncData ({ $axios, error }) { // remove $axios argment after implementing service
  // async asyncData ({ $axios, error }) { // remove complete function as son as state is implemented
  //   try {
  //     // const response = await $axios.get('http://localhost:3001/events')
  //     // const { data } = await $axios.get('http://localhost:3001/events')
  //     // const { data } = await EventService.getEvents()
  //     // return { events: response.data }
  //     return { events: data }
  //   } catch (e) {
  //     error({
  //       statusCode: 503,
  //       message: 'Unable to fetch the data from the server at this time. Please try again later.'
  //     })
  //   }
  // In Nuxt "fetch" does NOT automatically merge with the data object!
  async fetch ({ store, error }) {
    try {
      // Nuxt nmespaces Vuex modules!!! So use "events" for fetchEvents
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the data from the server at this time. Please try again later.'
      })
    }
  },
  computed: mapState({
    // watch out! Nuxt has all our stores namespaced!
    events: state => state.events.events
  }),
  head () {
    return {
      title: 'Neighbourhood Event List'
    }
  }
}
</script>
