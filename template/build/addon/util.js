import fs from 'fs'
import shell from 'shelljs'

/**
 * 清空并初始化文件内容
 * @param filePath
 * @param headNotes
 */
export const clearFileContent = (filePath, headNotes) => {
  headNotes = headNotes || '@date ' + (new Date()).toLocaleDateString()
  headNotes = typeof headNotes === 'string' ? [headNotes] : headNotes.length ? headNotes : []
  let notes = ['/**\n']
  headNotes.forEach(note => {
    notes.push(' * ' + note + '\n')
  })
  notes.push(' **/\n')
  fs.writeFile(filePath, notes.join(''), function (err) {
      if (err) throw err;
    }
  )
}

/**
 * 格式化文件路径，将/Users/xxx/pages/yyy/zzz/sdsd.js类型的文件path转化成/yyy/zzz/
 * @param filePath
 * @param removeRegs
 * @returns {*}
 */
export const formatPath = (filePath, removeRegs) => {
  filePath = filePath.replace(/\\/gi, '/')
  if (removeRegs instanceof RegExp) {
    return filePath.replace(removeRegs, '')
  } else if (removeRegs.length) {
    removeRegs.forEach(reg => {
      if (reg instanceof RegExp || typeof reg === 'string') {
        filePath = filePath.replace(reg, '')
      }
    })
    return filePath
  }
}

/**
 * 将格式化后的文件路径转化成驼峰形式的变量名
 * 如路径中存在"-"，则将其替换成"_"
 * @param formativePath
 * @param defaultName
 * @returns {*}
 */
export const path2name = (formativePath, defaultName) => {
  if (formativePath === '/') {
    return defaultName
  }
  formativePath = formativePath.toLowerCase()
  return formativePath.replace(/^\/|\/$/g, '')
    .replace(/-/g, '_')
    .replace(/\/(.{1})/g, (a, b) => {
      return b.toUpperCase()
    })
}

/**
 * 检测当前文件或者文件夹是否存在
 * @param file
 * @returns {*}
 */
export const checkExits = (file) => {
  let stat
  try {
    stat = fs.statSync(file)
  } catch ( e ) {
    return false
  }
  return stat.isFile() || stat.isDirectory()
}

export const checkExitsAndEmpty = (file) => {
  let stat
  try {
    stat = fs.statSync(file)
  } catch ( e ) {
    return false
  }
  return stat.isFile() && stat.size || stat.isDirectory()
}

/**
 * 创建指定文件
 * @param filePath
 * @param content
 */
export const mkFile = (filePath, content) => {
  fs.open(filePath, 'w+', (err, fd) => {
    if (err) {
      return
    }
    shell.exec('git add ' + filePath)
    fs.write(fd, content, err => {
      if (err) throw err
      fs.closeSync(fd)
    })
  })
}
