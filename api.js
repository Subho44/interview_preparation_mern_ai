//API HANDELLING (PROMISE ASYNC/AWAIT)

//PROMISE

fetch("https://jsonplaceholder.typicode.com/posts")
     .then(res=>res.json())
     .then(data => console.log("Data:",data))
     .catch(err => console.log("Error:",err));

//async/await

async function getposts() {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        console.log("data:",data);
    } catch(err) {
        console.log("error:",err);
    }
    
}
getposts();

