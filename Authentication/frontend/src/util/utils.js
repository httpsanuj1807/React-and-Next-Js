export function getAuthToken(){
    return JSON.parse(localStorage.getItem('token'));
}

export function loadToken(){
    return getAuthToken();
}