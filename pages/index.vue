<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="headline">Конвертер валют</v-card-title>
        <v-card-text>
          <currency-converter></currency-converter>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/about">О конвертере</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<style>
  
</style>


<script>
  import currencyConverter from '~/components/CurrencyConverter'

  export default {
    components: {
      currencyConverter
    }
  }
</script>


