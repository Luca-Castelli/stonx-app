
from flask import Flask
import yfinance as yf
import time

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    uglyTime = time.time()
    niceTime = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(uglyTime))
    return {'time': niceTime}

@app.route('/SPY')
def get_xsp_price():
    tickerSymbol = 'SPY'
    tickerData = yf.Ticker(tickerSymbol)
    price = tickerData.info['previousClose']
    return {'price': str(price)}

