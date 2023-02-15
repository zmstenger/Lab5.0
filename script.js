// Set up a blank array to contain the final multiplication table
const multiplicationTable = []

const values = 10

for (let i = 1; i <= values; i++) {
  const row = []
  for (let j = 1; j <= values; j++) {
    row.push(i * j)
  }
  multiplicationTable.push(row)
}

console.log(multiplicationTable)
