

const getTicket=function(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });
};

const showTicket=function(){
    return new Promise((resolve,reject)=>{
        resolve('that\' ticket');
    });
}

async function run(){
    await getTicket().then(r=>{
        console.log(r);
    });
    console.log('middle');
    showTicket().then(m=>{
        console.log(m);
    });
}
run();