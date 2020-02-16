<template>
  <div>
    <h1>Hello, {{ username }}</h1>
    <p>This is your portfolio.</p>
  </div>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  head () {
    return {
      title: 'Portfolio of ' + this.username,
      meta: [{
        hid: 'description',
        name: 'descritpion',
        content: 'All you need to know aboout the user ' + this.username
      }]
    }
  }
}
</script>

<style scoped>

</style>
