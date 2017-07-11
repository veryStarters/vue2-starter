module.exports = {
  tpl: (() => {
    return [
      '<template>',
      '  <div class="<%wrapper%>">',
      '    Hello, world!',
      '  </div>',
      '</template>',
      '<script src="./index.js"></script>',
      '<style src="./index.pcss" lang="postcss" scoped></style>'
    ].join('\n')
  })()
}