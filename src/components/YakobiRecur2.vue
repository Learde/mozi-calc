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
    (-1)
    <span class="pow">
      {{ (n-1) / 2 }}
    </span>
    &#160;
    *
    &#160;
    <YakobiRecur2 :a="-1*a" :n="n" />
  </template>
  <!--  2 случай-->
  <template v-else-if="a % 2 === 0">
    (-1)
    <span class="pow">
      {{ (n*n-1) / 8 }}
    </span>
    &#160;
    *
    &#160;
    <YakobiRecur2 :a="a/2" :n="n" />
  </template>
  <!--  3 случай-->
  <template v-else-if="a === 1">
    1
  </template>
  <!--  4 случай-->
  <template v-else-if="a < n">
    (-1)
    <span class="pow">
      {{ (a - 1) / 2 * (n - 1) / 2 }}
    </span>
    &#160;
    *
    &#160;
    <YakobiRecur2 :n="a" :a="n" />
  </template>
  <!--  5 случай-->
  <template v-else>
    <YakobiRecur2 :n="n" :a="a % n" />
  </template>
</template>

<style scoped>
.pow {
  font-size: 0.6em !important;
  position: relative;
  bottom: 10px;
}
</style>