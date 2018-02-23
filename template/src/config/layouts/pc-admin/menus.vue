<script>
  import api from 'api'
  import appConfig from 'config'
  import logo from './logo.vue'
  export default {
    name: 'menubar',
    components: {
      logo
    },
    props: ['theme', 'topbar', 'menus'],
    data() {
      return {
        openedNames: [],
        localMenus: this.menus
      }
    },
    computed: {
      activeName() {
        return this.$route.name || 'indexHome'
      }
    },
    render() {
      let theme = this.theme
      return (
        <div class='menubar-wrapper'>
          {
            this.topbar === 0 ? (
              <div style={{ padding: '15px', background: theme.bgColor }}>
                <logo show={this.topbar === 0}></logo>
              </div>
            )
            : ''
          }
          <el-menu
            ref='menu'
            default-active={this.activeName}
            default-openeds={this.openedNames}
            unique-opened={true}
            class='el-menu-vertical-demo'
            onSelect={this.handleSelect}
            background-color={theme.bgColor}
            text-color={theme.textColor}
            active-text-color={theme.activateTextColor}
          >
            {
              this.localMenus.map(menu => {
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
      submenu(props) {
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
      menuItem(props) {
        return (
          <el-menu-item index={props.name}>
            {props.icon ? <i class={props.icon}/> : ''}
            {props.label}
          </el-menu-item>
        )
      },
      loadMenus() {
        const createMenus = menus => {
          this.localMenus = menus
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
        // 如果本地有菜单配置，则以本地为准；否则根据应用类型发起请求或者报错
        let localMenus = this.localMenus
        if (localMenus && localMenus.length) {
          createMenus(localMenus)
        } else {
          if (appConfig.isStatic) {
            createMenus([
              {
                name: 'indexHome',
                label: '暂无菜单,请配置menus字段!!',
              }
            ])
          } else {
            api.getMenus().then((res) => {
              if (res.code === 0 && res.data) {
                let menus = res.data.menus
                createMenus(menus)
              } else {
                createMenus({
                  name: 'indexHome',
                  label: '未取到后端菜单配置数据,请配置getMenus接口!!',
                })
              }
            })
          }
        }
      },
      handleSelect(name) {
        this.$router.push({name: name})
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .menubar-wrapper {
  }
</style>
