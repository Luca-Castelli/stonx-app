
from flask import flask
import time
import yfinance as yf

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

