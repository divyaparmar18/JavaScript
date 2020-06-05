function deposit (...money){
    let balance = 0
    for(let i =0;i<money.length;i++){
      balance += money[i]
    }
    return balance
  }
  
  console.log(deposit(100,30,50))
  
  let addMoney = [34,5,34,66,89]
  
  console.log(...addMoney)
  
  console.log(Math.max(...addMoney))

  