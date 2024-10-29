<script setup lang="ts">

import {INPUT_TYPE} from "@/constant";
import {ref, watch} from "vue";
import BaseInputBlock from "@/components/BaseInputBlock.vue";

const range = ref({
  squareMin: null,
  squareMax: null,
});
const emit = defineEmits(['range']);
watch(() => range.value, () => {
  emit('range', range.value);
}, {deep: true});

</script>

<template>
  <div class="range-block">
    <div class="range-block__head">Площадь помещения (м<sup>2</sup>)</div>
    <div class="range-block__container">
      <div class="range-block__sub-head">
        от
      </div>
      <BaseInputBlock
          :input-type="INPUT_TYPE.number"
          name="squareMin"
          v-model="range.squareMin"
      />
    </div>
    <div class="range-block__container">
      <div class="range-block__sub-head">
        до
      </div>
      <BaseInputBlock
          :input-type="INPUT_TYPE.number"
          name="squareMax"
          v-model="range.squareMax"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

.range-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 21px;

  &:last-of-type {
    margin-bottom: 40px;
  }

  &__head {
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    line-height: 15.4px;
    margin-bottom: 19px;
  }

  &__container {
    width: 49.4%;
    display: flex;

    label {
      margin-bottom: 0;
      border-left: none;
      width: 84%;
    }
  }

  &__sub-head {
    border: 2px solid #F7F8F8;
    border-radius: 4px;
    border-right: none;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 15px;
    width: 16%;
  }
}

</style>
