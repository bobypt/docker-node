# Docker node demo
Simple demo node app - docker example

## Build project

 ```npm install```

 ## Start app
 ```npm start```

 Application will start locally and listen on port 8080.

 ## Test
 ```curl localhost:8080/info```

 and health
 ```curl localhost:8080/health```

 ## Build docker image
```docker build -t node-app .```

## Start a container
```docker run -p 8080:8080 --name api-server -t node-app```

## Stop the server
```docker rm -f api-server```

