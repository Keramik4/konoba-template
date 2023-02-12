TO create backup:

Get container ID:
docker container ls
Use it to copy pb-data
docker cp <containerId>:/pb_data /pb-content/pb_data
