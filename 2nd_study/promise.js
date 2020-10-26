// promise
new Promise((resolve, reject) => {
    console.log(1)
    resolve()
}).then(() => {
    console.log(2)
})

//asyncn await
async function log(){
    //await는 순차적으로 실행
    await console.log(1)
    await console.log(2)
}

function log(){
    setTimeout(()=>{
        console.log(1)
    },1000)
    console.log(2)
}
log()