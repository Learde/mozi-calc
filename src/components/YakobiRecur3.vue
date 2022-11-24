<script setup>
import Fraction from "./Fraction.vue";

defineProps({
  a: Number,
  n: Number,
})
</script>

<template>
  <!--  1 случай-->
  <template v-if="a < 1">
    {{Math.pow(-1, (n-1) / 2)}}
    &#160;
    *
    &#160;
    <YakobiRecur3 :a="-1*a" :n="n" />
  </template>
  <!--  2 случай-->
  <template v-else-if="a % 2 === 0">
    {{Math.pow(-1, (n*n-1) / 8 )}}
    &#160;
    *
    &#160;
    <YakobiRecur3 :a="a/2" :n="n" />
  </template>
  <!--  3 случай-->
  <template v-else-if="a === 1">
    1
  </template>
  <!--  4 случай-->
  <template v-else-if="a < n">
    {{Math.pow(-1, (a - 1) / 2 * (n - 1) / 2 )}}
    &#160;
    *
    &#160;
    <YakobiRecur3 :n="a" :a="n" />
  </template>
  <!--  5 случай-->
  <template v-else>
    <YakobiRecur3 :n="n" :a="a % n" />
  </template>
</template>

<style scoped>
.pow {
  font-size: 0.6em !important;
  position: relative;
  bottom: 10px;
}
</style>