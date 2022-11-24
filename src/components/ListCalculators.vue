<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="calc-list">
    <RouterLink to="quadratic1" class="calc-list__elem">
      <div>Квадратное уравнение (p > 2)</div>
    </RouterLink>
    <RouterLink to="quadratic2" class="calc-list__elem">
      <div>Квадратное уравнение (p = 2)</div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.calc-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  grid-auto-rows: 200px;

  &__elem {
    border-radius: 16px;
    font-weight: bold;
    color: #000 !important;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  }
}
</style>