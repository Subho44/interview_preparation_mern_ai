function uploadFile(file) {
    //req send done
    return new Promise(resolve => {
        //logic js programing
     setTimeout(()=>resolve(`${file} uploaded`), 3000);
    });
}

async function upload() {
  //recive req data
  console.log(await uploadFile("img.jpg"))
}
upload();