<script setup lang="ts">
import {ref} from "vue"
import BaseInputBlock from "@/components/BaseInputBlock.vue";
import {FORM_TEXT, INPUT_TYPE} from "@/constant";
import {schemaVeeValidate} from "@/constant";
import {Form} from "vee-validate";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseRange from "@/components/BaseRange.vue";
import BaseRangeData from "@/components/BaseRangeData.vue";
import {sendForm} from "@/function";

let formData = ref({
  name: '',
  phone: '',
  select: [],
  square: null,
  date: null
});

const send = () => {
  sendForm(formData.value)
}

const range = (ran: Object) => {
  formData.value.square = ran
}
const data = (ran: Object) => {
  formData.value.date = ran
}

</script>

<template>
  <Form
      action=""
      @submit="send"
      v-slot="{ errors }"
      :validation-schema="schemaVeeValidate"
  >
    <h3 class="head">Заполните заявку, чтобы стать резидентом</h3>
    <BaseInputBlock
        :input-type="INPUT_TYPE.text"
        :head="FORM_TEXT.name"
        :name="`name`"
        :error="errors.name"
        v-model="formData.name"
    />
    <BaseInputBlock
        :input-type="INPUT_TYPE.number"
        :head="FORM_TEXT.phone"
        :name="`phone`"
        :error="errors.phone"
        :mask="true"
        v-model="formData.phone"
    />
    <BaseSelect
        :name="`select`"
        :error="errors.select"
        :head="FORM_TEXT.select.head"
        :list="FORM_TEXT.select.list"
        v-model="formData.select"
        :multiple="true"
    />
    <BaseInputBlock
        :input-type="INPUT_TYPE.text"
        :head="FORM_TEXT.address"
        :name="`address`"
        v-model="formData.name"
    />
    <BaseRange
        @range="range"
    />
    <BaseRangeData
        @range="data"
    />
    <button class="btn">Отправить</button>
  </Form>
</template>

<style scoped lang="scss">
.btn {
  width: 160px;
  height: 38px;
  padding: 12px 40px 12px 40px;
  background: #174B7C;
  border: none;
  border-radius: 20px;
  margin: auto;
  display: block;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.head {
  font-size: 24px;
  font-weight: 600;
  line-height: 26.4px;
  margin-bottom: 38px;
}
</style>
