<template>
  <HeaderComponent />
  <main class="bg-slate-200 pb-10">
    <form @submit.prevent="onSubmitCompareTexts">
      <section class="flex justify-between gap-3 p-3 flex-col sm:flex-row">
        <textarea
          class="w-full p-2 rounded-md shadow resize-none focus:outline-none focus:bg-slate-50"
          size
          rows="30"
          name="text1"
          id="text1"
          placeholder="Type or paste one version of a text"
          v-model="formCompare.text1"
        ></textarea>
        <textarea
          class="w-full p-2 rounded-md shadow resize-none focus:outline-none focus:bg-slate-50"
          rows="30"
          name="text2"
          id="text2"
          placeholder="Type or paste another version of a text"
          v-model="formCompare.text2"
        ></textarea>
      </section>
      <section class="w-full flex justify-center mt-5 pb-8">
        <ButtonComponent type="submit" />
      </section>
    </form>

    <DisplayComponent />
  </main>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import DisplayComponent from '@/components/DisplayComponent.vue';
import { compareDiffTexts } from '@/utils/diff-texts';

import { Toast } from '@/utils/toastification';

const formCompare = reactive({
  text1: '',
  text2: '',
});

const onSubmitCompareTexts = () => {
  if (!formCompare.text1.trim()) {
    Toast.error('There is no text to compare');
    return;
  }

  if (!formCompare.text2.trim()) {
    Toast.error('There is no text to compare');
    return;
  }

  compareDiffTexts(formCompare.text1, formCompare.text2);

  Toast.success('Difference generated');
  return;
};
</script>
