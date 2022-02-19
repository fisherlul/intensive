register(){
    const form = document.querySelector('form.form-signin');
    const account = form.account.value;
    const password = form.password.value;
    const repassword = form.repassword.value;
    try {
        if(password != repassword) throw new Error ("Không khớp mạt khẩu")
        if(!account) throw new Error ("Nhầm tài khoản")
    } catch (error) {
        console.log(error.message);
    }
}