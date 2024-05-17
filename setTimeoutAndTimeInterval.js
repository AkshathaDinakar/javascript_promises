const one = () =>{
    setInterval( ()=>{
        // set interval will reload every time that we assign
        // console.log("Timeout is Done")    
    },1000)
    console.log("one")

}
const Two = () =>{
    setTimeout(()=>{
        // timeout will wait for the time that we assign
        console.log("Time out is done")
    },1000)
    console.log("Two")
}
const Three = () =>{
    console.log("Three")
}

one()
Two()
Three()