<template>
  <v-app dark>
    <v-toolbar fixed app>      
      <v-toolbar-title><nuxt-link to="/">{{title}}</nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <nuxt-link to="/about">О конвертере</nuxt-link>
    </v-toolbar>
    <v-content>
      <v-container class="layout_wrap">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        fixed: false,
        title: 'Конвертер валют'
      }
    }
  }
</script>



<style>
a {
    color: #aaa;
    text-decoration: none;
}
.layout_wrap.container {
  max-width:800px;
}
</style>