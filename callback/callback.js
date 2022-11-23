//simple function
function showmsg(name,callback){
    console.log(`Hi ${name}`);
    callback();
}

function demoCallBack(){
    console.log(`I am callback function`);
}

showmsg(`Hiren`,demoCallBack);