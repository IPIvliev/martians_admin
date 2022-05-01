<template>
  <body class="cp_body cp">
    <navbar-component></navbar-component>
    <router-view/>
  </body>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  components: { NavbarComponent }
}
</script>

<style lang="scss">

</style>
