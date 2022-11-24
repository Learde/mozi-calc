<script setup>
import {computed, ref} from "vue";
import YakobiRecur from "../components/YakobiRecur.vue";
import YakobiRecur2 from "../components/YakobiRecur2.vue";
import YakobiRecur3 from "../components/YakobiRecur3.vue";
import Fraction from "../components/Fraction.vue";

const textParam1 = ref(63);
const textParam2 = ref(395);
const param1 = computed(() => Number(textParam1.value));
const param2 = computed(() => Number(textParam2.value));


const showSolve = ref(true);
const solve = () => {
    showSolve.value = true;
};

const reset = () => {
  showSolve.value = false;
}

const fullReset = () => {
  showSolve.value = false;
}
</script>

<template>
  <RouterLink style="display: inline-block; margin-bottom: 20px; color: black; text-decoration: none;" to="/">Назад</RouterLink>
  <div class="quadratic">
    <div class="quadratic__row quadratic__row--col">
      <input class="quadratic__input" type="text" v-model="textParam1" @input="reset" />
      <div class="quadratic__line"></div>
      <input class="quadratic__input" type="text" v-model="textParam2" @input="reset" />
    </div>
    <button @click="solve" style="margin-bottom: 30px;">Изи</button>
    <button @click="fullReset" style="margin-left:20px; margin-bottom: 30px;">Заново</button>
    <div v-if="showSolve" class="solve">
      <Fraction><template #v1>{{param1}}</template><template #v2>{{param2}}</template></Fraction>
      <span class="quadratic__eq"> &#160;= &#160;</span>
      <YakobiRecur :a="param1" :n="param2" />
      <span class="quadratic__eq">&#160; = &#160;</span>
      <YakobiRecur2 :a="param1" :n="param2" />
      <span class="quadratic__eq">&#160; = &#160;</span>
      <YakobiRecur3 :a="param1" :n="param2" />
      <span class="quadratic__eq">&#160; = &#160;</span>
      ну дальше уже сами
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quadratic {
  font-size: 24px;

  &__pow {
    position: relative;
    font-size: 0.5em;
    bottom: 10px;
    font-weight: bold;

  }

  &__line {
    margin: 3px 0;
    height: 2px;
    width: 48px;
    background-color: #000;
  }

  &__row {
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin-bottom: 3px;
    flex-wrap: wrap;

    &--green {
      color: #32cd32;
    }

    &--col {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  &__input {
    width: 40px;
  }

  &__variant {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}

.solve {
  font-size: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>