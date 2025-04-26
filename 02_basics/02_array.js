const marvelheros=["thor","Ironman","Spiderman"]
const dc_heros=["Superman","flash","batman"]

//marvelheros.push(dc_heros)

//console.log(marvelheros)
//console.log(marvelheros[3][1])

const allheros=marvelheros.concat(dc_heros);
console.log(allheros);

const all_new_heros=[...marvelheros,...dc_heros]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=another_array.flat(Infinity)
console.log(real);

console.log(Array.isArray("Ishwar"));
console.log(Array.from("Ishwar"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
