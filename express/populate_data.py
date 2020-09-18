'''
    author: @realjema
    date: August 2020 
    description: This script is used to send data into a mongodb collection atlas
'''
import pymongo

# ****Be ware that your database won't be created until you insert the first data into a collection*****
myclient = pymongo.MongoClient("mongodb://127.0.0.1:27017/") # connect to local mongodb(yours might be different)
# myclient = pymongo.MongoClient("mongodb+srv://admin:neverSETTLE4anything!@nativenews.esbmn.mongodb.net/nativenews?retryWrites=true&w=majority") # connect to my cloud mongodb (password displayed!!!!)

DB_NAME = 'nativedb'                                    # database name
COLLECTION_NAME = 'finder_posts'                           # collection name
DATA_FILE = '_finder_data.json'                         # file containing data

mydb = myclient[DB_NAME]                                # checks/creates database (upated <nativenews> with your db name)
mycol = mydb[COLLECTION_NAME]                           # checks/creates collection in mydb (updated <posts> with your collection name)

# values to be inserted in the collection are stored as json 
import json 
dataList = ''

# open data file and import data as json
with open(DATA_FILE, 'r', encoding="utf8") as data:
    dataList = json.load(data)

# inserting into collection
# we loop through all the values in the array 
# we can do this with a bulk upload (still to learn that)
i = 1
for value in dataList:
    mycol.insert_one(value)
    i = i + 1

print(i, " Values added")

# printing details   
dblist = myclient.list_database_names()
collist = mydb.list_collection_names()
# print(dblist)
# print(collist)

# checks for debugging purposes 
if DB_NAME in dblist:
    print("The database exists")

# (make sure to update <posts> here)
if COLLECTION_NAME in collist:
    print("The collection exist")

'''
# find all elements for confirmation 
import pprint # used to display json in a clear format 
for x in mycol.find():
    pprint.pprint(x)
    print('\n\n')
'''
