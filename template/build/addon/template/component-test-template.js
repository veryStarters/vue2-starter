module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="{{wrapper}}">',
      '    <jc-{{name}}></jc-{{name}}>',
      '  </div>',
      '</template>',
      '<script>',
      '  import {{name}} from \'./index.vue\'',
      '  export default {',
      '    name: \'test-{{name}}\',',
      '    components: {',
      '      \'jc-{{name}}\': {{name}}',
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