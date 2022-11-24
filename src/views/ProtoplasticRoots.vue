<script setup>
  import {ref, computed} from "vue";
  const textNum = ref(null);
  const num = computed(() => Number(textNum.value) - 1);
  const showSolve = ref(false);
  const divs = ref([]);

  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  const getPrimeDivs = (num) => {
    const array = [];

    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        while (num % i === 0) {
          !array.includes(i) && array.push(i);
          num /= i;
        }
    }

    return array;
  }

  const getArray = () => {
    const array = [];
    for (let i = 2; i <= num.value; i++) {
      array.push(i);
    }
    return array;
  }

  const getCountRoots = () => {
    let n = num.value;
    let result = n;
    for (let i=2; i*i<=n; i++)
      if (n % i === 0) {
        while (n % i === 0)
          n /= i;
      result -= result / i;
    }
    if (n > 1)
      result -= result / n;
    return result;
  }

  const reset = () => {
    textNum.value = null;
    showSolve.value = false;
  }

  const solve = () => {
    showSolve.value = true;
    divs.value = getPrimeDivs(num.value);
  }
</script>

<template>
  <RouterLink style="display: inline-block; margin-bottom: 20px; color: black; text-decoration: none;" to="/">Назад</RouterLink>
  <div class="quadratic">
    (Работает немножко через жопу, берите просто первые корни и их количество)
    <div class="quadratic__row">
      <input class="quadratic__input" type="text" v-model="textNum" />
    </div>
    <button @click="solve" style="margin-bottom: 30px;">Изи</button>
    <button @click="reset" style="margin-left:20px; margin-bottom: 30px;">Заново</button>
    <template v-if="showSolve">
      <div class="quadratic__row">
        Простые делители: {{ divs }}
      </div>
      <div class="quadratic__row">
        Число первообразных корней:
        &#966;(42)
        = {{ getCountRoots() }}
      </div>
      <div style="margin-bottom: 20px;" v-for="g in getArray()">
        <div  class="quadratic__row"  :class="{'quadratic__row--green': Math.pow(g, num/div) % (num+1) === 1}" v-for="div in divs">
          g = {{g}}; <span>{{g}}<span class="quadratic__pow">{{num / div}}</span></span> =
          {{Math.pow(g, num/div)}}
          &#8801;
          1 mod {{ num+1 }}
          =>
          {{Math.pow(g, num/div) % (num+1)}}
          &#8801;
          1 mod {{ num+1 }}
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.quadratic {
  font-size: 20px;

  &__pow {
    position: relative;
    font-size: 0.5em;
    bottom: 10px;
    font-weight: bold;

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
</style>