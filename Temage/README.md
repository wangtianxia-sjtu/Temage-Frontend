# temage

> front-end part for se_100 and intel swc.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Mock Server

```bash
$ node mockserver.js
```

# Deploy

First you need build the project

```shell
npm run build # wait a minute
```

Then you will find the dist folder has static folder and index.html

copy the  dist folder into a Linux server or a docker container

add following code into nginx.conf(default in /etc/nginx)

```nginx
server {
	listen 7070; # listened port
	server_name swcontest; # server name
	root /usr/share/nginx/html/swcontest; # root dir
	index index.html;
	location / {
		try_files $uri $uri/ @router;
		index index.html;
	}
	location @router {
		rewrite ^.*$ /index.html last;
	}
}
```

then restart your nginx server(maybe command is `systemctl restart nginx.service`)