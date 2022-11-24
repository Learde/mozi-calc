<script setup>
import {computed, ref} from "vue";

const textParam = ref(33);
const textMod = ref(64);
const param = computed(() => Number(textParam.value));
const mod = computed(() => Number(textMod.value));
const keys = [1,3,5,7];

const inds = computed(() => {
  const array = [];
  for (let i = 3; i <= powOf2.value; i++)
    array.push(i);
  return array;
})

const powOf2 = computed(() => {
  if (mod.value !== null) {
    let copyMod = mod.value;
    let pow = 0;
    while (copyMod > 1) {
      copyMod /= 2;
      pow += 1;
    }
    return pow;
  }
})

const solutionArray = (key) => {
  const array = [key];
  for (let i = 4; i <= powOf2.value; i++) {
    array.push(next(array[i-4], i-1));
  }
  return array;
}

const index = (xk, ind) => {
  const y = (xk*xk - param.value) / Math.pow(2,ind);
  return Math.abs(y) % 2 ? 1 : 0;
}

const next = (xk, ind) => {
  return xk + index(xk,ind) * Math.pow(2,ind-1);
}

const showSolve = ref(false);
const solve = () => {
  if (mod.value !== null && param.value !== null) {
    showSolve.value = true;
  }
};

const reset = () => {
  showSolve.value = false;
}

const fullReset = () => {
  textMod.value = null;
  textParam.value = null;
  showSolve.value = false;
}
</script>

<template>
  <RouterLink style="display: inline-block; margin-bottom: 20px; color: black; text-decoration: none;" to="/">Назад</RouterLink>
  <div class="quadratic">
    <div class="quadratic__row">
      <span>x<span class="quadratic__pow">2</span></span>
      &#8801;
      <input class="quadratic__input" type="text" v-model="textParam" @input="reset" />
      mod
      <input class="quadratic__input" type="text" v-model="textMod" @input="reset" />
    </div>
    <button @click="solve" style="margin-bottom: 30px;">Изи</button>
    <button @click="fullReset" style="margin-left:20px; margin-bottom: 30px;">Заново</button>
    <div v-if="showSolve">
      <template v-if="(param - 1) % 8 !== 0">
        <div class="quadratic__row">
          Нет решений
        </div>
      </template>
      <template v-else-if="powOf2 === 3">
          Корни: {{ keys }}
      </template>
      <template v-else>
        <template v-for="key in keys">
          <div style="margin-bottom: 30px;">
          <div class="quadratic__solution">
            <template v-for="(elem,ind) in solutionArray(key)">
              <div class="quadratic__row" >
                x{{ind+3}} &#61; {{ elem }}
                <template v-if="ind !== solutionArray(key).length - 1">
                  &#160; &#160;
                  y &#61; <span>({{solutionArray(key)[ind]}}<span class="quadratic__pow">2</span></span>
                  - {{param}}) / <span>2<span class="quadratic__pow">{{ ind+3 }}</span></span>
                  &#61; {{ (solutionArray(key)[ind] * solutionArray(key)[ind] - param) / Math.pow(2,ind+3) }}
                  &#160; &#160;
                  i &#61; {{ index(elem, ind+3) }}
                </template>
              </div>
            </template>
          </div>
          </div>
        </template>
      </template>
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