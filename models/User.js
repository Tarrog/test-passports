import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
    studentId: Number,
    rule: String,
    avatarUrl: String,

    // 관심분야
    privateInterest: String,
    
    // 개인 깃헙, 블로그 주소
    privateGitUrl: String,
    privateBlogUrl: String,

    // 자기소개
    privateAbout: {
        type: String,
        maxlength: 500
    },
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        requried: true,
        minlength: 6
    }
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

const users = mongoose.model('users', userSchema);
export default users;