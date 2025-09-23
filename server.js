require('dotenv').config();
const http = require('http');
const https = require('https');
const CryptoJS = require('crypto-js');


const PORT = process.env.PORT || 5600;
const KEY_ID = process.env.RAZORPAY_KEY_ID;
const KEY_SECRET= process.env.RAZORPAY_KEY_SECRET;


//ADD JSON FORMAT
function parsejson(req) {
    return new Promise((res,rej)=>{
        let d ='';
        req.on('data', c=> d +=c);
        req.on('end', ()=>{
            try {
                res(JSON.parse(d));
            } catch(e){
                rej(e);
            }
        });
        req.on('error',rej)
    });
}
//order create
function createorder(amountp) {
    return new Promise((resolve,reject)=>{
        const data = JSON.stringify({amount:amountp, currency:'INR',receipt:'rcpt_'+Date.now()});
        const auth = Buffer.from(`${KEY_ID}:{KEY_SECRET}`).toString('base64');

        const opts = {
            hostname:'api.razorpay.com',
            path:'/V1/orders',
            method:'POST',
            headers:{
            'Content-Type':'application/json',
            'Content-Length':Buffer.byteLength(data),
            'Authorization':'Basic' + auth
            }
        };
    })

}

