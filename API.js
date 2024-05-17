fetch('https://api.chucknorris.io/jokes/random')
.then( (e)=>{
    return e.json()
})
.then((data) =>{
    console.log(data)
    console.log(data.value)
})
.catch()

