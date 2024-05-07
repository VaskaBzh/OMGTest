<script setup lang="ts">
import ListHorizontal from "./ListHorizontal.vue";

import { onMounted, reactive, Ref, ref, UnwrapNestedRefs, watch } from "vue";
import { ListService } from "./services";
import { ListContract } from "./contracts";
import { ListType } from "@/types";
import { LazyLoadTrait } from "@/traits";

function createVerticalListService(): UnwrapNestedRefs<ListContract<ListType<string>>> {
	return reactive(ListService.initList<ListType<string>>(100, 200));
}

const verticalListService: UnwrapNestedRefs<ListContract<ListType<string>>> = createVerticalListService();

const dynamicalListLength: Ref<number> = ref(0);

const loadListLazy = () => {
	if (verticalListService.isComplete) {
		LazyLoadTrait.loadList(dynamicalListLength, verticalListService.length, 10);
	}
}

onMounted(loadListLazy)
watch(() => verticalListService.isComplete, loadListLazy);
</script>

<template>
	<div class="block" v-show="verticalListService.isComplete">
		<ul class="list list-vertical">
			<li
				class="list-vertical_element"
				v-for="i in dynamicalListLength"
				:key="i"
			>
				<list-horizontal
					:list-size="verticalListService.length"
					:number-list="verticalListService.list[i]"
				/>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
.list {
	&-vertical {
		flex-direction: column;
		width: fit-content;
	}
}
</style>