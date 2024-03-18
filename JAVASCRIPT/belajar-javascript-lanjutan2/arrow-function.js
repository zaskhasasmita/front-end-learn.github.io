// function declaration
// function tampilNama(nama) {
//     console.log(`Halo ${nama}`);
// }

// tampilNama('Zaskhaa');

// //function expression
// let tampilNama = function (nama) {
//     console.log(`Halo ${nama}`);
// } 

// tampilNama('zaskha');

// arrow function
// let tampilNama = (nama) => {
//     console.log(`Halo ${nama}`);
// }
// let tampilNama = nama => `Halo ${nama}`;

// let hasil = tampilNama('jek');

// console.log(hasil);

let mhs = ['asd', 'qwer', 'lkjhg'];

let jml = mhs.map( nama =>  ({ nama,jmlHuruf : nama.length })  );

console.table(jml);