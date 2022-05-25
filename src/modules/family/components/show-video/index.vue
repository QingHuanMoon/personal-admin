<template>
	<div>
		<el-button type="primary" round plain size="small" @click="showModal = !showModal"
			>点击播放</el-button
		>
		<cl-dialog v-model="showModal" append-to-body center>
			<video preload="auto" height="100%" width="100%" :src="value"></video>
		</cl-dialog>
	</div>
</template>

<script lang="ts">
export default {
	name: "cl-show-video"
};
</script>

<script lang="ts" setup>
import { onMounted, ref } from "vue-demi";
const props = defineProps({
	value: {
		type: String,
		required: true
	}
});
onMounted(() => {
	console.log(props.value);
});

const showModal = ref(false);
</script>

<style scoped></style>
