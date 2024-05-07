<script setup lang="ts">

</script>

<template>
	<li class="block">
		<slot />
	</li>
</template>

<style scoped lang="scss">
.block {
	min-width: 42px;
	min-height: 42px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #bebebe;
	color: #bebebe;
	background: gray;
	font-size: 22px;
	line-height: 28px;
	font-weight: 400;
	border-radius: 4px;
	transition: all 0.3s ease 0s;
	cursor: pointer;
	&:hover {
		transform: scale(0.8);
	}
}
</style>