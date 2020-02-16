<template>
  <div>
    <h1>Event {{ id }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  head () {
    return {
      title: 'Dynamic Event #' + this.id,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'All you need to know about the dynamic Neighbourhood Event #' + this.id
      }]
    }
  }
}
</script>

<style scoped>

</style>
