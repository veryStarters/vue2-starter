<template>
  <div class="index-detail-wrapper">
    <breadcrumb :option="option"></breadcrumb>
    <p class="title">第一步：</p>
    <el-upload
      class="upload-demo"
      action="http://localhost:8082/upload"
      :on-success="handleSuccess"
    >
      <el-button size="small" type="primary">选择word文档</el-button>
    </el-upload>
    <p class="title">第二步：</p>
    <el-button type="primary" size="small" @click="addDomain">+新增替换</el-button>
    <div>
      <el-form :model="dynamicValidateForm" label-width="0px" class="demo-dynamic">
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="index"
          :prop="'domains.' + index + '.value'"
        >
          <el-input v-model="domain.key" placeholder="占位符名称" style="width: 150px"></el-input>
          <el-input
            v-model="domain.value"
            placeholder="需要替换占位符的内容"
            style="width: 680px;"
          >
          </el-input>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-index-detail',
    components: {},
    data() {
      return {
        replaceList: [],
        option: {
          list: [
            {
              path: '/',
              label: '首页'
            },
            {
              path: '/list',
              label: '模板列表'
            },
            {
              path: '',
              label: '新增|编辑模板'
            }
          ]
        },
        dynamicValidateForm: {
          domains: [
            {
              key: '',
              value: ''
            }
          ]
        }
      }
    },
    mounted(){
    },
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([]),
      handleSuccess(fileInfo) {
        console.log(fileInfo)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(this.dynamicValidateForm.domains[0].key)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: ''
        });
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .index-detail-wrapper {
    margin: 20px 20px;
    .desc {
      line-height: 1.8;
      font-size: 14px;
      .title {
        border-bottom: 1px solid #ddd;
        line-height: 2;
        font-size: 20px;
      }
      margin-bottom: 10px;
    }
    .demo-dynamic {
      margin-top: 20px;
    }
    .title {
      margin: 25px 0 10px 0;
    }
    .breadcrumb {
      margin: 20px 0;
    }
    .upload-demo {

    }
  }
</style>