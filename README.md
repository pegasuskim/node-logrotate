# node-logrotate
node.js logrotate

1. Log 파일을 벡업받는다.
# cp forever.log filelog_20141210.log

2. 원 Log 파일은 초기화 시킨다.
# cat /dev/null > filelog.log

 3. 오래된(알아서 적절히 조절) 벡업 파일은 삭제.
find ./*.log -mtime +7 -exec rm -f {} \;

4. LogBackup.sh 1~3번은 자동으로 되게 쉘 스크립트를 작성
   LogBackup.sh   실행

5. 작성된 쉘 스크립트를 스케줄러로 돌린다.
# crontab -e
00 06 * * * /root/cronShell/LogBackup.sh
