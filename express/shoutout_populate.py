'''
    author: @realjema
    date: August 2020 
    description: This script is used to send data into a mongodb collection atlas
'''
import pymongo

# ****Be ware that your database won't be created until you insert the first data into a collection*****
myclient = pymongo.MongoClient("mongodb://127.0.0.1:27017/") # connect to local mongodb(yours might be different)
# myclient = pymongo.MongoClient("mongodb+srv://admin:neverSETTLE4anything!@nativenews.esbmn.mongodb.net/nativenews?retryWrites=true&w=majority") # connect to my cloud mongodb (password displayed!!!!)

mydb = myclient["nativedb"] # checks/creates database (upated <nativenews> with your db name)
mycol = mydb["test"] # checks/creates collection in mydb (updated <posts> with your collection name)

# values to be inserted in the collection are stored as json 
dataList = [
    {
        "title": "Toledo, Spain",
        "img": "https://e3.365dm.com/20/08/1600x900/skynews-beirut-lebanon-explosion_5058417.jpg?bypass-service-worker&20200805014306",
        "sub_title": "Also know as The Imperial City",
        "description": "It takes a very hardened sort of individual not to feel and empathise with the pain of new parents sitting outside the Intensive Care Unit where their little one is struggling to live. She's only four days old, her father, George Ajoury, told us.I was breastfeeding her, Nelly Ajoury, her mother explained. \"I tried my best to protect her but I just couldn't.\" Mrs Ajoury has a broken nose and stitches in her arms, legs, thighs and forehead from the shards of glass which have pierced her skin multiple times. Her little newborn daughter Sophie looks like a bundle of vulnerability. She has a large bandage wrapped round her head and is being monitored in an incubator whilst doctors decide what the best course of treatment for her is. They fear she'll need surgery to relieve the pressure on her brain caused by swelling and bleeding. \"We just hope she's okay,\" says her tearful mother. \"We just want her to be okay. We're not leaving without her.\"",
        "category": "world",
        "likes": 10,
        "author": "Alex Crawford Special correspondent @AlexCrawfordSky",
        "location": "beirut",
        "date": {
            "day": 6,
            "month": "August",
        }
    },
]

# inserting into collection
# we loop through all the values in the array 
# we can do this with a bulk upload (still to learn that)
i = 1
for value in dataList:
    mycol.insert_one(value)
    print('------------- +', i)
    i = i + 1

# printing details   
dblist = myclient.list_database_names()
collist = mydb.list_collection_names()
print(dblist)
print(collist)

# checks for debugging purposes 
# (make sure to update <nativenes> here)
if "nativedb" in dblist:
    print("The database exists")

# (make sure to update <posts> here)
if "shoutout" in collist:
    print("The collection exist")

# displaying all the values in the collection 
print('\nFind All' +'_'*50)
# find all elements 
import pprint # used to display json in a clear format 
for x in mycol.find():
    pprint.pprint(x)
    print('\n\n')
