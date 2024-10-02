<template>
  <button
    class="bg-green-400 text-slate-900 font-semibold px-4 py-2 rounded shadow hover:opacity-70"
    :type="type"
  >
    {{ text }}
  </button>
</template>
<script lang="ts" setup>
interface Props {
  text?: string
  type?: 'button' | 'submit'
}

withDefaults(defineProps<Props>(), {
  text: 'Compare!',
  type: 'button'
})
</script>
