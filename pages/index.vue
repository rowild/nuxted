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
import EventCard from '@/components/EventCard'

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
  async asyncData ({ $axios, error }) {
    try {
      // const response = await $axios.get('http://localhost:3001/events')
      const { data } = await $axios.get('http://localhost:3001/events')
      // return { events: response.data }
      return { events: data }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch the data from the server at this time. Please try again later.'
      })
    }
  },
  head () {
    return {
      title: 'Neighbourhood Event List',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'A list of all your Neighbourhood Events.'
      }]
    }
  }
}
</script>
