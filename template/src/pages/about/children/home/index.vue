<template>
  <div class="test-home-wrapper">
    <breadcrumb :option="breadcrumbOption"></breadcrumb>
    <div class="info">
      <el-table
        :data="tableData2"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        label-class-name="label"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column
          prop="action"
          label="操作"
        >
          <template scope="scope">
            <router-link to="/about/test1">测试1</router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-test-home',
    data() {
      return {
        breadcrumbOption: {
          sep: '>',
          list: [
            {
              name: 'indexHome',
              label: '首页'
            },
            {
              name: 'aboutHome',
              label: '关于我'
            }
          ]
        },
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    mounted(){},
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([]),
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      }
    }
  }
</script>
<style lang="postcss">
  .test-home-wrapper {
    .el-table {
      .info-row {
        background: #c9e5f5;
      }
      .positive-row {
        background: #e2f0e4;
      }
      .cell {
        text-align: center;
      }
    }
  }
</style>
<style lang="postcss" scoped>
  .test-home-wrapper {
    .info {
      margin: 10px auto;
      width: 1024px;
    }
  }
</style>