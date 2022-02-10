<template>
  <div class="wrapper">
    <h1> Simple Vue App </h1>
    <h3> Monorepo playground </h3>
    <hr>
    Message from package: {{ packageFunction('Test from Nuxt project') }}
    <hr>
    <ComponentB />
    <hr>
    <ComponentC />
  </div>
</template>

<script>
import packageFunction from '@custom/package-a';
import ComponentB from '@custom/package-b';
import { ComponentC } from '@custom/package-c'
export default {
  name: 'App',
  components: { ComponentB, ComponentC },
  methods: {
    packageFunction,
  }
}
</script>
