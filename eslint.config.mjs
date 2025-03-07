import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
    { languageOptions: { globals: globals.browser, parser: tsParser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            '@typescript-eslint': tsEslintPlugin,
            prettier: prettierPlugin
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...prettier.rules,
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true, // Usa aspas simples
                    arrowParens: 'avoid', // Remove parênteses em arrow functions com um único argumento
                    useTabs: false, // Usa tabs ao invés de espaços
                    trailingComma: 'none', // Não adiciona vírgula no final de objetos/arrays
                    tabWidth: 4 // Define o tamanho do tab como 4 espaços
                }
            ]
        }
    }
];
