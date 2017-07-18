<template>
  <div class="menubar-wrapper">
    <!--最多支持三层嵌套-->
    <el-menu ref="menu" :default-active="activeName" :default-openeds="openedNames" :unique-opened="true" class="el-menu-vertical-demo"
             @select="handleSelect" theme="dark">
      <template v-for="menu in menus">
        <el-submenu v-if="menu.children && menu.children.length" :index="menu.name">
          <template slot="title"><i class="el-icon-menu"></i>{{menu.label}}</template>
          <template v-for="submenu in menu.children">
            <el-submenu v-if="submenu.children && submenu.children.length" :index="submenu.name">
              <template slot="title"><i class="el-icon-menu"></i>{{submenu.label}}</template>
              <el-menu-item v-for="subSubmenu in submenu.children" :key="subSubmenu.name"
                            :index="subSubmenu.name">{{subSubmenu.label}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="submenu.name" v-else>{{submenu.label}}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item :index="menu.name" v-else><i class="el-icon-menu"></i>{{menu.label}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'menubar',
    components: {},
    data() {
      return {
        menus: [],
        openedNames: []
      }
    },
    computed: {
      activeName() {
        return this.$route.name || 'home'
      }
    },
    mounted(){
      this.loadMenus()
    },
    methods: {
      ...mapActions(['getMenus']),
      loadMenus(){
        this.getMenus().then(res => {
          this.menus = res.menus
          //根据路由name展开menus
          this.$nextTick(() => {
            let menu = this.$refs.menu
            let item = menu.items[this.activeName]
            this.openedNames = item.indexPath.slice(0, item.indexPath.length - 1)
          })
        })
      },
      handleSelect(name){
        this.$router.push({name: name})
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .menubar-wrapper {
  }
</style>