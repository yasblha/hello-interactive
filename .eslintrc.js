module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          js: 'never',
          jsx: 'never',
        },
      ],
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  };
  