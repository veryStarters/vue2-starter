module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="{{wrapper}}">',
      '    <jc-{{__name}}></jc-{{__name}}>',
      '  </div>',
      '</template>',
      '<script>',
      '  import {{__humpName}} from \'./index.vue\'',
      '  export default {',
      '    name: \'test-{{__name}}\',',
      '    components: {',
      '      \'jc-{{name}}\': {{__humpName}}',
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