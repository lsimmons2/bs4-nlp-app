import requests
import json
import sys

config_file = open('./config.json', 'r')
config = json.loads(config_file.read())
config_file.close()


'''
first arg corresponds to endpoint and can be:
- classify
- sentiment
- concepts
- entities
- summarize
- image-tags
- hashtags
- related (related phrases)
- unsupervised (semantic labeling)
'''
def aylien(analysis, data):
    if type(analysis) != str:
        return 'analysis arg needs to be of type str'
    if type(data) != str:
        return 'data arg needs to be of type dict'
    url = 'https://api.aylien.com/api/v1/' + analysis
    headers = config['alyien']['headers']
    data = {
        'text': data
    }
    resp = requests.post(url, headers=headers, data=data)
    print resp
    return resp.text


'''
first arg corresponds to endpoint can be:
- sentiment
- concepts
- entities
'''
def bitext(analysis, text):
    if type(analysis) != str or type(text) != str:
        return 'analysis and text args need to be of type str'
    arg_options = ['sentiment', 'concepts', 'entities']
    if analysis not in arg_options:
        return 'analysis needs to be \'sentiment\' \'concepts\' or \'entities\''
    url = 'https://svc02.api.bitext.com/' + analysis
    params = {
        'language': 'eng',
        'text': text
    }
    resp = requests.post(url, headers=config['bitext']['headers'], data=json.dumps(params))
    print resp
    return resp.text


'''
first arg corresponds to endpoint can be:
entities
relationships
categories
sentiment
'''
def rosette(analysis, data):
    if type(analysis) != str:
        return 'analysis arg needs to be of type str'
    if type(data) != str:
        return 'data arg needs to be of type dict'
    url = 'https://api.rosette.com/rest/v1/%s' % analysis
    headers = config['rosette']['headers']
    data = json.dumps({
        'content': data
    })
    resp = requests.post(url, headers=headers, data=data)
    print resp
    return resp.text
