function loginuser(username,password) {

    return new Promise((resolve,reject)=>{
        if(username ==="admin" && password ==="1234") {
            resolve("login sucessfully");
        } else {
            reject("invalid credential");
        }
    });
}
//async - await
async function login() {
    try {
        let res = await loginuser("admin","1234");
        console.log(res);
    } catch(err) {
        console.log(err);
    }
    
}
login();