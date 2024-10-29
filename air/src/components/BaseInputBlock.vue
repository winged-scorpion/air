<script setup lang="ts">
import {getCurrentInstance, ref} from "vue"
import {Field, ErrorMessage} from "vee-validate";
import { vMaska } from "maska/vue"

const props = defineProps({
  inputType: {
    type: String
  },
  head: {
    type: String
  },
  name:{
    type:String
  },
  error:{
    type:String
  },
  mask: {
    type:Boolean
  }
});
const {uid} = getCurrentInstance();
const inputValue = ref('');

</script>

<template>
  <label
      class="label"
      :for="`amount-${uid}`"
      :class="{'form__error': props.error}"
  >
    <Field
        :name="props.name"
        class="label__input"
        :class="[{'active': inputValue},{'heightMax': !props.head}]"
        :type="props.inputType"
        :id="`amount-${uid}`"
        v-model="inputValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        v-if="!props.mask"
    />
    <Field
        v-maska="'+7 (###) ###-##-##'"
        :name="props.name"
        :id="`amount-${uid}`"
        :class="[{'active': inputValue},{'heightMax': !props.head}]"
        mask="+7(###) ##-##-##"
        class="label__input"
        v-model="inputValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        v-if="props.mask"
    />
    <ErrorMessage
        class="form__error-message"
        :name="props.name"
    />
    <strong
        v-if="props.head"
        class="label__head"
    >
      {{ props.head }}
    </strong>
  </label>
</template>

<style scoped lang="scss">
.form__error-message{
  position: absolute;
  white-space: nowrap;
  left: 0;
  bottom: 100%;
  color: red;
}
.label {
  border: 2px solid #F7F8F8;
  display: block;
  padding: 10px 20px 5px 19px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
  height: 64px;
  &.form__error{
    border: 2px solid red;
  }
  &__head {
    display: block;
    font-size: 14px;
    font-weight: 300;
    margin: -7px 0 0;
    position: absolute;
    top: 50%;
    transition: 0.2s;
  }

  &__input {
    font-size: 18px;
    font-weight: 500;
    line-height: 19.8px;
    border: none;
    height: 26px;
    width: 100%;
    outline: none;
    background: none;
    margin: 19px 0 0 -2px;
    &.active ~ ,&:focus ~ {
      strong {
        top: 11px;
        margin: 0;
      }
    }
    &.heightMax{
      margin: 0;
      height: 100%;
      text-align: right;
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
