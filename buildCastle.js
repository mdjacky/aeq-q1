const landRaw = process.argv[2];
let landArray;

//Check input
try {
  landArray = JSON.parse(landRaw);
  if (!Array.isArray(landArray)) {
    throw 'error';
  }
} catch (e) {
  console.error('Invalid Input');
  process.exit();
}

//Shrink landArray to remove contiguous duplicate number
//eg: [1,2,2,3,2] => [1,2,3,2] 
const landArrayUnique = landArray.length? [landArray[0]]: [];
let j=1;

while( j< landArray.length) {
  if(landArray[j] !== landArray[j-1]) {
    landArrayUnique.push(landArray[j]);
  }

  j++;
}

//Count the sum of numbers of peaks and valleys
if (landArrayUnique.length < 3) {
  console.log('0 castle');
  process.exit();
}

let prev, curr, next;
let sum = 0;
let i = 1;
while (i+1 < landArrayUnique.length) {
  prev = landArrayUnique[i-1];
  curr = landArrayUnique[i];
  next = landArrayUnique[i+1];

  if ((curr<prev && curr < next) || (curr>prev && curr>next)) {
     sum++;
  }

  i++;
}

console.log(`${sum} ${sum<2? 'castle': 'castles'}`);

