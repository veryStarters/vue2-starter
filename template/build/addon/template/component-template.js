module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div>',
      '    Hello, world!',
      '  </div>',
      '</template>',
      '<script>',
      '  export default {',
      '    name: \'<%name%>\',',
      '    props: {},',
      '    computed: {},',
      '    methods: {}',
      '  }',
      '</script>',
      '<style lang="postcss" scoped>',
      '</style>'
    ].join('\n')
  })()
}