<template>
  <div class="message">
    Message from Component B! :)
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  mounted() {
    console.log('Component B has mounted')
  }
}
</script>

<style scoped>
  .message {
    color: #42b983;
    font-size: 16px;
  }
</style>