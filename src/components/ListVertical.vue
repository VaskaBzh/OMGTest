<script setup lang="ts">
import MainBlock from "./ui/MainBlock.vue";
import ListHorizontal from "./ListHorizontal.vue";

import { ref, Ref } from "vue";
import { VerticalListService } from "./services";
import { ListContract } from "./contracts";
import { ListModel } from "./models";

function createVerticalListService(): Ref<ListContract> {
  return ref(VerticalListService.initVerticalList(100, 200, ListModel));
}

const verticalListService: Ref<ListContract> = createVerticalListService();
</script>

<template>
  <ul class="list list-vertical">
    <main-block
      v-for="(_, listIndex) in verticalListService"
      :key="listIndex"
    >
      <list-horizontal />
    </main-block>
  </ul>
</template>

<style scoped lang="scss">
</style>