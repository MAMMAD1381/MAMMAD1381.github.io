// domainUtils.js

export function domainExtractor(url) {
  // Remove protocol
  let domain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');

  // Remove path and query parameters
  domain = domain.split('/')[0];

  // Extract main part of domain
  const parts = domain.split('.');
  const mainPart = parts.slice(-2, -1).join('.'); // Get second to last part
  return mainPart;
}
