### Docker basic [networking & dockerfile]
###### class 01

Objectives:
    - To learn about docker file
    - To learn about docker basic networking

- Kernel is a resource manager. 
- Any software is a process that makes a request to the kernel to get resources via `syscall`.
- Applications run on user space. 
- Kernel is written and maintained by specific community or companies.
- User space applications are depended on an abstraction to communiacte with the kernel. 
- A network packet is passed to the kernel from the hardware. 
- NIC or Network Interface Card sends the network packets to the kernel from the hardware.

- DHCP stands for Dynamic Host Control Protocol.
- A L2 device or switch uses DHCP to assign IPs to connected devices.
- DHCP maintains a CAM table that has a map of Mac Address of each devices and an IP using DHCP. It is known as DHCP.
- An IPv4 address is 32 bit (max).
- CAM stands for `Content Addressable Memory`.
- CIDR stands for `Classless InterDomain Routing`.
- Imagine we have an CIDR block of `171.17.0.0/16`. Each of the blocks or itesm before each dot is 8 bits each.
- In this CIDR block, our network prefix is `171.17` . So each IP ( allocated to each device by DHCP ) will have a prefix of `171.17`. 
- Hypervisor allocates a portion of the physical resources and enables users to virtualization.

#### Request Flow
Imagine you run the command `ping 8.8.8.8`. This is an IP of google's name server.
- At first, it will look for this ip in our `vhosts`. If it finds a matching record, it will send the request to that address.
- If it doesn't, the request will go through your `NIC` to your L2 switch.
- The L2 switch will also look for the IP in its records if its in the CIDR block. If it can find it, the request will be sent to that address.
- If L2 can't find it in its record, it will send the request to the internet between gateway.

**Note**: This is a very simplified version of whats happening.

#### Docker
Docker is a containerization tool, that builds up to a single binary with the necessary code/library and other components to run that program.

Container is process, that is self contained process. It has all the components like filesystem, networks, processes etc.

**Note**
A common miss-conception is docker container replaces VMs (virtual machines). This is not completely true.


Docker helps maintain our apps easily. Here is in real life scenario. 
Imaging we have a server that has 64 GB ram and say 16 core CPU. 

We want to run the following apps, 1 node v5 app, 2 node v6 apps, 1 node 7 app. If we want to do it, we'll likely to fall into a problem, we'll need different systes maintain these.

Yes we can install multiple versions of node but it will be really hard to maintain. Imagine we have node v6 for 2 apps, 1 of them needs to upgrade to v10. So, do we upgrade directly? or Install another one?

This is what a typical deployment look like, 


![A typical server setup](images/a_typical_server_setup.png?raw=true "A typical server setup")

We see, we have our hardware, above that we have our OS, above that we have our hypervisor where our VMs are running. Each VM has an operating system. Each operating contains our apps. 

#### Docker components
Docker creates an `docker image` from the instructions set in `dockerfile`.

A `Dockerfile` defines how our container will be, what programs and libraries to run. 

Imagine you are installing an linux based os but specifying which applications to run, which folders to create.

`Docker image` is the final output of the dockerfile. A docker image is a single binary output of the instructions.

**A dockerfile and a docker image has a relationship like Class and Object (from OOP concept). Dockerfile is the class, docker image is the object.**

`Docker compose` is a tool to manage our containers bit more easily.

`Docker machine` is the tool that lets us install docker engine on virtual hosts and manage the hosts with `docker-machine` commands.

`dockerd` or `docker deamon` or `dd` for short is a server like program. Not the servers we use in web applications. Docker uses a `client-server` architecture where the commands we run using the docker cli like `docker run hello-world` , we ran it as a client, where `dockerd` is our server actually spinning the wheels under the hood.
