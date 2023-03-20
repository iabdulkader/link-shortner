// !process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));

const config = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
export default config;
