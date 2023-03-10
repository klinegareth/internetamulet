const { version } = require('../version.json');
const permissions = require('../permissions');
const { name, short_name, description } = require('../app_info');

module.exports = {
  version,
  manifest_version: 3,
  name,
  short_name,
  description,
  permissions,
  host_permissions: ["<all_urls>"],
  action: {
    default_title: "amulet",
    default_popup: "assets/html/popup.html",
    default_icon: "assets/images/logo128.gif"
  },
  content_scripts: [
    {
	  matches: [
		  "*://*.twitter.com/libsoftiktok*",
		  "*://*.twitter.com/ALLIANCELGB?*",
		  "*://*.twitter.com/benshapiro?*",
		  "*://*.twitter.com/wesyang?*",
		  "*://*.twitter.com/AbigailShrier?*",
		  "*://*.kiwifarms.com/*",
		  "*://*.lgballiance.org.uk/*",
		  "*://*.focusonthefamily.com/*",
		  "*://*.adflegal.org/*",
		  "*://*.dailywire.com/*"
	  ],
      // css: ["styles.css"],
      js: ["content.js"]
    }
  ],
  icons: {
	"48": "assets/images/logo48.gif",
    "128": "assets/images/logo128.gif"
  },
  background: {
    service_worker: "background.js"
  },
  web_accessible_resources: [{
    resources: ["assets/**"],
    matches: ["<all_urls>"],
  }]
};
