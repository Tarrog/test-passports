import routes from '../routes.js';
import Users from '../models/User.js';
import passport from 'passport';

export const postRegister = async (req, res, next) => {
    
    // 요청 정보 추출
    const { name, email, password, password2, id, nickname } = req.body;

    if (password !== password2) {
        res.status(400);
        res.render('join', { pageTitle: 'Join' });
    } else {

        try {
            // email 을 가진 Users 객체 생성
            // Users.create() 하면 Users.register() 를 먹는다(?)
            const user = await Users({ email });

            // register 메소드는 local-mongoose 전용
            // Users.register(user 객체, password)
            await Users.register(user, password);

            // 로그인 처리를 위한 핸들러
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};


// passport.authencate 결과로 req.user 반환
export const postLogin = passport.authenticate('local', {
    successRedirect: routes.home,
    failureRedirect: routes.login
});

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}