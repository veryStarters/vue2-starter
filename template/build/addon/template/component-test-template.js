module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="<%wrapper%>">',
      '    <C-<%name%>></C-<%name%>>',
      '  </div>',
      '</template>',
      '<script>',
      '  import <%humpName%> from \'./index.vue\'',
      '  export default {',
      '    name: \'test-<%name%>\',',
      '    components: {',
      '      \'C-<%name%>\': <%humpName%>',
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