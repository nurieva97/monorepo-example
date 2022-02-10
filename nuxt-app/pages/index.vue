<template>
  <div class="wrapper">
    <h1> Simple Nuxt App template </h1>
    <h3> Monorepo playground </h3>

    <hr/>
    Message from package: <br> {{ test('Test from Nuxt project') }}
    <hr/>
    <ComponentB/>
    <hr/>
    <ComponentC/>
  </div>
</template>

<script>
import packageFunction from '@custom/package-a';
import ComponentB from '@custom/package-b';
import { ComponentC } from '@custom/package-c'
export default {
  name: 'IndexPage',
  components: { ComponentB, ComponentC },
  methods: {
    test: packageFunction
  }
}
</script>
