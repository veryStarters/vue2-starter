module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="{{wrapper}}">',
      '    Hello, world!',
      '  </div>',
      '</template>',
      '<script>',
      '  import { mapState, mapActions, mapMutations } from \'vuex\'',
      '  import api from \'api\'',
      '  export default {',
      '    name: \'page-{{__name}}\',',
      '    components: {},',
      '    data() {',
      '      return {}',
      '    },',
      '    computed: {',
      '      ...mapState([])',
      '    },',
      '    methods: {',
      '      ...mapActions([]),',
      '      ...mapMutations([])',
      '    }',
      '  }',
      '</script>',
      '<style lang="postcss" scoped>',
      '  .{{wrapper}} {}',
      '</style>'
    ].join('\n')
  })()
}