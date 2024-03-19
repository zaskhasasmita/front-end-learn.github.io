const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// // filter , mencari angka >= 3
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if( angka[i] >=3 ) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// const newAngka = angka.filter( a => a >=3 );
// console.log(newAngka);


// map
// kalikan semua angka dengan 2
// const newAngka = angka.map( a => a*2 );
// console.log(newAngka);



//reduce
// jumlahkan semua element pada array
// const newAngka = angka.reduce( (acc, curr) => acc + curr );
// console.log(newAngka);

// method chainning
// cari angka > 5
// kalikan 3
// jumlahkan semuanya

// let newAngka = angka.filter( a => a > 5 );
// newAngka = newAngka.map( a => a * 3 );
// newAngka = newAngka.reduce( (a, b) => a + b );


const hasil = angka.filter( a => a > 5 )
                    .map( a => a * 3 )
                    .reduce( (a, b) => a + b );

console.log(hasil);

