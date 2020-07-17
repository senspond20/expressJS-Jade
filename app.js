const express = require('express');
const app = express();

app.set('views','./views');
app.set('view engine','jade');
app.use(express.static('public'));
app.get('/template',function(req,res){
    res.render('temp',{time:new Date()});
});

const port = 3000;

app.get('/topic',function(req,res){
    var topics= [
        'javascript is ...',
        'Nodejs is ...',
        'Express is ...'
    ]
    var output =`
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">NodeJs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
    `
    res.send(output);
});
app.get('/topic2/:id',function(req,res){
    res.send(req.params.id);
});
app.get('/param/:module_id/:topic_id',function(req,res){
    res.json(req.params);
});

// 정적인 파일과 동적인 것을 로딩할때 다른점
app.get('/route',function(req,res){
    res.send(`Hello Router', <img src="/route.png" alt="사진">`);
});
app.get('/daynamic',function(req,res){
    var lis ='';
    for(var i=0; i<5; i++){
        lis = lis +'<li>coding</li>';
    }
    var time = Date();
    const output = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        안녕하세요.
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>
   `;
    res.send(output);
});


// 라우터, 라우팅...
app.get('/do',(req,res) => res.send('Hello Do!'));
app.get('/',(req,res) => res.send('Hello World!'));
app.get('/login',function(req,res){
    res.send('Login please');
});
app.listen(port,() => console.log(`Example app listenling at http://localhost:${port}`));