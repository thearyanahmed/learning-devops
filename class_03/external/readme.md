### Running this application 

Run the following commands 

- `npm i`
- `docker build -t c3:external .`
- `docker run -p 8081:8081 -v $(pwd)/:/usr/src/app c3:external`

This will run the app on localhost port 8081. 

To test this, 

`curl http://localhost:8081` 

You will get the response "External service"

To get container ip 

```docker inspect $containerNameOrID | grep IPAddress```