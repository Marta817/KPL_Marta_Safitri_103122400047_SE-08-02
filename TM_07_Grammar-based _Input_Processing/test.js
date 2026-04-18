const parseRobots = require('./index.js');

const sample = `
User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://example.com/sitemap.xml
`;

const result = parseRobots(sample);

console.log(JSON.stringify(result, null, 2));