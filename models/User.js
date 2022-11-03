const mongoose = require('mongoose');

//user 스키마 생성
const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email:{
        type: String,
        trim: true, //공백제거
        unique: 1   //유니크한 값으로 설정
    },
    password:{
        type: String,
        maxlength: 50
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{ //토큰 유효 기간
        type:Number
    }
})

//모델 생성
const User = mongoose.model('User', userSchema);

//외부에서 사용가능하도록 export
module.exports = {User}

