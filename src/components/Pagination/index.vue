<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getpageNo', pageNo - 1)">上一页</button>
    <button v-if="startAndEndNum.start > 1" @click="$emit('getpageNo', 1)" :class="{active: pageNo==1}">1</button>
    <button v-if="startAndEndNum.start > 2">···</button>
    <button v-for="(page, index) in startAndEndNum.end" :key="index" v-if="page >= startAndEndNum.start"
      @click="$emit('getPageNo', page)" :class="{active: pageNo==page}">{{ page }}</button>
    <button v-if="startAndEndNum.end < totalPages - 1">···</button>
    <button v-if="startAndEndNum.end < totalPages" @click="$emit('getPageNo', totalPages)" :class="{active: pageNo==totalPages}">{{ totalPages }}</button>
    <button :disabled="pageNo == totalPages" @click="$emit('getPageNo', pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },

    // 计算连续页码和结束数字
    startAndEndNum() {
      let start = 0;
      let end = 0;

      // 连续页面数字5（至少5页）：可能会出现页面数量少于5页
      if (this.continues > this.totalPages) {
        start = 1;
        end = this.totalPages;
      } else {
        start = this.pageNo - parseInt(this.continues / 2);
        end = this.pageNo + parseInt(this.continues / 2);
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        if (end > this.totalPages) {
          start = this.totalPages - this.continues + 1;
          end = this.totalPages;
        }
      }
      return { start, end };
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}

.active {
  background: skyblue;
}
</style>