async function getdata() {
    let [posts,users] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()),
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()),
    ]);
    console.log("Posts:",posts.length, "Users:",users.length);
    
}
getdata();