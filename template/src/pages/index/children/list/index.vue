<template>
  <div class="index-list-wrapper">
    <breadcrumb :option="option"></breadcrumb>
    <div class="new">
      <el-button type="primary" size="small">新增合同模板</el-button>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="合同编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="合同名称">
      </el-table-column>
      <el-table-column
        prop="action"
        label="操作">
        <template scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-index-list',
    components: {},
    data() {
      return {
        fileList: [],
        option: {
          list: [
            {
              path: '/',
              label: '首页'
            },
            {
              path: '/list',
              label: '模板列表'
            }
          ]
        },
        tableData: [
          {
            id: 1,
            name: 'XXXXXX购买合同'
          },
          {
            id: 2,
            name: 'XXXXXXX售出合同'
          },
          {
            id: 3,
            name: 'YYYYYYYYYYYYIUY234234购买合同'
          },
          {
            id: 4,
            name: 'SFDSFSDF售出合同'
          }
        ]
      }
    },
    mounted(){},
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([]),
      handleRemove() {
      },
      handlePreview() {},
      edit(row) {
        this.$router.push({name: 'indexDetail', params: {
          id: row.id,
          name: row.name
        }})
        debugger
      }
    }
  }
</script>
<style lang="postcss">
  .index-list-wrapper {
    .el-table {
      th {
        text-align: center;
      }
    }
  }
</style>
<style lang="postcss" scoped>
  .index-list-wrapper {
    margin: 20px;
    .new {
      margin-bottom: 20px;
      float: right;
    }
  }
</style>