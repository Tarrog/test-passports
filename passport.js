import passport from 'passport';
import Users from './models/User.js';

// 로컬 startegy 생성(스킵)
passport.use(Users.createStrategy());


// // 세션에 users 식별자 저장. 아마 email or id 가 디폴트
// passport.serializeUser(Users.serializeUser());

// // 세션의 식별자와 DB 데이터 조회.
// passport.deserializeUser(Users.deserializeUser());

passport.serializeUser(function(user, done) {
    done(null,user);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user) {
        done(err, user);
    });
});