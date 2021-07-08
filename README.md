# FieldTrip

Field Trip acts as a science learning resource hub and provides users with an opportunity to explore their world through a customized and accessible platform. Field Trippers can explore a variety of scientific topics to collect stamps on their passport, and work towards meeting daily challenges. Topics include Space, Earth, Natural History, and General Science. The user may customize their experience by selecting customized themes and saving resources. Users may also upload their travel photos and discoveries to the Community Photo Board to show other Field Trippers what they’ve been up to. We believe in free and open access to information. This is your Field Trip, take it wherever you want, no permission slip necessary.

# Contributers

Christopher Golizio
Zachary Hester
Sarah St.Ores

# Install and Set Up

## Tech Stack - MERN

1. MongoDB/Mongoose (/5.10.15)
2. Express Server (4.17.1)
3. React (17.0.1)
4. NodeJS (8.17.0)
5. Passport/Google OAuth (0.4.1 / 2.0.0)
## Project Setup

This section will discuss what is needed to get the project up and running on your local machine.
## APIs

1. News ([News API Docs](https://newsapi.org/docs) )
2. Smithsonian ([Smithsonian API Docs](https://www.si.edu/openaccess))
3. NASA ([NASA API Docs](https://ssd-api.jpl.nasa.gov/doc/index.php) )
### What to Add to Your .env

1. In the Google Developers Console, generate a CLIENT ID and CLIENT SECRET.
2. Lastly, visit [MongoDBs Cloud Atlas](https://www.mongodb.com/cloud/atlas), create a free account, and auto-generate a secure password.
3. Go to [Cloudinary](https://cloudinary.com/console), set up a free account, and you will be provided with details including cloud name, API Key, API Secret, API Environment variable.
4. API Keys for APIs above

### Scripts to Run

```
npm install - to install all dependencies
```

```
npm run build - runs webpack and creates your build
```

```
npm start - starts up the server
```
# DB Schema

Type field name in the resource collections (doc, news) refers to what category it belongs to (Space, Earth, NatSci).

# Stamps

Stamps are logged in the stamps array on the User schema. A stamp function grabs an image from the image field name in the corresponding collection (Space, Earth, NatScience) and logs it to the user's passport.
