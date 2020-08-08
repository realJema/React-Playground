import flask
from flask import request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson.json_util import dumps

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

# configuring pymongo
app.config["MONGO_URI"] = "mongodb://127.0.0.1:27017/finderDB"
mongo = PyMongo(app)

def getFinderData(limit, last_value):
    '''
    Get data from mongodb database 
    '''
    data = mongo.db.posts.find().skip(last_value).limit(limit)

    return dumps(data) 

def searchFinderData(values):
    '''
    Get data from mongodb database 
    '''
    import re
    regx = re.compile(values, re.IGNORECASE)
    myquery = {"title" : { "$regex": regx}}
    data = mongo.db.posts.find(myquery)

    return dumps(data) # dumps converts data to json


@app.route('/playground/api', methods=['GET'])
def home():
    return 'Welcome! This is realJema\'s playground api'


'''
Routes for the Finder App
'''
@app.route('/playground/api/finder/data', methods=['POST'])
def finder_data():
    '''
    Finder app data. Returns the data for the finder app
    '''
    # print date and time of fetch 
    from datetime import datetime
    now = datetime.now()
    print('[Data Fetch] : ', now.strftime("[%d/%m/%Y %H:%M:%S]"))

    search_values = request.json['params']
    return getFinderData(search_values['limit'], search_values['last_value']), 200

@app.route('/playground/api/finder/search', methods=['POST'])
def search_data():
    '''
    Finder app data. Returns the data for the finder app
    '''
    # print date and time of fetch 
    from datetime import datetime
    now = datetime.now()
    print('[Data Search] : ', now.strftime("[%d/%m/%Y %H:%M:%S]"))
    search_values = request.json['params']['values']

    return searchFinderData(search_values), 200

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

app.run()