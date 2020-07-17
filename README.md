# ExpressJS 시작하기
npm install --save express

### 템플릿 엔진

npm install --save jade 

```js

// 템플릿 엔진이 어느 디렉토리에 있는지
// app.set('views','./templats');
app.set('views','./views');

// 어떤 템플릿 엔진을 사용하는지(jade)
app.set('view engine','jade');
```

<!-- supervisor -->
동적인 소스코드가 수정이 되면 수동으로 재실행하지 않아도
반영해준다.

### query string

+ http://a.com/topic?id=1

+ ?뒤에 있는 문자열


## 시멘틱 URL

+  쿼리스트링을 사용하지 않고 
+ /topic/1 이런식으로 사용