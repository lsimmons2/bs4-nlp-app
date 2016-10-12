def meaning_cloud():
    base = 'https://api.meaningcloud.com/topics-2.0?'
    key = 'key=' + config['meaningcloud']['key']
    misc = '&of=json&lang=en&ilang=en&tt=a&uw=y'
    text = '&txt=Robert%20Downey%20Jr%20has%20topped%20Forbes%20magazine%27s%20annual%20list%20of%20the%20highest%20paid%20actors%20for%20the%20second%20year%20in%20a%20row.%20The%2049-year-old%20star%20of%20the%20Iron%20Man%20and%20Avengers%20films%20made%20an%20estimated%20%2475m%20over%20the%20past%20year%2C%20beating%20rivals%20Dwayne%20Johnson%2C%20Bradley%20Cooper%2C%20Chris%20Hemsworth%20and%20Leonardo%20DiCaprio.'
    url = base + key + misc + text
    resp = requests.post(url)
    file = open('./responses/meaning-cloud/output.json', 'w')
    file.write((resp.text).encode('utf-8'))
    file.close()
