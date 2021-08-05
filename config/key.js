// db url 관련. 배포할 때는 그냥 지우고 환경변수로만 지정해도 될 듯.

import dev from './dev.js';
import prod from './prod.js';

function GetDbKey() {
    if (process.env.NODE_ENV === "production") {
        return prod;
    } else {
        return dev;
    }
}

const key = GetDbKey();
export default key;