module.exports = {
  tpl: (() => {
    return [
      '  import { mapState, mapGetters, mapActions, mapMutations } from \'vuex\'',
      '  import utils from \'utils\'',
      '  export default {',
      '    name: \'page-<%name%>\',',
      '    components: {},',
      '    data() {',
      '      return {}',
      '    },',
      '    mounted(){},',
      '    computed: {',
      '      ...mapState([]),',
      '      ...mapGetters([])',
      '    },',
      '    methods: {',
      '      ...mapActions([]),',
      '      ...mapMutations([])',
      '    }',
      '  }'
    ].join('\n')
  })()
}