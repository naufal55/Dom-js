// document.getElementById(''); => adalah pemanggilan element
// yang ada di html dengan memnaggil id

const judul = document.getElementById('judul');

judul.style.color='red';
judul.style.backgroundColor='#acc';
judul.innerHTML='<em>Muhammad naufal</em>'; // dapat memasukkan apasaja pada atribut HTML

// document.getElementsByTagName(''); adalah pemanggilan elemen dengan
// tag html nya (seperti p,div,br) yang dikembalikan berupa 
//HTML collection berbeentuk array
const p = document.getElementsByTagName('p');
//p[2].style.backgroundColor = 'lightblue';
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
    
}

const h1= document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName adalah pemanggilan elemen dengan 
// nama class (class="section") yang dikembalikan 
// dengan HMTl collection
const p1=document.getElementsByClassName('p1')[0];
p1.innerHTML = 'judul ini diubah dari javasript';

//queryselector adalah pemanggilan element dengan selector css seperti
// <p> <section id="b"> ==> hanya dengan memanggil 
//queryselector('#b p') 


const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';
// mengubah list ke2 bewarna hijau 
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


//queryselectorAll adalah sama dengan queryselector hanya saja nilai yang
//dikembalikan adalah nodelist array dan memilih semua nilai

const pselector = document.querySelectorAll('p');
//p[2].style.backgroundColor = 'lightblue';
for (let i = 0; i < p.length; i++) {
    pselector[i].style.backgroundColor = 'lightblue'; // properti CSS
    
}

// untuk merubah struktur HTML kita bisa menggunakan getelement
// sedangkan ingin merubah struktur css maka dapat menggunakan 
// query selector akan tetapi fungsi kegunaan dari queryselectorAll
// dan getElementbytagName adalah sama seperti contoh dibawah ini.
//                          =====

//const sectionB = document.getElementById('b');
//const paragraf4 = sectionB.querySelector('p');
// ini sama dengan 
const sectionB = document.querySelector('section#b');
const paragraf4 = sectionB.getElementsByTagName('p')[0];

paragraf4.style.backgroundColor = 'orange';

//============================================
// setattribute 
// penambahan attribute dan mengisi value nya 
// didalam pada salah satu tag HTML

const judulbaru = document.getElementsByTagName('h1')[0]; //h1 yang index pertama
const a = document.querySelector('section#a a'); //section pada id a pada element a

judulbaru.setAttribute('name','Naufal');

//============================================
// akan tetapi jikalau menggunakan set attribute pada class yang sama 
// maka akan tertimpa bukan menambah seperti dibawah ini

const p2 = document.querySelector('.p2'); //class name dengan nama p2
// timpap2.setAttribute('class','label');
//============================================

//sekarang penggunaan classlist.add agar tidak tertimpa seperti setattribute
p2.classList.add('label');

// kemudian ada classlist remove untuk menghapus attribut yang ada
// (bisa dicoba menggunakan console di browser)
//p2.classList.remove('label');

// ataupun menambahkan secara otomatis jika tidak ada dan menghapus jikalau ada
//dengan menggunakan toggle bisa menggunakan tombol.
// (bisa dicoba menggunakan console di browser)
//p2.classList.toggle('label');

// contoh merubah warna css bisa di terapkan menggunakan tombol.
// jika ingin warna biru muda maka akan ditampilkan jika tidak tekan sekli lagi
// untuk menghapus class dan kembali seperti biasa. (digunakan untuk darkmode website)
// (bisa dicoba menggunakan console di browser)
//document.body.classList.toggle('biru-muda');

// kemudian ada classlistitem untuk mengetahui nama di attribut class tersebut
// sesuai index (SEPERTI ARRAY)
// (bisa dicoba menggunakan console di browser)
//p2.classList.item(1); // keluarnya label (class index ke 1)

// adapun check nama atribute pada class menggnakan classlist.contains
// jika ada maka dinilai true begitu sebalknya
// (bisa dicoba menggunakan console di browser)
//p2.classList.contains('label'); // bernilai true

// kemudian yang terakhir adalah replace untuk mengganti 
// nama class tersebut dengna nama yang baru 
p2.classList.replace('label','range'); // maka akan mengganti nama label menjadi range





