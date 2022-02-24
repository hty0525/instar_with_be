const getCookie = (name) => {
    // 쿠키 값을 가져옵니다.
    // 앞에 ;를 붙여주는 이유는 맨 앞에 값은 ;이 없어서 스플릿이 안돼 ㅠ
    let value = ";" + document.cookie

    // 키 값을 기준으로 파싱합니다.
    let parts = value.split(";" + name + "=");
    // value를 return!
    if (parts.length === 2) {
        return parts
            .pop() //; 기준으로 맨앞거랑
            .split(";") 
            .shift();//맨뒤에거 빼줘~
    }
};

// 쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {//exp 몇일뒤에 삭제시킬지
    let date = new Date();
    // 날짜를 만들어줍니다.
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    // 저장!
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// 만료일을 예전으로 설정해 쿠키를 지웁니다.
const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

export {
    getCookie,
    setCookie,
    deleteCookie
};