<script setup lang="ts">

import {getCurrentInstance, ref} from "vue"
import Multiselect from 'vue-multiselect'

const {uid} = getCurrentInstance();
const props = defineProps({
  head: {
    type: String
  },
  name: {
    type: String
  },
  list: {
    type: Object
  },
  multiple: {
    type: Boolean
  }
});
const inputValue = ref('');
</script>

<template>
  <label
      class="label"
      :for="`amount-${uid}`"
  >
    <multiselect
        v-model="inputValue"
        :options="props.list"
        :multiple="props.multiple"
        :class="{'active': inputValue.length !== 0}"
        placeholder=""
        :searchable="false"
        @update:model-value="$emit('update:modelValue', inputValue)"
    />
    <strong
        class="label__head"
    >
      {{ props.head }}
    </strong>
  </label>
</template>

<style lang="scss">
@import "vue-multiselect/dist/vue-multiselect.css";

.label {
  border: 2px solid #F7F8F8;
  display: block;
  padding: 10px 20px 5px 19px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
  height: 64px;

  &__head {
    display: block;
    font-size: 14px;
    font-weight: 300;
    margin: -11px 0 0;
    position: absolute;
    top: 50%;
    transition: 0.2s;
  }
}

.multiselect {
  margin-top: 20px;
  min-height: 30px;
  height: 30px;

  &.active ~ strong {
    top: 6px;
    margin: 0;
  }

  &__single {
    padding-left: 0;
  }

  &__tags {
    background: none;
    border: none;
    min-height: 30px;
    height: 30px;
    padding: 0;
  }

  &__select {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -22px 0 0;
    right: -13px;
    z-index: 2;

    &:before {
      display: none;
    }

    &:after {
      width: 6px;
      height: 6px;
      border: solid 2px #174B7C;
      display: block;
      transform: rotate(45deg);
      border-top: none;
      border-left: none;
      content: '';
    }
  }
}


</style>
