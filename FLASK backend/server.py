from flask import Flask
from flask_socketio import SocketIO
import time
import random

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
    return "Flask SocketIO Server is running!"

def generate_data():
    while True:
        # Simulate data generation
      data = [
        {
          
          'x': 40,
          'y': 24,
          'amt': 24
        },
        {
          
          'x': 30,
          'y': 13,
          'amt': 22
        },
        {
          
          'x': 20,
          'y': 98,
          'amt': 22
        },
        {
          
          'x': 27,
          'y': 39,
          'amt': 20
        },
        {
          
          'x': 18,
          'y': 48,
          'amt': 21
        },
        {
          
          'x': 23,
          'y': 38,
          'amt': 25
        },
        {
          
          'x': 34,
          'y': 43,
          'amt': 21
        },
      ]
        
    socketio.emit('chart_data', data)  # Emit data to the frontend
    time.sleep(5)  # Emit new data ever'y' 5 seconds

@socketio.on('connect')
def handle_connect():
    print("Client connected")
    socketio.start_background_task(generate_data)  # Start data generation

if __name__ == '__main__':
    # Ensure the server runs in debug mode
    socketio.run(app, host='127.0.0.1', port=5000, debug=True)


# from flask import Flask, render_template
# from flask_socketio import SocketIO, emit

# app = Flask(__name__)
# app.config['SECRET_KE'Y''] = 'secret!'
# socketio = SocketIO(app)

# # Initial toggle state
# toggle_state = False

# @app.route('/')
# def inde'''x'''():
#     return render_template('inde'''x'''.html')

# @socketio.on('toggle')
# def handle_toggle():
#     global toggle_state
#     # Toggle the state
#     toggle_state = not toggle_state
#     state_message = 'ON' if toggle_state else 'OFF'
    
#     # Broadcast the new state to all connected clients
#     emit('toggle_update', state_message, broadcast=True)

# if __name__ == '__main__':
#     socketio.run(app, host='0.0.0.0', port=8080, debug=True)
