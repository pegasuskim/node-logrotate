'use strict';
var util = require('../common');

module.exports = function() {
  return function(req, res, next) {
    //console.log('[REQUEST URL]===> ',    req.url);
    //console.log('[headers]==> ', req.headers);
    //console.log('[REQUEST PARAMS BODY]===> ', req.body);
    //console.log('[REQUEST PARAMS QUERY===> ', req.query);

    var agent = req.headers['user-agent'];
    //'user-agent': 'Lollicam/60 CFNetwork/758.0.2 Darwin/15.0.0'
    //console.log("headers user-agent: ", req.headers['user-agent']);
    var agentName = agent.split(' ');
    console.log('[agent]===> ', agentName);
    for(var index =0; index < agentName.length; index++){
      if(agentName[index] == "Darwin/15.0.0"){
        var temp = agentName[index].split('/');
        if(temp[0] == "Darwin"){
          req.query.platform = "ios";
          return next();
        }

      }else if(agentName[index] = "Mozilla/5.0"){

        return next();

      }else{

        req.query.platform = "android";

      }

    }

    return next();

  }


};



function isNotNeedToBeChecked(path) {
  var paths = ['checkURL','checkURL','checkURL'];

  for (var i = 0; i < paths.length; i++) {
    if (path.substr(0, paths[i].length) == paths[i]) return true;
  }

  return false;
};
