"use strict";
var request = require('request')
exports.setSlackStatus = function(a, b) {
  var c =
    2 < arguments.length && arguments[2] !== void 0
      ? arguments[2]
      : process.env.slackToken;
  return new Promise(function(d, e) {
    var g = JSON.stringify({ status_text: a, status_emoji: b }),
      h = encodeURIComponent(g);
    request.post(
      {
        url:
          "https://slack.com/api/users.profile.set" +
          "?token=" +
          c +
          "&profile=" +
          h
      },
      function(k, l) {
        k || 400 <= l.statusCode
          ? e(k || new Error("Failed to set Slack status"))
          : (d(a), console.log("Status Has Been Changed"));
      }
    );
  });
};
