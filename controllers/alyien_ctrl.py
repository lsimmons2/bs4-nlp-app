import requests
import json
import sys


config_file = open('../config.json', 'r')
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
def alyien(analysis, data):
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
    file = open('../responses/alyien/output.json', 'w')
    file.write(resp.text)
    file.close()
    return resp.text


print alyien(sys.argv[1], {'text': 'The owls are not be what they seem'})
