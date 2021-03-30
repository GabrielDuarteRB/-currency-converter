import React, { useState } from 'react';

function Converter() {
  
  const [firstCoin, setFirstCoin] = useState()
  const [firstValue, setFirstValue] = useState()
  const [BRLValue, setBRLValue] = useState(undefined)

  const coins = ['USD', 'USDT', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 
  'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP']

  const onlyNumber = (e) => {
    console.log(e.substr(e.length - 1))
    if(e.substr(e.length - 1) % 2 === 0 || e.substr(e.length - 1) % 2 === 1){
      setFirstValue(e)
    }else{
      console.log('erro')
    }
     
  }
  
  function query(){
    if(coins.indexOf(firstCoin) !== '-1'){
      fetch(`https://economia.awesomeapi.com.br/json/all/${firstCoin}-BRL`)
      .then(response => response.json())
      .then(moeda => {
        const valueCoin = moeda.[firstCoin].bid
        setBRLValue((firstValue * valueCoin).toFixed(2))
      })
    }else{
      console.log('erro!')
    }
    console.log(firstValue)
  }

    return(
        <div>
          <h3 className={ BRLValue === undefined ? "disabled" : "converted-value"}>R$ {BRLValue}</h3>
          <div className="converter">
            <input onChange={(e) => onlyNumber(e.target.value)} value={firstValue} className="box-input"></input>
            <select onChange={(index) => setFirstCoin(index.target.value)} name="select">
              <option></option>
              {
                coins.map((coin) => {
                  return(
                    <option  value={coin}>{coin}</option>
                  )
                })
              }
            </select>
          </div>
          <button className="converter-button" onClick={() => query()}>Converter</button>
        </div>
    )
}

export default Converter;