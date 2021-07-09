### Communicating between containers
###### class 03 (date 6th july, 2021)

- Every packet uses the network interface to get into any network enabled machine.
- Each packet has source port, source ip, destination port, destination ip, payload and more.
- If we have a packet that enters on port 8080, after entering the kernel namespace, it will use iptable's mapping to figure out the destination 
ip and port. For example, imagine one of our container is running on `172.13.0.3:80` (note, the ip is managed by docker), and ip table has mapped 
port `8080` to `172.13.0.3:80`. So our packet will go to `172.13.0.3:80` AKA to our container. 
- Every container creates an interface for that container's networking.
- `L2` bridge connects these container interfaces to our incoming traffic.
- `L2` bridge's network range is `172.13.0.0/16`. 
- Every container has it's own local IP.
- Docker container IP is configurable and can be set to a static IP but discouraged in most circumstances.
- `L2` switch's range is `172.13.0.0/16`. 
- When a container is created, it requests for a new IP to `L2 switch`. 
- `L2` has a table where it contains `mac address` and `ip`. A container's mac address will be the network interface's mac address.
- `L2`'s IP range is `(2 ^ (32 - 16)) - 1`. Which is around `65535` . 1 IP will be allocated to gateway.  
- Host `0.0.0.0`  or `127.0.0.1` means it will bind that specific interface. For example, for `127.0.0.1` it will use the loopback interface with that IP. 
- Socket is technically port to process mapping. For example, if we are running a node process on port 8080 with a process id of 1234 and a request comes to that interfaces with a destination port of 8080, the request will be sent to 1234 process. 


#### Services

We'll have two node js services. One of them is internal and another of them is external. We will only expose the external service to the public world.
external service will communicate with the internal service. The internal service will not be acciessable from the outer world.

- [External Service ](https://github.com/thearyanahmed/learning-docker/tree/master/class_03/external) 
- [Internal Service ](https://github.com/thearyanahmed/learning-docker/tree/master/class_03/internal) 

#### Architecture
![Service to Service Architecture](images/service_to_services_communication_architecture.png?raw=true "Service to Service Architecture")


#### CIDR
Coming soon
#### DHCP
Coming soon
##### Calculation 
Coming soon
##### Network 
Coming soon



