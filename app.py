from flask import Flask, render_template, request
import requests
import bs4
import ctrl
import json

app = Flask('app')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/page', methods=['GET', 'POST'])
def page():
    data = json.loads(request.data)
    for key, value in data['apis']['aylien'].iteritems():
        if value:
            print 'alyien has analysis: ', key
            #aylien = ctrl.aylien(key, data['text'])
    for key, value in data['apis']['bitext'].iteritems():
        if value:
            print 'bitext has analysis: ', key
            #bitext = ctrl.bitext(key, data['text'])
    for key, value in data['apis']['rosette'].iteritems():
        if value:
            print 'rosette has analysis: ', key
            #rosette = ctrl.rosette(key, ['text'])
    print 'aylien: ', aylien
    print 'bitext: ', bitext
    print 'rosette: ', rosette
    return 'yep', 200

app.run(host='127.0.0.1', port=8080, debug=True)
