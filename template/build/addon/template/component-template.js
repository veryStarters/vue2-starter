module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="{{wrapper}}">',
      '    Hello, world!',
      '  </div>',
      '</template>',
      '<script>',
      '  export default {',
      '    name: \'{{name}}\',',
      '    props: {},',
      '    data() {',
      '      return {}',
      '    },',
      '    computed: {',
      '    },',
      '    methods: {',
      '    }',
      '  }',
      '</script>',
      '<style lang="postcss" scoped>',
      '  .{{wrapper}} {',
      '    ',
      '  }',
      '</style>'
    ].join('\n')
  })()
}