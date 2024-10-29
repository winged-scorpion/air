<script setup lang="ts">

import BaseForm from "@/components/BaseForm.vue";
import {ref} from "vue";

const showModal = ref(true)
const showEventModal = () => {
  showModal.value = !showModal.value;
}
</script>

<template>
  <div
      class="modal"
      v-if="!showModal"
  >
    <div class="modal__container">
      <BaseForm/>
    </div>
  </div>
  <button
      @click.prevent="showEventModal"
      class="btn"
  >показать
  </button>
</template>

<style scoped lang="scss">
.btn {
  z-index: 10;
  position: relative;
}

.modal {
  padding: 40px;
  background: rgba(0, 0, 0, 0.11);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &__container {
    cursor: default;
    width: 800px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
  }
}


</style>
