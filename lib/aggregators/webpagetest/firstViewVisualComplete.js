/**
 * Sitespeed.io - How speedy is your site? (http://www.sitespeed.io)
 * Copyright (c) 2014, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
var Aggregator = require('../../aggregator');

module.exports = new Aggregator('wpt.firstViewVisualComplete',
  'Visual Complete First View',
  'Time of the last visual change to the page (fetched using WebPageTest).', 'milliseconds', 0,
  function(pageData) {
    if (pageData.webpagetest) {
      var stats = this.stats;
      pageData.webpagetest.response.data.run.forEach(function(run) {
        stats.push(run.firstView.results.visualComplete);
      });
    }
  });