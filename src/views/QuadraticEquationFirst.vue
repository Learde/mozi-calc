<script setup>
import {ref, computed} from "vue";
import { RouterLink } from "vue-router";
const textParam = ref(null);
const textMod = ref(null);
const param = computed(() => Number(textParam.value));
const mod = computed(() => {
  const value = Number(textMod.value);
  if (isPrime(value))
    return value*value;
  return value;
});
const select = ref(null);
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false;
  return num > 1;
}

const sqrtMod = computed(() => {
  if (mod.value !== null) {
    return Math.sqrt(mod.value);
  }
  return null;
});
const selectPow = computed(() => {
  if (select.value !== null)
    return select.value*select.value;
  return null;
})
const arraySelection = computed(() => {
  if (sqrtMod.value !== null && param.value !== null) {
    const array = [];
    for (let i = 0; i < sqrtMod.value; i++) {
      if (((i * i) % sqrtMod.value) === (+param.value % sqrtMod.value ))
        array.push(i);
    }
    return array;
  }
  return null;
})
const diffSelect = computed(() => {
  if (selectPow.value !== null && param.value !== null)
    return param.value - selectPow.value;
  return null;
})
const diffSelectMod = computed(() => {
  if (diffSelect.value !== null) {
    let value = diffSelect.value;
    while (value < 0)
      value += mod.value;
    return value;
  }
  return null;
})
const nEquation = computed(() => {
  if (select.value !== null && sqrtMod.value !== null)
    return select.value*sqrtMod.value*2;
  return null;
})
const arrayN = computed(() => {
  if (nEquation.value !== null && diffSelectMod.value !== null && mod.value !== null) {
    const array = [];
    for (let i = 0; i < mod.value; i++) {
      if ((nEquation.value * i) % mod.value === +diffSelectMod.value)
        array.push(i);
    }
    return array;
  }
  return null;
})
const selectN = ref(null);
const solution = computed(() => {
  if (selectN.value !== null && select.value !== null && sqrtMod.value !== null)
    return select.value + sqrtMod.value * selectN.value;
  return null;
})

const showSolve = ref(false);
const solve = () => {
  if (mod.value !== null && param.value !== null) {
    showSolve.value = true;
  }
};

const reset = () => {
  showSolve.value = false;
  select.value = null;
  selectN.value = null;
}

const fullReset = () => {
  textMod.value = null;
  textParam.value = null;
  showSolve.value = false;
  select.value = null;
  selectN.value = null;
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
    <template v-if="showSolve">
      <div class="quadratic__row">
        <span>x<span class="quadratic__pow">2</span></span>
        &#8801;
        {{ param }}
        mod
        {{ mod }}
      </div>
      <div class="quadratic__row">
        <span>x<span class="quadratic__pow">2</span></span>
        &#8801;
        {{ param }}
        mod
        <span>{{ sqrtMod }}<span class="quadratic__pow">2</span></span>
      </div>
      <div class="quadratic__row">
        <span>x<span class="quadratic__pow">2</span></span>
        <template v-if="param >= 0">-</template><template v-if="param < 0">+</template>
        {{ Math.abs(param)  }}
        &#8801;
        0
        mod
        <span>{{ sqrtMod }}<span class="quadratic__pow">2</span></span>
      </div>
      <div class="quadratic__row">
        <span>x<span class="quadratic__pow">2</span></span>
        <template v-if="param >= 0">-</template><template v-if="param < 0">+</template>
        {{ Math.abs(param)  }}
        &#8801;
        0
        mod
        {{ sqrtMod }}
      </div>
      <div class="quadratic__row">
        <span>x<span class="quadratic__pow">2</span></span>
        &#8801;
        {{ param }}
        mod
        {{ sqrtMod }}
      </div>
      <div class="quadratic__row">
        x
        &#8801;
        {{ param }}
        mod
        {{ sqrtMod }}
      </div>
      <div class="quadratic__row">
        <span>Возможные варианты:</span>
        <span v-for="elem in arraySelection" @click="select = elem" class="quadratic__variant">{{ elem }}</span>
      </div>
      <template v-if="select !== null">
        <div class="quadratic__row">
          x
          &#8801;
          {{ select }}
          mod
          {{ sqrtMod }}
        </div>
        <div class="quadratic__row">
          x
          &#61;
          {{ select }}
          +
          {{ sqrtMod }}*n
        </div>
        <div class="quadratic__row">
          <span>({{ select }} + {{ sqrtMod }}*n)<span class="quadratic__pow">2</span></span>
          &#8801;
          {{ param }}
          mod
          {{ mod }}
        </div>
        <div class="quadratic__row">
          <span>{{ selectPow }} + {{ nEquation }}n + {{ mod }}n<span class="quadratic__pow">2</span></span>
          &#8801;
          {{ param }}
          mod
          {{ mod }}
        </div>
        <div class="quadratic__row">
          <span>{{ selectPow }} + {{ nEquation }}n</span>
          &#8801;
          {{ param }}
          mod
          {{ mod }}
        </div>
        <div class="quadratic__row">
          <span>{{ nEquation }}n</span>
          &#8801;
          ({{ param }} - {{ selectPow }})
          mod
          {{ mod }}
        </div>
        <div class="quadratic__row">
          <span>{{ nEquation }}n</span>
          &#8801;
          {{ diffSelect }}
          mod
          {{ mod }}
        </div>
        <div class="quadratic__row">
          <span>{{ nEquation }}n</span>
          &#8801;
          {{ diffSelectMod }}
          mod
          {{ mod }}
        </div>
        <div class="quadratic__row">
          <span>Возможные варианты n:</span>
          <span v-for="elem in arrayN" @click="selectN = elem" class="quadratic__variant">{{ elem }}</span>
        </div>
        <template v-if="selectN !== null">
          <div class="quadratic__row quadratic__row--green">
            <span>x1</span>
            &#61;
            {{ select }} + {{ sqrtMod }} * {{ selectN }}
            &#61;
            {{ solution }}
          </div>
          <div class="quadratic__row quadratic__row--green">
            <span>x2</span>
            &#61;
            {{ -1 * solution }}
          </div>
          <div class="quadratic__row">
            Проверка х1:
          </div>
          <div class="quadratic__row">
            <span>{{ solution }}<span class="quadratic__pow">2</span></span>
            &#8801;
            {{ param }}
            mod
            {{ mod }}
          </div>
          <div class="quadratic__row">
            {{ solution*solution }}
            &#8801;
            {{ param }}
            mod
            {{ mod }}
          </div>
          <div class="quadratic__row">
            {{ solution*solution % mod }}
            &#8801;
            {{ param }}
            mod
            {{ mod }}
          </div>
          <div class="quadratic__row">
            Проверка х2:
          </div>
          <div class="quadratic__row">
            <span>{{ -1 * solution }}<span class="quadratic__pow">2</span></span>
            &#8801;
            {{ param }}
            mod
            {{ mod }}
          </div>
          <div class="quadratic__row">
            {{ solution*solution }}
            &#8801;
            {{ param }}
            mod
            {{ mod }}
          </div>
          <div class="quadratic__row">
            {{ solution*solution % mod }}
            &#8801;
            {{ param }}
            mod
            {{ mod }}
          </div>
        </template>
      </template>
    </template>
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