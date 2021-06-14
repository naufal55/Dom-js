// document.getElementById(''); => adalah pemanggilan element
// yang ada di html dengan memnaggil id

const judul = document.getElementById('judul');
judul.style.color='red';
judul.style.backgroundColor='#acc';
judul.innerHTML='naufal';

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

