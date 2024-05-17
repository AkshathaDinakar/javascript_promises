const One = () =>{
    return "one"
}

const Two = () =>{
    return new Promise( (resolve, reject) =>{

    setTimeout( ()=>{
        resolve("Two") 
    },3000)
    })
    
}

const Three = () =>{
    return "Three"
}


const callingFunction = async ()=>{
    let first = One()
    console.log(first)

    let second =await Two()
    console.log(second)

    let Third = Three()
    console.log(Third)
}



callingFunction()