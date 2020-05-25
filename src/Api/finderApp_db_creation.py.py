import pymongo

'''
Creating a database
'''
# ****Be ware that your database won't be created until you insert the first data into a collection*****
myclient = pymongo.MongoClient("mongodb://127.0.0.1:27017/") # connect to local mongodb(yours might be different)

mydb = myclient["finderDB"] # creates database 
mycol = mydb["posts"] # create collection in mydb

# Variables holding data   
data = [
  {
        "date": {
          "day": "1",
          "month": "Lun",
        },
        "img": "img.JPG",
        "category": "Garden",
        "title": "These are the Garden Ligts",
        "sub_title": "The beauty of nature",
        "description": "There are beautiful gardens in the world and this is one of them."
      
      },
    {
        "date": {
          "day": "17",
          "month": "Mar",
        },
        "img": "img.JPG",
        "category": "Tech",
        "title": "Technology Innovations",
        "sub_title": "The future of IT.",
        "description": "Computers are taking over the world and this trend is not stopping anytime soon."
      
      },
    {
        "date": {
          "day": "30",
          "month": "Fri",
        },
        "img": "img.JPG",
        "category": "Music",
        "title": "The Sound of Silence",
        "sub_title": "Music which speaks to the soul",
        "description": "The feeling you get when you listen to this sound could shake you to your very core."
      
      }
]

# inserting into collection
x = mycol.insert_many(data)

# printing details   
collist = mydb.list_collection_names()

if "posts" in collist:
    print("database 'finderdb' and collection 'posts' created!")
    for x in mycol.find():
        print(x)
else:
    print('Unable to create database. Ensure mongodb is running ')

