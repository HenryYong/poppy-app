<template>
  <table class="k-table">
        <thead>
            <tr>
                <!-- <th width="50%" class="poppy-table-item ta-left">文章</th>
                <th width="10%" class="poppy-table-item">作者</th>
                <th width="20%"  class="poppy-table-item">创建时间</th>
                <th width="20%"  class="poppy-table-item">最近修改时间</th> -->
                <th class="k-table-item"
                    v-for="(headerItem, index) of header"
                    :key="`headerItem${index}`"
                    :width="headerItem.width"
                    :class="headerItem.extCls">
                    {{ headerItem.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="k-table-row"
                v-for="(row, index) of data"
                :key="`row${index}`">
                <td class="k-table-item"
                    v-for="(item, key, $index) in row"
                    :key="`row-${index}-${$index}`">
                    {{ item }} {{ key }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            header: {
                type: Array,
                default () {
                    return []
                }
            },
            data: {
                type: Array,
                default () {
                    return []
                }
            }
        }
    }
</script>

<style lang="scss">
    @import './../../styles/conf';

    .k-table {
        width: 100%;
        border-collapse: collapse;
        &-item {
            padding: 12px 8px;
            border-bottom: 1px solid $grayLighter;
            font: {
                size: 14px;
                weight: normal;
            }
        }
        &-row {
            &:hover {
                .k-table-item {
                    background-color: $grayLightest;
                }
            }
        }
    }
</style>

