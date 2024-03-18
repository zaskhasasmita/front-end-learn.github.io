////// Cara membuat object pada javascript
//// 1. Object Literal
let mahasiswa1 = {
    nama : 'Zaskha',
    energy : 10,
    makan: function(porsi) {
        this.energy = this.energy + porsi;
        console.log(`Selamat makan ${this.nama}, selamat makan`);
    }
}
let mahasiswa2 = {
    nama : 'Sasmita',
    energy : 20,
    makan: function(porsi) {
        this.energy = this.energy + porsi;
        console.log(`Selamat makan ${this.nama}, selamat makan`);
    }
}

// console.log(
//     // mahasiswa.makan(5),
//     mahasiswa1, 
//     mahasiswa2
// );




//// 2. Function Declaration
function Mahasiswa(nama, energy) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    mahasiswa.makan = function(porsi) {
        this.energy += porsi;
        console.log(`${this.nama} sudah makan`);
    }

    mahasiswa.main = function(jam) {
        this.energy -= jam;
        console.log(`${this.nama} sudah main`);
    }

    return mahasiswa;
}

let zaskha =  Mahasiswa('Zaskha', 10);
let raah = Mahasiswa('Raah', 20)
// console.log(
//     raah,
//     raah.makan(3),
//     raah.main(1)
// );





//// 3. Constructor Function
// keyword new
function Student(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`${this.nama} sudah makan`);
    }

    this.main = function(jam) {
        this.energy -= jam;
        console.log(`${this.nama} sudah main`);
    }
}

let bagong = new Student('bagong', 50);
let ling = new Student('ling', 80);

console.log(
    ling,
    ling.main(10),
    ling.makan(2)
);








//// 4. Object.create()
