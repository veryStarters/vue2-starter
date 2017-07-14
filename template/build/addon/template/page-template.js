module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="<%wrapper%>">',
      '    Hello, world!',
      '  </div>',
      '</template>',
      '<script>',
      '  import { mapGetters, mapActions, mapMutations } from \'vuex\'',
      '  import utils from \'utils\'',
      '  export default {',
      '    name: \'page-<%name%>\',',
      '    components: {},',
      '    data() {',
      '      return {}',
      '    },',
      '    mounted(){},',
      '    computed: {',
      '      ...mapGetters([])',
      '    },',
      '    methods: {',
      '      ...mapActions([]),',
      '      ...mapMutations([])',
      '    }',
      '  }',
      '</script>',
      '<style lang="postcss" scoped>',
      '  .<%wrapper%> {}',
      '</style>'
    ].join('\n')
  })()
}