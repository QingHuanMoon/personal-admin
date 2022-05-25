<template>
	<cl-crud ref="Crud">
		<el-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</el-row>

		<el-row>
			<!-- 数据表格 -->
			<cl-table ref="Table">
				<template #column-url="{ scope }">
					<cl-show-video :value="scope.row.url" />
				</template>
			</cl-table>
		</el-row>

		<el-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</el-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service, named } = useCool();

named("family-video");

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "标题", prop: "title", required: true, component: { name: "el-input" } },
		{
			label: "描述",
			prop: "desc",
			component: { name: "cl-editor-quill", props: { height: 400 } },
			required: true
		},
		{
			label: "地址",
			prop: "url",
			component: { name: "cl-upload", props: { listType: "text", limit: 1, type: "file" } },
			required: false
		},
		{
			label: "状态",
			prop: "status",
			component: { name: "el-switch" },
			required: true,
			value: false
		}
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "标题", prop: "title" },
		{ label: "地址", prop: "url", component: { name: "cl-link" } },
		{ label: "状态", prop: "status", component: { name: "cl-switch" } },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.family.video
	},
	(app) => {
		app.refresh();
	}
);
</script>
