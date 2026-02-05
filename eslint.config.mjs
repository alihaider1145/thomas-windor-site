import js from '@eslint/js';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  {
    files: ['.eleventy.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
  },
];
