<script>
  import {mapGetters, mapActions} from 'vuex'
  import config from './init.conf'
  import localMenus from '../../menus'
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
        return this.$route.name || 'indexHome'
      }
    },
    render(h) {
      return (
        <div class='menubar-wrapper'>
          <el-menu ref='menu' default-active={this.activeName} default-openeds={this.openedNames} unique-opened={true}
                   class='el-menu-vertical-demo' onSelect={this.handleSelect} theme={config.sidebarTheme}>
            {
              this.menus.map(menu => {
                return !menu.children || !menu.children.length
                  ? this.menuItem(menu)
                  : this.submenu(menu)
              })
            }
          </el-menu>
        </div>
      )
    },
    mounted() {
      this.loadMenus()
    },
    methods: {
      ...mapActions(['getMenus']),
      submenu(props){
        return (
          <el-submenu index={props.name}>
            <template slot='title'>
              {props.icon ? <i class={props.icon}></i> : ''}
              {props.label}
            </template>
            {
              props.children.map(submenu => {
                return !submenu.children || !submenu.children.length
                  ? this.menuItem(submenu)
                  : this.submenu(submenu)
              })
            }
          </el-submenu>
        )
      },
      menuItem(props){
        return (
          <el-menu-item index={props.name}>
            {props.icon ? <i class={props.icon}/> : ''}
            {props.label}
          </el-menu-item>
        )
      },
      loadMenus(){
        const createMenus = menus => {
          this.menus = menus
          //根据路由name展开menus
          this.$nextTick(() => {
            let menu = this.$refs.menu
            let item = menu.items[this.activeName]
            //路由不存在menus中的情况下，item可能不存在
            if (!item) {
              return
            }
            this.openedNames = item.indexPath.slice(0, item.indexPath.length - 1)
          })
        }
        if (localMenus && localMenus.length) {
          createMenus(localMenus)
        } else {
          this.getMenus().then(res => {
            createMenus(res.menus)
          })
        }
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