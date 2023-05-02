const url=require('url');

const myUrl=new URL('http://www.mywebsite.com:8080/login.html?id=123443&status=active');

console.log("full url: "+myUrl.href);

console.log("host name: "+myUrl.host);

console.log("path name: "+myUrl.pathname);

console.log("serialized query: "+myUrl.search);

console.log("params objects: "+myUrl.searchParams);

console.log("added params :"+myUrl.searchParams.append('abc',123));

console.log("new params: "+myUrl.searchParams);

//loop on params
 myUrl.searchParams.forEach((name,value)=>{
    console.log(`${value}:${name}`);
 });

