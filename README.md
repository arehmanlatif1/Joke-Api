![joke](/Postman-SS/joke-see-sharp.jpg)

# Joke-Api
Welcome to the Joke API, your go-to source for laughter and humor! This API provides a collection of jokes and humorous content that you can integrate into your applications, websites, or projects. Lighten the mood, engage your users, or simply enjoy a good laugh with the Joke API.

## Worked with

- Node
- Mongoose
- Express
- MongoDB
- Router
- fetch

### Seeding Data

I have provided you one JSON data: [`data.json`](./seed/data.json).  

Model represent the jokes inside of `data.json`.

### API 

My database is now setup, so its time to build an API around it.


### Routes 

1. A route (`'/api'`) that tells the server API routes is working.

 ![Get-API](/Postman-SS/:api.png)

2. A route (`'/api/jokes'`) that redirects to Jokes routes.

![db.jokes.find](/Postman-SS/Get-Jokes.png)

3. A route to GET(findById) (`'/api/jokes/:id'`) that find the Joke by its ID.

![db.jokes.findById](/Postman-SS/Get-By-Id.png)

4. A route to POST(`'/api/jokes/:id'`) that find the joke and make a update.

![POST-Joke](/Postman-SS/Post.png)

5. A route to Delete(`'/api/jokes/:id'`) that find a joke by its ID and Delete.

![Delete-Joke](/Postman-SS/delete.png)