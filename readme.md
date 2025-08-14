# Steps to Create a Sample Node.js Express App and Dockerize It

## 1. Initialize Node.js Project


## 10. Create & Use Volumes with Containers

Volumes allow you to persist data or share files between your host and the container.

### Create a Volume

```bash
docker volume create devimage_data
```


#### Example: Mounting a Host Directory

To mount your local project directory as a volume inside the container, use:

```bash
docker run --name docker-image -p 3000:3000 --rm -v "C:/Users/joshi/Desktop/DevImage:/app" docker-first-image
```

This command mounts `C:/Users/joshi/Desktop/DevImage` from your host to `/app` inside the container, allowing changes to be reflected between your host and the running container.



```bash
docker run -p 3000:3000 -v devimage_data:/usr/src/app/data sample-docker-express-app
```

### Verify Volume Usage

List volumes:

```bash
docker volume ls
```

Inspect volume:

```bash
docker volume inspect devimage_data
```

mkdir DevImage
cd DevImage
npm init -y
```

## 2. Install Express

```bash
npm install express
```

## 3. Create `index.js`

```js
// app.js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## 4. Update `package.json` Scripts

```json
"scripts": {
    "start": "node app.js"
}
```

## 5. Create `.dockerignore` File

```
node_modules
npm-debug.log
.git
```

## 6. Create `Dockerfile`

```Dockerfile
# Use official Node.js image
FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

## 7. Build Docker Image

```bash
docker build -t sample-docker-express-app .
```

## 8. Run Docker Container

```bash
docker run -p 3000:3000 sample-docker-express-app
```

## 9. Access the App

- **From Local Device Terminal:**  
   Open browser and visit [http://localhost:3000](http://localhost:3000)

- **From Inside Docker Container:**  
   Attach to the running container:
  ```bash
  docker exec -it <container_id> /bin/sh
  curl http://localhost:3000
  ```

## Summary

1. Initialize Node.js project and install Express.
2. Create app file and update scripts.
3. Add `.dockerignore` to reduce image size.
4. Write `Dockerfile`.
5. Build and run Docker image.
6. Access app from browser and inside container.
