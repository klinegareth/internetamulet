const {
  version
} = require('../version.json');
const permissions = require('../permissions');
const {
  name,
  short_name,
  description
} = require('../app_info');

module.exports = {
  version,
  manifest_version: 2,
  name,
  short_name,
  description,
  permissions: [...permissions, "https://*/*"],
  options_ui: {
	"page": "assets/html/options.html"
  },
  browser_action: {
    "default_title": short_name,
    "default_popup": "assets/html/popup.html"
  },
  "content_scripts": [{
    "matches": [
		// News/Expressly Political Sites
		"*://*.dailywire.com/*",
		"*://*.foxnews.com/*",
		"*://*.thefederalist.com/*",
		"*://*.nationalreview.com/*",
		"*://*.nypost.com/*",
		"*://*.breitbart.com/*",
		"*://*.theepochtimes.com/*",
		"*://*.americanthinker.com/*",
		"*://*.libertynation.com/*",
		"*://*.justthenews.com/*",
		"*://*.thegatewaypundit.com/*",
		"*://*.pjmedia.com/*",
		"*://*.washingtonexaminer.com/*",
		"*://*.spectator.org/*",
		"*://*.realclearpolitics.com/*",
		"*://*.oann.com/*",
		"*://*.westernjournal.com/*",
		"*://*.dailycaller.com/*",
		"*://*.infowars.com/*",
		"*://*.waynedupree.com/*",
		"*://*.theblaze.com/*",
		"*://*.wnd.com/*",
		"*://*.townhall.com/*",
		"*://*.twitchy.com/*",
		"*://*.theconservativetreehouse.com/*",
		"*://*.redstate.com/*",
		"*://*.freebeacon.com/*",
		"*://*.newsbusters.org/*",
		"*://*.chicksonright.com/*",
		"*://*.theamericanconservative.com/*",
		"*://*.powerlineblog.com/*",
		"*://*.cnsnews.com/*",
		"*://*.lewrockwell.com/*",
		"*://*.dailysignal.com/*",
		"*://*.louderwithcrowder.com/*",
		"*://*.hannity.com/*",
		"*://*.ggutfeld.com/*",
		"*://*.billoreilly.com/*",
		"*://*.conservativereview.com/*",
		"*://*.anncoulter.com/*",
		"*://*.glennbeck.com/*",
		// Twitter
		"*://*.twitter.com/libsoftiktok*",
		"*://*.twitter.com/ALLIANCELGB*",
		"*://*.twitter.com/benshapiro*",
		"*://*.twitter.com/wesyang*",
		"*://*.twitter.com/AbigailShrier*",
		"*://*.twitter.com/MattWalshBlog*",
		"*://*.twitter.com/rgendercritical*",
		// YouTube
		"*://*.youtube.com/\@BenShapiro*",
		"*://*.youtube.com/\@JordanBPeterson*",
		"*://*.youtube.com/\@CandaceOwensPodcast*",
		"*://*.youtube.com/\@MattWalsh*",
		// Hate Groups (taken from https://www.splcenter.org/fighting-hate/extremist-files/ideology/anti-lgbtq with personal additions)
		"*://*.kiwifarms.com/*",
		"*://*.heritage.org/*",
		"*://*.lgballiance.org.uk/*",
		"*://*.focusonthefamily.com/*",
		"*://*.adflegal.org/*",
		"*://*.allscripturebaptist.org/*",
		"*://*.adflegal.org/*",
		"*://*.acpeds.org/*",
		"*://*.afa.net/*",
		"*://*.americanvision.org/*",
		"*://*.americansfortruth.com/*",
		"*://*.atlah.org/*",
		"*://*.campusministryusa.org/*",
		"*://*.c-fam.org/*",
		"*://*.chalcedon.edu/*",
		"*://*.churchmilitant.com/*",
		"*://*.concernedchristiancitizens.org/*",
		"*://*.djameskennedy.org/*",
		"*://*.faithbaptistchurch.net/*",
		"*://*.faithfulwordbaptist.org/*",
		"*://*.frc.org/*",
		"*://*.familywatchinternational.org/*",
		"*://*.firstworksbaptistchurch.org/*",
		"*://*.generations.org/*",
		"*://*.illinoisfamily.org/*",
		"*://*.libertybaptistchurch.us/*",
		"*://*.lc.org/*",
		"*://*.massresistance.org/*",
		"*://*.missionamerica.org/*",
		"*://*.pacificjustice.org/*",
		"*://*.passthesalt.com/*",
		"*://*.pilgrimscovenantchurch.org/*",
		"*://*.prayinjesusname.org/*",
		"*://*.probe.org/*",
		"*://*.publicadvocateusa.org/*",
		"*://*.revivalbaptistchurch.net/*",
		"*://*.ruthinstitute.org/*",
		"*://*.savecalifornia.com/*",
		"*://*.scottlively.net/*",
		"*://*.stedfastbaptist.com/*",
		"*://*.strongholdbaptistchurch.net/*",
		"*://*.surefoundationbaptistchurch.org/*",
		"*://*.tombrownministries.org/*",
		"*://*.truelightpentecostchurch.org/*",
		"*://*.unitedfamilies.org/*",
		"*://*.veritybaptist.com/*",
		"*://*.warriorsforchrist.net/*",
		"*://*.westborobaptistchurch.com/*",
		"*://*.worldcongress.org/*",
		// Other
		"*://*.ovarit.com/*",
	],
    "js": ["content.js"]
  }],
  icons: {
    "128": "assets/images/logo128.gif"
  },
  background: {
    "scripts": ["background.js"]
  },
  web_accessible_resources: [
    "assets/**"
  ],
  // ...(process.env.NODE_ENV === 'development' ? {
  //   content_security_policy: "script-src 'self' 'unsafe-eval'; font-src 'self' data: https://fonts.gstatic.com/s/dmsans; object-src 'self';"
  // } : {})
};
