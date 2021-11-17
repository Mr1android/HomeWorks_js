const li = 10
  let result = ' '
  for (let i = 0;i < li; i++ ){
    for (let j = 0; j < li; j++){
      if (i % 2 !== 0) {
        result += j % 2 === 0 ? ' ' : '#'
      }else {
          result += j % 2 ===0 ? '#' : ' '
        }
    }
    result += '\n'
  }
  console.log(result)

