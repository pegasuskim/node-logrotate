exports.setLen = setLen;
exports.getTodayYYYYMMDD = getTodayYYYYMMDD;
exports.getTimeHHMMSS = getTimeHHMMSS;

function setLen(str,len) {
	if (str.length >= len)
		return str;
	var subLen;
	if (str.length < len)
	{
		subLen = len - str.length;
		for (var i=0; i<subLen; i++)
		{
			str = "0" + str;
		}
	}
	return str;
}

function getTodayYYYYMMDD(per) {
	if (per == null)
		per = "";
	var dt = new Date();
	var y = dt.getFullYear();
	var mon = dt.getMonth() + 1;
	var date = dt.getDate();
	mon = "" + mon;
	date = "" + date;

	mon = setLen(mon,2);
	date = setLen(date,2);
	/*
	if (mon.length < 2)
		mon = "0" + mon;
	if (date.length < 2)
		date = "0" + date;
	*/
	var res = y + per + mon + per +  date;
	return res;
}

function getTimeHHMMSS(per) {
	if (per == null)
		per = ":";
	var dt = new Date();
	var hh = dt.getHours();
	var mm = dt.getMinutes();
	var ss = dt.getSeconds();
	hh = setLen(hh,2);
	mm = setLen(mm,2);
	ss = setLen(ss,2);

	return hh + per + mm + per + ss;
}
