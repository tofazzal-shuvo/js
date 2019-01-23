getUser(2);


function getRepositories(param,callback){
    console.log(param);
    setTimeout(() => {
        callback(['rep1','rep2','rep3']);
    }, 2000);
}
function getCommits(param){
    console.log(param);
}
function getUser(id){
    setTimeout(() => {
        getRepositories({id:id, name:'tofazzal'},getCommits);
    }, 2000);
}