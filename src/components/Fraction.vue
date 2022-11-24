<template>
<div class="fraction">
  <slot name="v1" />
  <div class="line"></div>
  <slot name="v2" />
</div>
</template>

<script setup>
</script>

<style scoped>
  .fraction {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: 1em;
  }

  .line {
    height: 0.125em;
    background-color: #000;
    width: 2.5em;
  }
</style>