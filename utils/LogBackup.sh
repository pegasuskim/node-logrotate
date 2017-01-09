# LogBackup.sh
#!/bin/sh
logDir=/root/log
LogFile=$logDir/filelog.log
time=`date +%Y%m%d%H%M%S`
cp $LogFile $logDir/logs$time.log
cat /dev/null > $LogFile
find $logDir/*.log -mtime +7 -exec rm -f {} \;
# chmod 700 LogBackup.sh
