var dataset = require('code42day-dataset');
var load = require('code42day-load');

module.exports = analytics;

function gaScriptUrl() {
  return ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
    '.google-analytics.com/ga.js';
}

function analytics(propertyId) {
  if (!propertyId) {
    propertyId = dataset(document.body, 'gaPropertyId');
    if (!propertyId) {
      return;
    }
  }

  var gaq = window._gaq = window._gaq || [];
  gaq.push(['_setAccount', propertyId]);
  gaq.push(['_trackPageview']);

  return load(gaScriptUrl());
}
