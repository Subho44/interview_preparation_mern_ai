function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function run() {
    console.log("Start...");
    await delay(5000);
    console.log("5 sec por lekha dakhabe...");
    
}
run();