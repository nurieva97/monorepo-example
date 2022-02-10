module.exports = {
    root: true,
    extends: [
        'plugin:vue/recommended'
    ],
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 6,
        sourceType: 'module'
    },
    plugins: [ 'vue' ]
}