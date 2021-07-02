### Building a docker image
###### class 02 (date 29th june, 2021)

### Building a docker image

- Docker has a layered file system. 
- Docker images are downloaded from docker hub. But 3rd party registries are also available and can be specified while downloading/uploading the image.
- While building, docker will first look for the image locally, if it's absent it will downloaded from the desired registry.
- [Docker documentations link](https://docs.docker.com)
- Usecase of `FROM`: `FROM $imageName` FROM is used with a value `imageName`. Docker will try to find the image with `$imageName` locally. If abset, docker will download the image from the registry.
- Docker images are based on another image, the most root image is known as `Scratch`. It is a minimal version of linux. It is also the root or most lowest image for dockers.
- Custom docker image can be crafted and built on top of other images. Using `FROM $customImageName` and desired commands and programs. It acts like `inheritance` of OOP concept.
- We can use docker containers just like other linux distrobutions.
- We can build a docker image by `docker build -t $tag $context` eg : `docker build -t shajalahmedcse/ubuntu-nginx .`  
- To run a docker image `docker run $imageName $flags(optional)` eg: `docker run shajalahmedcse/ubuntu-nginx -p 8080:80`
- `-p` flag stands for `port`. It can be used as `-p $map:$to` . eg `-p 8080:80` . Port mapping is always from:to, or you can say `outsideContainer:toInsideContainer`. Imaging on your local machine, you are running an app that servers on port 8000. You could visit that app using `localhost:8000`. Now, in context of containers, say we are running an app on port 8000 inside the container, and from the outside
we want it to be available on port `3344`. That would translate to `-p 3344:8000`. After running with `-p 3344:8000` we can access that app using `localhost:3344` from outside the container, and from inside we'll use `localhost:8000`.
- With `CMD` we can run a command from that layer of the container. The command runs as follows, `CMD [options...]` You can think of it as calling a program to run. For example, say I have nginx installed on my container and want to run it. I can run `CMD ["nginx","-g","daemon off;"]`. It will run the app on non-daemon mode.
- Images needs to be rebuilt if changed in the dockerfile itself. But if we are using docker compose and change the docker compose file, we don't need to recreate the image.
- Running a docker container makes it a process (that is running while the container is running, active or inactive unless stopped).
- Every docker container needs at least one running process that keeps the container alive. Else, it will quit and exit the container.
- To view the running containers you can type `docker ps`.
- `COPY` command signature `COPY $from $to`. **Note** `$from` is on your system directory, `$to` is inside the container. eg: `COPY . /var/ww/html` will copy everything from current directory to `/var/www/html` inside the container.
- A debugging trick would be to use `CMD ["sleep", "300"]`. It will run the sleep command with a parameter of 300 (in seconds).
- Executing something on the container from the outside: `docker exec $containerID $programName --$flags(optionals)` . eg: `docker exec -it $containerID sh`. It will run the `sh` (think of running bash) command inside the container identified by `$containerID` . `-it`, these are flags.
- While building docker images, it will cache the layers and will be used next time when we are rebuilding, if a layer was unchanged, docker will take it from the cache and build only the new / changed layers. Saving us tons of time.
- To stop a container, run `docker stop $containerIdOrName`. Full id is not necessary, first 2-3 letters that is unique is more than enough.

### Running nginx on docker

##### Files 
- [Dockerfile](https://github.com/thearyanahmed/learning-docker/tree/master/class_02/Dockerfile) 
- [index.html](https://github.com/thearyanahmed/learning-docker/tree/master/class_02/index.html)

##### How to run 
- run `docker run -p 8080:80 $imageName` . In my case, the image name is `thearyanahmed/ubu-nginx`. So the command will be `docker run -p 8080:80 thearyanahmed/ubu-nginx`  

Output should 

![Running nginx using docker](screenshot.png?raw=true "Running nginx using docker")




