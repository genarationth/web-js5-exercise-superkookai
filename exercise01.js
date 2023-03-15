//Start list
const bankWaitingList = ['Sofia', 'David','Juan'];
console.log(`Start list: [${bankWaitingList}]`);

//Add 2 persons
bankWaitingList.push('Sara','Augustin');
console.log(`Add 2 persons to the list: [${bankWaitingList}]`);

//First person to teller
const firstPerson = bankWaitingList.shift();
console.log(`${firstPerson}(First person) to teller : [${bankWaitingList}]`);

//David save spot for Renata
bankWaitingList.splice(1,0,'Renata');
console.log(`David save spot to Renata: [${bankWaitingList}]`);

//Elena goes to the end of the line
bankWaitingList.push('Elena');
console.log(`Elena to the list: [${bankWaitingList}]`);