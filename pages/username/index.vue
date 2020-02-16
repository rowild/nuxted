<template>
  <div>
    <h1>The Username at /username</h1>
    <p>No username given.</p>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'A user’s portfolio',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'An overview over all features of a user’s portfolio.'
      }]
    }
  }
}
</script>

<style scoped>

</style>
