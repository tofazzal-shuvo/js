const getUser= function(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({id: id, gitUserName: 'tofazzal-shuvo'});
        },2000);
    });
};

const getRepositories= function(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['rep1', 'rep2', 'rep3']);
        }, 2000);
    });
};

const getCommits= function(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['commit1','commit2','commit3']);
        }, 2000);
    });
}

getUser(2).then(result=>{
    console.log(result);
    return getRepositories();
}).then(result=>{
    console.log(result);
    return getCommits();
}).then((result)=>{
    console.log(result);
});