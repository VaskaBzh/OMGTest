<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { LazyLoadTrait } from "@/traits";

const props = defineProps<{
	numberList: string[],
	listSize: number,
}>();

const dynamicalListLength: Ref<number> = ref(0);

const loadListLazy = () => {
	if (props.numberList?.length) {
		LazyLoadTrait.loadList(dynamicalListLength, props.numberList.length, 10, 2);
	}
}

onMounted(loadListLazy);
</script>

<template>
	<ul class="list list-horizontal">
		<main-block
		  v-for="i in dynamicalListLength"
		  :key="`${numberList[i]} ${i}`"
		>
			{{ numberList[i] }}
		</main-block>
	</ul>
</template>

<style scoped lang="scss">
</style>