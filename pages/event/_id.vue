<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, error, params }) {
    try {
      const { data } = await $axios.get('http://localhost:3001/events/' + params.id)
      return { event: data } // SINGLE event, not "eventS"!!!
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id
      })
    }
  },
  // Only for testing. removed as soon as axios was implemented.
  // computed: {
  //   id () {
  //     return this.$route.params.id
  //   }
  // },
  head () {
    return {
      // As soon as axios is implemented, we can use detailed data from the axios call.
      title: this.event.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'All you need to know about ' + this.event.title
      }]
    }
  }
}
</script>

<style scoped>

</style>
