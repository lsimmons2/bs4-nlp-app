import requests
import json
import sys

config_file = open('../config.json', 'r')
config = json.loads(config_file.read())
config_file.close()

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
    print resp.text


rosette('entities', 'I\'m a man and I eat an apple then I walk a dog then I eat an apple then I sleep and I live in Boston and I code')
