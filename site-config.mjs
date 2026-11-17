// configure-pages supplies the actual publishing URL in GitHub Actions.
const configuredUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000/');
configuredUrl.search = '';
configuredUrl.hash = '';
configuredUrl.pathname = configuredUrl.pathname.replace(/\/$/, '') + '/';
export const siteUrl = configuredUrl.href;
export const basePath = configuredUrl.pathname.replace(/\/$/, '');
