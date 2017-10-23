<template>
  <div class="home-wrapper">
    <h1>布局说明</h1>
    <div class="content">
      <p class="title">1、简介</p>
      <p>本布局名称为『pc-admin』，主要适用场景为后台管理系统，默认配置有头部导航栏、侧边菜单栏、用户权限管理等模块</p>
      <p class="title">2、配置</p>
      <p>可以通过多种方式来修改VS2系统中默认布局的各种表现和行为：</p>
      <ol>
        <li>
          A、在config/index.js中可配置系统行为。比如，系统如果没有跟后端的数据交互，仅仅是一个呈现的静态网站，
          那直接配置参数isStatic为true, 则系统将屏蔽所有权限和与后台服务相关的接口调用
        </li>
        <li>
          B、在实例化具体layout时，通过props可配置系统界面。比如，系统如果不需要顶部导航栏，则可以在实例化pc-admin-layout时传进
          topbar=0即可；如果需要改变系统整体风格样式，则传进去theme='light'(系统默认是'dark')即可；
        </li>
      </ol>
    </div>
  </div>
</template>
<script src="./home.js"></script>
<style src="./home.pcss" lang="postcss" scoped></style>