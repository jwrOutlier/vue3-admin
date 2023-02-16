<template>
  <div class="title-com">
    {{ props.message }}
  </div>
</template>

<script lang="ts" setup>
interface ITilteProp {
  readonly message: string
}

const props = withDefaults(defineProps<ITilteProp>(), {
  message: '',
})
</script>
<style scoped lang="scss">
.title-com {
  font-size: 20px;
  padding:10px 30px;
  box-sizing: border-box;
}
</style>
