<script setup lang="ts">

import {ref, watch} from "vue";
import Datepicker from 'vue3-datepicker';
const rangeDate = ref({
  dateStart: null,
  dateStop: null,
});
const emit = defineEmits(['range'])

watch(() => rangeDate.value, () => {
  emit('range', rangeDate.value);
}, {deep: true});

</script>
<template>
  <div class="range-block">
    <div class="range-block__head">Дата начала аренды</div>
    <div class="range-block__container">
      <div class="range-block__sub-head">
        от
      </div>
      <label
          class="label"
      >
        <Datepicker
            v-model="rangeDate.dateStart"
            inputFormat="dd.MM.yyyy"
            class="datePicker"
        />
      </label>
    </div>
    <div class="range-block__container">
      <div class="range-block__sub-head">
        до
      </div>
      <label
          class="label"
      >
        <Datepicker
            v-model="rangeDate.dateStop"
            inputFormat="dd.MM.yyyy"
            class="datePicker"
        />
      </label>
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
.label {
  border: 2px solid #F7F8F8;
  padding: 10px 20px 5px 19px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
