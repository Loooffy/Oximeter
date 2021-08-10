from flask import Flask, send_from_directory
from flask_socketio import SocketIO, emit
from multiprocessing import Process, Value
import max30102
import hrcalc
import time

sensor = max30102.MAX30102()
app = Flask(__name__, static_url_path='')
socketio = SocketIO(app)

@socketio.on('start')
def read_sensor(message):
    print(message)
    while True:
        red, ir = sensor.read_sequential()
        print(len(red))
        hr, hr_valid, spo2, spo2_valid = hrcalc.calc_hr_and_spo2(ir, red)
        emit('measure', 'hr: ' + str(hr) + '\n' + 'spo2: ' + str(spo2))

@app.route('/react/<path:path>')
def index(path):
    return send_from_directory('www', path)

@app.route('/static/<path:path>')
def files(path):
    return send_from_directory('www/static', path)

@app.route('/')
def getSensor():
    red, ir = sensor.read_sequential()
    return '<p>' + 'red:' + str(red) + '<br><br>' + 'ir:' + str(ir) + '</p>'


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='10.0.0.3')
