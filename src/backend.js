import axios from 'axios';

export function runCode(code,input){
    const postData = {
        code : window.btoa(code),
        stdin: window.btoa(input)
    };
    return axios({url:'http://dev.covariant.cn/cgi/cs-online',
            method:'POST',
            data:postData});
}