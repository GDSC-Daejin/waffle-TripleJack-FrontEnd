const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const MongoStore = require('connect-mongo');

const app = express(); // express 앱 생성
const PORT = 8080; // 서버 포트 번호

let db; // 데이터베이스 변수 선언

// MongoDB 연결 설정
const url = 'mongodb://eozkvnf:mnbvcxz098!@152.70.232.21:27017/carpool?directConnection=true&serverSelectionTimeoutMS=2000&authSource=user&appName=mongosh+2.1.4';
new MongoClient(url).connect().then((client)=>{
    console.log('DB연결성공')
    db = client.db('carpool')
    app.listen(PORT, () => {
        console.log(`Http://localhost:${PORT} 에서 서버 실행중 DB`)
    })
}).catch((err)=>{
    console.log(err)
})

// Middleware 설정
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // Redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // Redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // Redirect CSS bootstrap
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
    secret: '암호화에 쓸 비번',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 }, // 쿠키 유효시간 설정 (현 1시간)
    store: MongoStore.create({ mongoUrl: url, dbName: 'BlackJack' })
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport 로컬 전략 설정
passport.use(new LocalStrategy(async (username, password, done) => {
    let result = await db.collection('User').findOne({ username : username})
    if (!result) {
      return done(null, false, { message: '아이디 DB에 없음' })
    }
    if (await bcrypt.compare(password, result.password)) {
      return done(null, result)
    } else {
      return done(null, false, { message: '비번불일치' });
    }
}));

/* 키 발행 */
passport.serializeUser((user, done) => {
    process.nextTick(() => {
      done(null, { id: user._id, username: user.username })
    })
})

/* 키 해독 */
passport.deserializeUser( async (user, done) => {
    let result = await db.collection('User').findOne({_id : new ObjectId(user.id) })
    delete result.password
    process.nextTick(() => {
      return done(null, result)
    })
})

// 라우팅 설정
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.get('/', async (req, res) => {
    console.log(req.user)
    res.render('index.ejs');
});
