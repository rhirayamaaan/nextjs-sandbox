import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import type { StorybookConfig } from '@storybook/react/types'

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          ...(config?.resolve?.plugins ?? []),
          new TsconfigPathsPlugin(),
        ],
      },
      module: {
        ...config.module,
        rules: [
          ...(config?.module?.rules ?? []),
          {
            test: /\.scss?$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
        ],
      },
    }
  },
  core: {
    builder: 'webpack5',
  },
}

export default config
