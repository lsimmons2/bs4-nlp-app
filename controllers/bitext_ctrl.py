import requests
import json
import sys


config_file = open('../config.json', 'r')
config = json.loads(config_file.read())
config_file.close()


'''
first arg corresponding to endpoint can be:
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
    return resp.text

print bitext(sys.argv[1], 'The owls are not what they seem')
