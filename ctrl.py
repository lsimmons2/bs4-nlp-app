import requests
import json


configFile = open('./config.json', 'r')
config = json.loads(configFile.read())
configFile.close()


headers = config['alyien']['headers']
data = {
    'text': 'I will never give up on soccer or apples'
}
resp = requests.post('https://api.aylien.com/api/v1/classify', headers=headers, data=data)


file = open('./responses/alyien/output.json', 'w')
file.write(resp.text)
file.close()
