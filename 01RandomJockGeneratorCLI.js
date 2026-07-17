import https from "https"
import chalk from "chalk"

const getJoke=()=>{
    const url ="https://v2.jokeapi.dev/joke/Any?type=single";

    https.get(url,(res)=>{
        let data =""
        res.on("data",(chunk)=>{
            data += chunk
        })
        res.on("end",()=>{
            const joke = JSON.parse(data)
            console.log(`here is a random ${joke.category} joke for you :`)
            console.log(chalk.yellow(joke.joke))
            
        })
        res.on("error",(err)=>{
            console.log("Error: ",err.message)
        })
    })
}

getJoke()