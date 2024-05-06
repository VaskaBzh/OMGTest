<script setup lang="ts">

</script>

<template>
  <li class="block">
    <slot />
  </li>
</template>

<style scoped lang="scss">
.block {
  min-width: 24px;
  min-height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bebebe;
  color: #bebebe;
  background: gray;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
}
</style>