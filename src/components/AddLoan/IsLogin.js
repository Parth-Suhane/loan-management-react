const IsLogin =() => {
    var isLogin =false;
    if(localStorage.getItem("auth") != null)
    {
         isLogin =true;
    }
    return isLogin;
};

export default IsLogin;