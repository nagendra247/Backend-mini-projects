import https from 'https';
import readline from 'readline';

const API_key= "9a1d7b0631ede83531b726c4";
const url= `https://v6.exchangerate-api.com/v6/${API_key}/latest/USD`;

https.get(url, (res)=>{
    let data =' ';
    res.on('data',(chunk)=>{
      data += chunk;

    })

    res.on('end',()=>{
      const rates = JSON.parse(data).conversion_rates;
      
      rl.question('Enter the amount in USD: ', (amount) => {
        rl.question('Enter the currency you want to convert (e.g., INR, EUR, GBO); ', (currency)=>{
            const rate = rates[currency.toUpperCase()];

            if(rate){
                const convertedAmount = (amount * rate).toFixed(2);
                console.log(`${amount} USD is equal to ${convertedAmount} ${currency.toUpperCase()}`);

            }else{
                console.log(`Currency ${currency} not found.`);
            }
            rl.close();
        })
      })
      
    })

})


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});