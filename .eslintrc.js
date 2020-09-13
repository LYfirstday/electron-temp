module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "html",
    "react",
    "react-hooks"
  ],
  "rules": {
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-array-index-key": "error",
    "react/no-direct-mutation-state": "error",
    "react/jsx-tag-spacing": "error",
    "semi": 2, // 强制使用分号
    "no-irregular-whitespace": 0, // 不规则的空白不允许
    "no-trailing-spaces": 2, // 一行结束后面有空格就发出错误
    "eol-last": 2, // 文件以单一的换行符结束
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used"
    }], // 不能有声明后未被使用的变量或参数
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-dupe-args": 2, //函数参数不能重复
    "no-empty": 2, //块语句中的内容不能为空
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-this-before-super": 0, //在调用super()之前不能使用this或super
    "no-undef": 2, //不能有未定义的变量
    "jsx-quotes": [2, "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
    "no-use-before-define": 2, //未定义前不能使用
    "react/jsx-closing-bracket-location": 1, //在JSX中验证右括号位置
    "react/jsx-curly-spacing": [2, {
      "when": "never",
      "children": true
    }], //在JSX属性和表达式中加强或禁止大括号内的空格。
    "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    "react/no-array-index-key": 2, //防止在数组中遍历中使用数组key做索引
    "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格
    "no-extra-semi": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "strict": 2,
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }],
    "no-use-before-define": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-var": 2,
    "arrow-spacing": 2,
  }
};
