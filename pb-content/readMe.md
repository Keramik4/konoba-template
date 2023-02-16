TO create backup:

pb_data -> never change anything here. It's a backup folder for content from pocketbase

Get container ID:
docker container ls
Use it to copy pb-data
docker cp <containerId>:/pb_data/. ./pb-content/pb_data
