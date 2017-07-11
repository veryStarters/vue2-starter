module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="<%wrapper%>">',
      '    <<%name%>></<%name%>>',
      '  </div>',
      '</template>',
      '<script>',
      '  import <%humpName%> from \'./index.vue\'',
      '  export default {',
      '    name: \'page-<%name%>\',',
      '    components: {',
      '      \'<%name%>\': <%humpName%>',
      '    },',
      '    computed: {},',
      '    methods: {}',
      '  }',
      '</script>',
      '<style lang="postcss" scoped>',
      '  .<%wrapper%> {',
      '  }',
      '</style>'
    ].join('\n')
  })()
}