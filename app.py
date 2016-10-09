from flask import Flask, render_template, request
import requests
import bs4

app = Flask('app')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/page', methods=['GET', 'POST'])
def page():
    url = request.data
    soup = bs4.BeautifulSoup(requests.get(url).text, 'html.parser')
    print soup
    return 'yep', 200

app.run(host='127.0.0.1', port=8080, debug=True)
