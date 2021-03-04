/**
 * 规则阅读指导
 * 1. 规则上方注释为规则内容
 * 2. 规则后方值为规则状态，如下：
 *    'error' => 规则已开启，且报错
 *    'warn' => 规则已开启，且告警
 *    'off' => 规则已关闭
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    /**
     * 强制缩进为 2 空格
     */
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2],
    /**
     * 单文件最长 666 行
     */
    'max-lines': ['error', 666],
    /**
     * 单函数最长 233 行
     */
    'max-lines-per-function': ['error', 233],
    /**
     * 强制使用单引号
     */
    'quotes': ['error', 'single'],
    /**
     * 禁止使用 var
     */
    'no-var': 'error',
    /**
     * 优先使用字符串模板
     */
    'prefer-template': 'error',
    /**
     * parseInt 必须传入第二个参数
     */
    'radix': 'error',
    /**
     * async 函数中必须存在 await 语句
     */
    'require-await': 'off',
    /**
     * 必须使用 isNaN(foo) 而不是 foo === NaN
     */
    'use-isnan': 'error',
    /**
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     */
    'valid-typeof': 'error',
    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     */
    'yoda': [
      'error',
      'never',
      {
        'onlyEquality': true,
      },
    ],
    /**
     * 禁止函数的循环复杂度超过 20
     * @reason https://en.wikipedia.org/wiki/Cyclomatic_complexity
     */
    'complexity': [
      'error',
      {
        'max': 20,
      },
    ],
    /**
     * 有默认值的参数必须放在函数参数的末尾
     */
    'default-param-last': 'warn',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    'eqeqeq': ['error', 'always'],
    /**
     * 禁止方向错误的 for 循环
     */
    'for-direction': 'error',
    /**
     * 函数赋值给变量的时候，函数名必须与变量名一致
     */
    'func-name-matching': [
      'error',
      'always',
      {
        'includeCommonJSModuleExports': false,
      },
    ],
    /**
     * for in 内部必须有 hasOwnProperty
     */
    'guard-for-in': 'error',
    /**
     * 单行注释必须写在上一行
     */
    'line-comment-position': 'error',
    /**
     * 代码块嵌套的深度禁止超过 5 层
     */
    'max-depth': ['error', 5],
    /**
     * 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
     */
    'max-nested-callbacks': ['error', 3],
    /**
     * 函数的参数禁止超过 5 个
     */
    'max-params': ['error', 5],
    /**
     * new 后面的类名必须首字母大写
     */
    'new-cap': [
      'error',
      {
        'newIsCap': true,
        'capIsNew': false,
        'properties': true,
      },
    ],
    /**
     * 禁止使用 Array 构造函数时传入的参数超过一个
     * @reason 参数为一个时表示创建一个指定长度的数组，比较常用
     * 参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数
     */
    'no-array-constructor': 'error',
    /**
     * 禁止将 async 函数做为 new Promise 的回调函数
     * @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
     */
    'no-async-promise-executor': 'error',
    /**
     * 禁止使用 caller 或 callee
     * @reason 它们是已废弃的语法
     */
    'no-caller': 'error',
    /**
     * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
     */
    'no-case-declarations': 'error',
    /**
     * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
     */
    'no-constant-condition': [
      'error',
      {
        'checkLoops': false,
      },
    ],
    /**
     * 禁止 if else 的条件判断中出现重复的条件
     */
    'no-dupe-else-if': 'error',
    /**
     * 禁止在对象字面量中出现重复的键名
     */
    'no-dupe-keys': 'error',
    /**
     * 禁止在 switch 语句中出现重复测试表达式的 case
     */
    'no-duplicate-case': 'error',
    /**
     * 禁止重复导入模块
     */
    'no-duplicate-imports': 'error',
    /**
     * 禁止出现空代码块，允许 catch 为空代码块
     */
    'no-empty': [
      'error',
      {
        'allowEmptyCatch': true,
      },
    ],
    /**
     * 禁止使用 foo == null，必须使用 foo === null
     */
    'no-eq-null': 'error',
    /**
     * 禁止使用 eval
     */
    'no-eval': 'error',
    /**
     * 禁止将 catch 的第一个参数 error 重新赋值
     */
    'no-ex-assign': 'error',
    /**
     * 禁止修改原生对象
     * @reason 修改原生对象可能会与将来版本的 js 冲突
     */
    'no-extend-native': 'error',
    /**
     * 禁止不必要的布尔类型转换
     */
    'no-extra-boolean-cast': 'error',
    /**
     * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
     */
    'no-fallthrough': 'error',
    /**
     * 禁止将一个函数声明重新赋值
     */
    'no-func-assign': 'error',
    /**
     * 禁止对全局变量赋值
     */
    'no-global-assign': 'error',
    /**
     * 禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!
     */
    'no-implicit-coercion': [
      'error',
      {
        'allow': ['!!'],
      },
    ],
    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     */
    'no-implied-eval': 'error',
    /**
     * 禁止对导入的模块进行赋值
     */
    'no-import-assign': 'error',
    /**
     * 禁止在 if 代码块内出现函数声明
     */
    'no-inner-declarations': ['error', 'both'],
    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
     */
    'no-irregular-whitespace': [
      'error',
      {
        'skipStrings': true,
        'skipComments': false,
        'skipRegExps': true,
        'skipTemplates': true,
      },
    ],
    /**
     * 禁止使用 __iterator__
     * @reason __iterator__ 是一个已废弃的属性
     * 使用 [Symbol.iterator] 替代它
     */
    'no-iterator': 'error',
    /**
     * 禁止使用 label
     */
    'no-labels': 'error',
    /**
     * 禁止使用没必要的 {} 作为代码块
     */
    'no-lone-blocks': 'error',
    /**
     * 禁止使用 magic numbers
     */
    'no-magic-numbers': 'error',
    /**
     * 禁止正则表达式中使用肉眼无法区分的特殊字符
     * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
     */
    'no-misleading-character-class': 'error',
    /**
     * 禁止使用 \ 来换行字符串
     */
    'no-multi-str': 'error',
    /**
     * 禁止直接 new 一个类而不赋值
     * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
     */
    'no-new': 'error',
    /**
     * 禁止使用 new Function
     * @reason 这和 eval 是等价的
     */
    'no-new-func': 'error',
    /**
     * 禁止直接 new Object
     */
    'no-new-object': 'error',
    /**
     * 禁止使用 new 来生成 Symbol
     */
    'no-new-symbol': 'error',
    /**
     * 禁止使用 new 来生成 String, Number 或 Boolean
     */
    'no-new-wrappers': 'error',
    /**
     * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
     */
    'no-obj-calls': 'error',
    /**
     * 禁止对函数的参数重新赋值
     */
    'no-param-reassign': 'error',
    /**
     * 禁止使用 __proto__
     * @reason __proto__ 是已废弃的语法
     */
    'no-proto': 'error',
    /**
     * 禁止在正则表达式中出现连续的空格
     */
    'no-regex-spaces': 'error',
    /**
     * 禁止在 return 语句里赋值
     */
    'no-return-assign': ['error', 'always'],
    /**
     * 禁止将自己赋值给自己
     */
    'no-self-assign': 'error',
    /**
     * 禁止将自己与自己比较
     */
    'no-self-compare': 'error',
    /**
     * 禁止使用逗号操作符
     */
    'no-sequences': 'error',
    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': 'error',
    /**
     * 禁止使用保留字作为变量名
     */
    'no-shadow-restricted-names': 'error',
    /**
     * 禁止在数组中出现连续的逗号
     */
    'no-sparse-arrays': 'error',
    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     */
    'no-template-curly-in-string': 'error',
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': 'error',
    /**
     * 禁止使用未定义的变量
     */
    'no-undef': 'error',
    /**
     * 禁止将 undefined 赋值给变量
     */
    'no-undef-init': 'error',
    /**
     * 循环内必须对循环条件中的变量有修改
     */
    'no-unmodified-loop-condition': 'error',
    /**
     * 禁止在 return, throw, break 或 continue 之后还有代码
     */
    'no-unreachable': 'error',
    /**
     * 禁止在 finally 中出现 return, throw, break 或 continue
     * @reason finally 中的语句会在 try 之前执行
     */
    'no-unsafe-finally': 'error',
    /**
     * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
     */
    'no-unsafe-negation': 'error',
    /**
     * 禁止无用的表达式
     */
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': true,
      },
    ],
    /**
     * 已定义的变量必须使用
     */
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'none',
        'ignoreRestSiblings': false,
        'caughtErrors': 'none',
      },
    ],
    /**
     * 变量必须先定义后使用
     */
    'no-use-before-define': [
      'error',
      {
        'variables': false,
        'functions': false,
        'classes': false,
      },
    ],
    /**
     * 禁止出现没必要的 call 或 apply
     */
    'no-useless-call': 'error',
    /**
     * 禁止在 catch 中仅仅只是把错误 throw 出去
     * @reason 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
     */
    'no-useless-catch': 'error',
    /**
     * 禁止出现没必要的计算键名
     */
    'no-useless-computed-key': 'error',
    /**
     * 禁止出现没必要的字符串连接
     */
    'no-useless-concat': 'error',
    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
     */
    'no-useless-rename': 'error',
    /**
     * 强制数组方法的回调函数中有 return 语句
     */
    'array-callback-return': 'error'
  }
}
