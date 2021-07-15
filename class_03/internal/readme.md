### Running this application 

Run the following commands 

- `npm i`
- `docker build -t c3:internal .`
- `docker run -v $(pwd)/:/usr/src/app c3:internal`

This will run the app on port 8000 but it is a internal service thus it can only be accessed by it's IP address.

To get container ip 

```docker inspect $containerNameOrID | grep IPAddress```
