<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:52:53
 * @LastEditTime: 2022-07-07 10:27:04
 * @LastEditors: ecstAsy
-->

<template>
  <el-row class="moko-table">
    <el-table
      ref="mokotable"
      v-loading="loading"
      fit
      :size="props.size"
      :data="props.lazyLoad ? State.dataSource : props.loadData"
      :border="props.border"
      style="width: 100%;font-size: 13px;"
      :show-summary="props.showSummary"
      :class="props.grayHeader ? 'gray-header' : ''"
      :summary-method="getSummaries"
      :span-method="props.spanMethod"
      :row-key="getRowKeys"
      @selection-change="handleSelectionChange"
    >
      <template
        v-for="column in [...State.columns,...columns]"
        :key="column.key"
      >
        <el-table-column
          :prop="column.key"
          :label="column.title"
          :align="column.align"
          :fixed="column.fixed"
          :width="column.width"
          :type="column.type"
          :reserve-selection="column.reserveselection"
          :formatter="column.formatter && getFormatter(column.formatter)"
          :selectable="column.selectable && column.selectable"
        >
          <template
            v-if="column.remark"
            #header
          >
            <span class="moko-table-column-header">
              {{ column.title }}
              <el-tooltip
                effect="dark"
                :content="column.remark"
                placement="top"
              >
                <moko-icon
                  class="table-icon"
                  icon="WarningFilled"
                />
              </el-tooltip>
            </span>
          </template>
          <template
            v-if="column.scopedSlots"
            #default="scope"
          >
            <slot
              v-bind="scope"
              :name="column.scopedSlots.customRender"
            />
          </template>
          <template v-if="column.children">
            <el-table-column
              v-for="item in column.children"
              :key="item.key"
              :prop="item.key"
              :label="item.title"
              :align="item.align"
              :fixed="item.fixed"
              :width="item.width"
              :type="item.type"
              :reserve-selection="item.reserveselection"
              :formatter="column.formatter && getFormatter(column.formatter)"
            >
              <template
                v-if="item.remark"
                #header
              >
                <span class="moko-table-column-header">
                  {{ item.title }}
                  <el-tooltip
                    effect="dark"
                    :content="item.remark"
                    placement="top"
                  >
                    <moko-icon
                      class="table-icon"
                      icon="WarningFilled"
                    />
                  </el-tooltip>
                </span>
              </template>
              <template
                v-if="item.scopedSlots"
                #default="scope"
              >
                <slot
                  v-bind="scope"
                  :name="item.scopedSlots.customRender"
                />
              </template>
            </el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-col v-if="props.pagination">
      <el-pagination
        style="margin: 24px auto;"
        :size="props.size"
        background
        hide-on-single-page
        layout="prev, pager, next, jumper"
        v-bind="State.pagination"
        @current-change="onCurrentChange"
      />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {
  ref, reactive, onMounted, computed,
} from "vue";
import type { TableColumnCtx, TableColumn } from "element-plus/es/components/table/src/table-column/defaults";
import { MoneyThousandFormatter, DecimalRoundFormatter, ThousandFormatter } from "ecstasy-tools";
import type { ElTable } from "element-plus";
import {
  ColumnTypes, MokoTableStateTypes,
} from "./type";

const mokotable = ref<InstanceType<typeof ElTable>>();
const loading = ref<boolean>(false);

const props = withDefaults(defineProps<{
  columns: Array<ColumnTypes>
  origin?: string
  lazyLoad?: boolean
  border?: boolean
  pagination?: boolean
  grayHeader?: boolean
  load?:(params?:any) => any
  loadData?: any
  showSummary?: boolean
  sumArry?: Array<string>
  size?: "small" | "default" | "large"
  rowKey?: string
  selectArry?: Array<any> | []
  spanMethod?: any
  preload?: boolean // 预加载
}>(), {
  lazyLoad: true,
  pagination: true,
  origin: "",
  border: false,
  grayHeader: true,
  load: () => null,
  loadData: [],
  showSummary: false,
  sumArry: undefined,
  size: "default",
  rowKey: "id",
  selectArry: () => [],
  spanMethod: () => null,
  preload: true,
});
interface Emits {
  (e:"selection", val:Array<any>): void
}
const emit = defineEmits<Emits>();
const getRowKeys = (row:any) => row[props.rowKey];
const State = reactive<MokoTableStateTypes>({
  columns: [],
  dataSource: [],
  statisticsProps: {
    type: props.origin,
    values: undefined,
  },
  pagination: {
    total: 0,
    pageSize: 10,
    currentPage: 1,
  },
});
const getData = async (current = 1) => {
  try {
    loading.value = true;
    const res:any = await props.load({ current, pageSize: 10 });
    const {
      data, pageSize, totalCount, pageNo, count, fields,
    } = res.data;
    if (fields) {
      let columns:Array<ColumnTypes> = [];
      fields.fields.map((item:any) => {
        if (!item.children) {
          columns = [
            ...columns,
            {
              key: item.field_name,
              title: item.name,
              dataIndex: item.field_name,
              width: item.type === "datetime" ? 180 : undefined,
              remark: item.remark || undefined,
            },
          ];
        } else {
          const obj:ColumnTypes = { title: item.name, align: "center" };
          let children:Array<ColumnTypes> = [];
          item.children.map((it:any) => {
            children = [
              ...children,
              {
                key: it.field_name,
                title: it.name,
                dataIndex: it.field_name,
                width: it.remark ? 140 : 110,
                remark: it.remark || undefined,
              },
            ];
            return obj;
          });
          columns = [
            ...columns,
            { ...obj, children },
          ];
        }
        return columns;
      });
      State.columns = [...columns];
    }
    State.dataSource = data;
    State.pagination = {
      ...State.pagination,
      total: totalCount,
      pageSize,
      currentPage: pageNo,
    };
    State.statisticsProps.values = count || undefined;
    loading.value = false;
    return true;
  } catch (error) {
    loading.value = false;
    return false;
  }
};

onMounted(() => {
  if (props.lazyLoad && props.preload) {
    getData();
  }
});
const onCurrentChange = (current: number) => getData(current);
const handleSelectionChange = (val: Array<any>) => {
  emit("selection", val);
};
interface SummaryMethodProps<T = any> {
  columns: TableColumnCtx<T>[]
  data: T[]
}
const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param;
  const sums: Array<string> = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = "合计：";
      return;
    }
    const values = data.map((item) => Number(item[column.property]));
    if (props.sumArry.includes(column.property)) {
      sums[index] = `${MoneyThousandFormatter(DecimalRoundFormatter(values.reduce((prev, curr) => {
        const value = Number(curr);
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(value)) {
          return prev + curr;
        }
        return prev;
      }, 0)))}`;
    } else {
      sums[index] = "";
    }
  });
  return sums;
};

const refresh = (keepAlive:boolean = false) => {
  const { currentPage } = State.pagination;
  return getData(!keepAlive ? 1 : currentPage);
};

const toggleSelection = (rows?:Array<any>) => {
  if (rows) {
    rows.forEach((row) => {
      mokotable.value!.toggleRowSelection(row, true);
    });
  } else {
    mokotable.value!.clearSelection();
  }
};
defineExpose({
  refresh,
  toggleSelection,
});

const MoneyFormatter = (
  row: TableColumn<ColumnTypes>,
  column:TableColumnCtx<any>,
  cellValue:any,
  index:number,
) => MoneyThousandFormatter(cellValue || 0);
const NumberFormatter = (
  row: TableColumn<ColumnTypes>,
  column:TableColumnCtx<any>,
  cellValue:any,
  index:number,
) => ThousandFormatter(cellValue);
const FieldsValueFormatter = (
  row: TableColumn<ColumnTypes>,
  column: TableColumnCtx<any>,
  cellValue: any,
  index: number,
) => {
  if (cellValue) return cellValue;
  return "--";
};
const getFormatter = computed(() => (type: string) => {
  const formatterMaps: {
    [proppname:string]:any
  } = {
    money: MoneyFormatter,
    number: NumberFormatter,
    fields: FieldsValueFormatter,
  };
  return formatterMaps[type];
});
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.gray-header {
  :deep(tr th) {
    background-color: #f5f7fa;
  }
}
.moko-table-column-header {
  @include flex-row(flex-start);
  .table-icon {
    margin-left: 8px;
  }
}
.moko-table {
 :deep(table)  {
    width: 100% !important;
  }
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      height: 10px;
      border-radius: 0 !important;
      background-color: #e4e7ed;
      opacity: 0.5;
    }
    &.is-vertical {
      background-color: transparent;
    }
    .el-scrollbar__thumb {
      border-radius: 0 !important;
    }
  }
}
</style>
