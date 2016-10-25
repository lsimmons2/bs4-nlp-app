from flask import Flask, render_template, request, make_response
import requests
import bs4
import ctrl
import json


app = Flask('app')


@app.route('/')
@app.route('/apis')
def index(**kwargs):
    #return render_template('index.html')
    return make_response(open('templates/index.html').read())


@app.route('/aylien', methods=['GET', 'POST'])
def aylien():
    data = json.loads(request.data)
    resp = {}
    for key, value in data['analysis'].iteritems():
        if value:
            resp[key] = ctrl.aylien(str(key), str(data['text']))
    return json.dumps(resp), 200


@app.route('/bitext', methods=['GET', 'POST'])
def bitext():
    data = json.loads(request.data)
    resp = {}
    for key, value in data['analysis'].iteritems():
        if value:
            resp[key] = ctrl.aylien(str(key), str(data['text']))
    return json.dumps(resp), 200


@app.route('/rosette', methods=['GET', 'POST'])
def rosette():
    data = json.loads(request.data)
    resp = {}
    for key, value in data['analysis'].iteritems():
        if value:
            resp[key] = ctrl.aylien(str(key), str(data['text']))
    return json.dumps(resp), 200


app.run(host='127.0.0.1', port=9000, debug=True)
