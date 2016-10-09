import requests
import json


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
def alyien(analysis, data):
    if type(analysis) != str:
        return 'analysis arg needs to be of type str'
    if type(data) != dict:
        return 'data arg needs to be of type dict'
    if 'text' not in data and 'url' not in data:
        return 'data arg needs to have \'text\' or \'url\' field'
    headers = config['alyien']['headers']
    url = 'https://api.aylien.com/api/v1/' + analysis
    resp = requests.post(url, headers=headers, data=data)
    file = open('./responses/alyien/output.json', 'w')
    file.write(resp.text)
    file.close()
    return resp.text


print alyien('sentiment', {'text': 'The owls are not what they seem'})
