// Copyright 2021 Oliver Smith, Martijn Braam
// SPDX-License-Identifier: GPL-3.0-or-later

// Set up autoconfig (we use it to copy/update userChrome.css into profile dir)
pref('general.config.filename', "mobile-config-autoconfig.js");
pref('general.config.obscure_value', 0);
pref('general.config.sandbox_enabled', false);

// Select a mobile user agent for firefox (same as tor browser on android)
pref('general.useragent.override', 'Mozilla/5.0 (Android 9; Mobile; rv:78.0) Gecko/20100101 Firefox/78.0');

// Enable android-style pinch-to-zoom
pref('dom.w3c.touch_events.enabled', true);
pref('apz.allow_zooming', true);
pref('apz.allow_double_tap_zooming', true);

// Save vertical space by drawing directly in the titlebar
pref('browser.tabs.drawInTitlebar', true);

// Disable search suggestions
pref('browser.search.suggest.enabled', false);

// Empty new tab page: faster, less distractions
pref('browser.newtabpage.enabled', false);

// Allow UI customizations with userChrome.css and userContent.css
pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);

// Select the entire URL with one click
pref('browser.urlbar.clickSelectsAll', true);

// Disable cosmetic animations, save CPU
pref('toolkit.cosmeticAnimations.enabled', false);

// Disable download animations, save CPU
pref('browser.download.animateNotifications', false);
