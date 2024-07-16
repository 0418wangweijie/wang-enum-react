import React, { createContext, useContext } from 'react'
// 定义常量
const Constant = {}

// 使用React Context API来提供枚举实例
const EnumContext = createContext(null)

/**
 * 初始化安装实例
 * @param {Object} React React实例
 * @param {Object} options 枚举集合
 * @param {Object} options.enumInfo 枚举信息
 */
Constant.install = (React, { enumInfo = {} } = {}) => {
  // 枚举实例方法
  const Enum = {
    /**
     * 根据枚举值获取描述
     * @param {string} constantName 枚举名称
     * @param {any} value 枚举值
     * @returns {string} 枚举描述
     * */
    getDescByValue: (constantName, value) => {
      const constantItem = enumInfo[constantName]
      if (!constantItem) {
        return ''
      }
      const foundItem = Object.values(constantItem).find(item => item.value === value)
      return foundItem ? foundItem.desc || '' : ''
    },
    /**
     * 根据枚举名称获取对应的键值对
     * @param {string} constantName 枚举名称
     * @returns {Array} 返回键值对数组
     * */
    getDescValueList: constantName => {
      const constantItem = enumInfo[constantName]
      if (!constantItem) {
        return []
      }
      return Object.values(constantItem).map(item => ({
        value: item.value || '',
        desc: item.desc || '',
      }))
    },
  }

  // 动态更新 EnumContext 的值
  EnumContext._currentValue = Enum
  // 注入class this
  React.Component.prototype.$enum = Enum
  // 注入上下文
  React.$enum = Enum
}

// 高阶组件，提供枚举实例
const withEnum = Component => props => {
  const enumValue = useContext(EnumContext)
  return (
    <EnumContext.Provider value={enumValue}>
      <Component {...props} />
    </EnumContext.Provider>
  )
}

export default Constant
export { EnumContext, withEnum }
