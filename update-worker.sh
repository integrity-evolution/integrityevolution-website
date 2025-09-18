#!/bin/bash
# Update worker.js with the content from index.html

cat > worker.js << 'WORKER_EOF'
// Integrity Evolution website worker - serves static HTML
const html = `WORKER_EOF

# Append the HTML content
cat index.html >> worker.js

# Close the template literal and add the export
cat >> worker.js << 'WORKER_EOF'
`;

export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
        'X-XSS-Protection': '1; mode=block',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
      },
    });
  },
};
WORKER_EOF
