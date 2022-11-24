<script setup>
import Fraction from "./Fraction.vue";

defineProps({
  a: Number,
  n: Number,
})

function NOD () {
  for (var x = arguments[0], i = 1; i < arguments.length; i++) {
    var y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}
</script>

<template>
  <!--  0 случай-->
  <template v-if="NOD(a,n) !== 1">
    0
  </template>
  <!--  1 случай-->
  <template v-else-if="a < 1">
    (-1)
    <span class="pow">
      <Fraction>
        <template #v1>{{n - 1}}</template>
        <template #v2>{{2}}</template>
      </Fraction>
    </span>
    &#160;
    *
    &#160;
    <YakobiRecur :a="-1*a" :n="n" />
  </template>
  <!--  2 случай-->
  <template v-else-if="a % 2 === 0">
    (-1)
    <span class="pow">
      <Fraction>
        <template #v1>{{n*n - 1}}</template>
        <template #v2>{{8}}</template>
      </Fraction>
    </span>
    &#160;
    *
    &#160;
    <YakobiRecur :a="a/2" :n="n" />
  </template>
  <!--  3 случай-->
  <template v-else-if="a === 1">
    1
  </template>
  <!--  4 случай-->
  <template v-else-if="a < n">
    (-1)
    <span class="pow">
      <Fraction>
        <template #v1>{{a - 1}}</template>
        <template #v2>{{2}}</template>
      </Fraction>
      &#160;
      *
      &#160;
      <Fraction>
        <template #v1>{{n - 1}}</template>
        <template #v2>{{2}}</template>
      </Fraction>
    </span>
    &#160;
    *
    &#160;
    <YakobiRecur :n="a" :a="n" />
  </template>
  <!--  5 случай-->
  <template v-else>
    <YakobiRecur :n="n" :a="a % n" />
  </template>
</template>

<style scoped>
.pow {
  font-size: 0.6em !important;
  position: relative;
  bottom: 10px;
}
</style>