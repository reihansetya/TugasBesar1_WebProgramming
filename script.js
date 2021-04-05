function opentag(namatag) {
            var i;
            var x = document.getElementsByClassName("container");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            document.getElementById(namatag).style.display ="block";
}

const kanan = document.getElementsByTagName('main')[0];
const dark = document.querySelector('.dark');
const light = document.querySelector('.light')


dark.addEventListener('click',function () {
    kanan.classList.add('dark')
})


const kiri = document.querySelector('.kiri')
dark.addEventListener('click',function(){
    kiri.classList.add('item')
})

light.addEventListener('click',function () {
    kanan.classList.remove('dark')
})


light.addEventListener('click',function(){
    kiri.classList.remove('item')
})