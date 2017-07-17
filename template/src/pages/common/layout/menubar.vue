<template>
  <div class="menubar-wrapper">
    <!--最多支持三层嵌套-->
    <el-menu :default-active="activeName" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :router="true" theme="dark">
      <template v-for="menu in menus">
        <el-submenu v-if="menu.children && menu.children.length" :index="menu.name | getPath">
          <template slot="title"><i class="el-icon-menu"></i>{{menu.label}}</template>
          <template v-for="submenu in menu.children">
            <el-submenu v-if="submenu.children && submenu.children.length" :index="submenu.name | getPath">
              <template slot="title"><i class="el-icon-menu"></i>{{submenu.label}}</template>
              <el-menu-item v-for="subSubmenu in submenu.children" :key="subSubmenu.name"
                            :index="subSubmenu.name | getPath">{{subSubmenu.label}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="submenu.name | getPath" v-else>{{submenu.label}}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item :index="menu.name | getPath" v-else><i class="el-icon-menu"></i>{{menu.label}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import utils from 'utils'
  export default {
    name: 'menubar',
    components: {},
    data() {
      return {
        menus: [],
        activeName: 'nav1'
      }
    },
    mounted(){
      this.getMenus().then(res => {
        this.activeName = res.activeName
        this.menus = res.menus
      })
    },
    filters: {
      getPath(name){
        if (!name) {
          return '/'
        }
        return /[A-Z]/.test(name) ? name.replace(/[A-Z]{1}/g, function (a, b) {
          return '/' + a.toLowerCase()
        }) : `/${name}`
      },
    },
    computed: {
      ...mapGetters([]),
    },
    methods: {
      ...mapActions(['getMenus']),
      ...mapMutations([]),

      handleOpen(a, b){
        console.log('open')
        console.log(a)
        console.log(b)
      },
      handleClose(){
        console.log('close')
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .menubar-wrapper {
  }
</style>