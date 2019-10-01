const exchangeRates = {
    "usd": {
      "eur": 0.91,
      "aud": 1.48,
      "krw": 1203.00,
      "vnd": 23200.70,
    },
    "eur": {
      "usd": 1.09,
      "aud": 1.62 ,
      "krw": 1316.21,
      "vnd": 25383.96,
    },
    "aud": {
      "usd": 0.68,
      "eur": 0.62,
      "krw": 813.58,
      "vnd": 15690.63,
    },
    "krw": {
      "usd": 0.00083,
      "aud": 0.0012,
      "eur": 0.00076,
      "vnd": 19.29,
    },
    "vnd": {
      "krw": 0.052,
      "usd": 0.000043,
      "aud": 0.000064,
      "eur": 0.000039,
    },
  }
  
  const exchangeRate = 23208;
  
  function vndToUsd(amountVnd) {
      const convertedAmount = (amountVnd / exchangeRate).toFixed(2)
       return convertedAmount
  }
  
  const returnedFromFunctionCall = vndToUsd(23000)
  console.log('The value returned from the call to vndToUsd', returnedFromFunctionCall)
  

 function convertCurrency() {
      const to = prompt('what do you want to convert to')
      const from = prompt('what currency do you have')
      const amount = prompt('How much do you have')
      console.log('I called my function', from)
    }
    convertCurrency()

    

    
    
    
    

  