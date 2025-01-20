import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: 'tsconfig.json',
        projectService: {
          allowDefaultProject: ['*.mjs'],
          defaultProject: 'tsconfig.json',
        },
      },
    },
  },
  {files: ['src/**/*.{js,mjs,cjs,ts}']},
  {ignores: ['build/']},
  {languageOptions: {globals: globals.node}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeCheckedOnly,
  ...tseslint.configs.recommendedTypeCheckedOnly,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-await-in-loop': 'warn',
      'prettier/prettier': 'warn',
      yoda: 'warn',
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      complexity: ['warn', 15],
      '@typescript-eslint/adjacent-overload-signatures': 'warn',
      '@typescript-eslint/array-type': [
        'warn',
        {
          default: 'generic',
          readonly: 'generic',
        },
      ],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {assertionStyle: 'never'},
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
        },
      ],
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'warn',
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-member-accessibility': 'warn',
      'max-params': 'off',
      '@typescript-eslint/max-params': ['warn', {max: 3}],
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-array-delete': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {ignoreArrowShorthand: true, ignoreVoidOperator: true},
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-duplicate-type-constituents': 'warn',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': [
        'warn',
        {
          allow: [
            'private-constructors',
            'protected-constructors',
            'decoratedFunctions',
          ],
        },
      ],
      '@typescript-eslint/no-for-in-array': 'error',
      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [60],
        },
      ],
      '@typescript-eslint/strict-boolean-expressions': 'error',

      // '@typescript-eslint/naming-convention': 'off',
      // '@typescript-eslint/consistent-type-definitions': 'off',
      // '@typescript-eslint/no-unsafe-type-assertion': 'off',
      // '@typescript-eslint/no-use-before-define': 'off',
      // '@typescript-eslint/no-meaningless-void-operator': 'off',
      // Какие-то супер строгие правила, которые не прям нужны
      'class-methods-use-this': 'off',
      '@typescript-eslint/class-methods-use-this': 'error',
      '@typescript-eslint/consistent-generic-constructors': [
        'error',
        'constructor',
      ],
      // '@typescript-eslint/consistent-type-definitions': 'error',
      // '@typescript-eslint/member-ordering': [
      //   'error',
      //   {
      //     default: {
      //       order: 'alphabetically-case-insensitive',
      //     },
      //   },
      // ],
      // '@typescript-eslint/naming-convention': [
      //   'error',
      //   {selector: 'default', format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE']},
      //   {selector: 'classProperty', format: ['strictCamelCase'], leadingUnderscore: 'allowSingleOrDouble'},
      // ],
    },
  },
];
