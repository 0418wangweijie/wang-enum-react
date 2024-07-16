# 在React中使用

## 安装

```shell
npm install wang-enum-react
```

## 方法
``getDescByValue`` 根据名称获取键值
``getDescValueList`` 根据集合名称获取集合数组

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import WangEnumReact from 'wang-enum-react'

const enumInfo = {
  // 枚举示例
  COLORS: {
    RED: { value: 1, desc: 'Red' },
    BLUE: { value: 2, desc: 'Blue' },
  },
}

WangEnumReact.install(React, { enumInfo })

ReactDOM.render(<App />, document.getElementById('root'))

```

## 使用枚举
### 使用高阶函数
```jsx
import React, { useContext } from 'react';
import {withEnum, EnumContext } from 'wang-enum-react';

const MyComponent = () => {
  const Enum = useContext(EnumContext);

  return (
    <div>
      <p>{Enum.getDescByValue('COLORS', 1)}</p>
    </div>
  );
};

export default withEnum(MyComponent);

```
### 使用类函数
```jsx
import React, { useContext } from 'react';

class  MyComponent extends React.Component  {

  render(){
    return (
    <div>
      <p>{this.$enum.getDescByValue('COLORS', 1)}</p>
    </div>
  );
  }
};

export default MyComponent;
```