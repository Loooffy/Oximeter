rm -r build
npm run build
tar cvf react.tar build
scp react.tar pi@10.0.0.3:~/project/spo2_sensor
