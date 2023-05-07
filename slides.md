---
marp: true
theme: default
paginate: true
---

# NodeJS workshop
## what is nodeJS?
- open source, cross platform javascript runtime environment

https://nodejs.org/en/about
https://kinsta.com/knowledgebase/what-is-node-js/
https://roadmap.sh/nodejs

---


# why node JS
- build end-to-end js application
- async I/O operation
- huge community support
- linkedIn,netflix bla bla

---

# Tools
## NPM 
- manages packages(libraries)
## nodemon 
- watch file change


---
# workshop content
## built in modules
-path
-urls
-event
-filesystem
bla bla bla.....
## servers and databases
-http
-mongodb

---
# lets build
Chat app

io.on('connection', (socket) => {});
socket.emit('eventName',"message");
socket.on('eventName', (msg) => {});
socket.broadcast.emit('eventName',"message");

