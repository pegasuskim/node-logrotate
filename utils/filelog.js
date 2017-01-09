'use strict';
var fs = require('fs');
var strutil = require('./strutil.js');

exports.log = function(msg,reverse) {
	if (reverse == null)
		reverse = false;

	var log_file_name = strutil.getTodayYYYYMMDD();
	var charset = 'utf-8';
	var firstStr = "[" + strutil.getTodayYYYYMMDD("/") + " " + strutil.getTimeHHMMSS() + "] ";
	//log_file_name = __dirname + '/../log/filelog-' + log_file_name + '.log';
	log_file_name = __dirname + '/../log/filelog.log';

	var writeMsg;
	if (fs.existsSync(log_file_name))
	{
		var fd = fs.readFileSync(log_file_name,charset);
		if (reverse)
			writeMsg = firstStr + msg + "\r\n" + fd;
		else
			writeMsg = fd + "\r\n" + firstStr + msg;
	}
	else {
		writeMsg = firstStr + msg;
	}
	fs.writeFile(log_file_name, writeMsg,charset, function (err) {
		//console.log('WRITE FILE COMPLETE');
	});
}
