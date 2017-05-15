module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="{{wrapper}}">',
      '    <jc-{{name}}></jc-{{name}}>',
      '  </div>',
      '</template>',
      '<script>',
      '  import {{humpName}} from \'./index.vue\'',
      '  export default {',
      '    name: \'test-{{name}}\',',
      '    components: {',
      '      \'jc-{{name}}\': {{humpName}}',
      '    },',
      '    computed: {},',
      '    methods: {}',
      '  }',
      '</script>',
      '<style lang="postcss" scoped>',
      '  .{{wrapper}} {',
      '  }',
      '</style>'
    ].join('\n')
  })()
}