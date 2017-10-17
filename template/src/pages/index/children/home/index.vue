<template>
  <div class="home-wrapper">
    <div class="desc">
      <p class="title">使用说明</p>
      <p>0、准备你需要生成的合同文档</p>
      <p>1、选择『合同模板列表』，点击『新增合同模板』，创建一个新的合同模板(.docx)</p>
      <p>2、替换模板中需要替换的内容为占位符，如文档内容『甲方承诺每季度支付乙方180万元』变成『甲方承诺每季度支付乙方{price}万元』</p>
      <p>3、点击『新增一行替换』，key框中输入price, value框中输入你需要的真实数字内容，如180</p>
      <p>4、重复2-4操作，直至将所有需要替换的位置都替换完成</p>
      <p>5、点击『选择合同模板』按钮，选中上述合同模板，等待完成上传</p>
      <p>6、上传成功后，点击『生成合同』即可下载对应生成的文件</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
      }
    }
  }
</script>
<style src="./home.pcss" lang="postcss" scoped></style>