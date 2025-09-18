function send(msg) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Message send:${msg}`), 2000);
    });
}
async function chat() {
    let message = ["hi","how r u?","wt r u ding?","ki krcho?"];

      let ressult = await Promise.all(message.map(m=>send(m)));
      ressult.forEach(res=>console.log(res));

}
chat();