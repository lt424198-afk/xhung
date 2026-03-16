const books=[

{
title:"Dế Mèn Phiêu Lưu Ký",
img:"https://upload.wikimedia.org/wikipedia/vi/3/3b/DeMen.jpg"
},

{
title:"Hai vạn dặm dưới đáy biển",
img:"https://upload.wikimedia.org/wikipedia/commons/7/73/20000Leagues.jpg"
},

{
title:"Không gia đình",
img:"https://upload.wikimedia.org/wikipedia/commons/3/36/SansFamille.jpg"
}

]

const container=document.getElementById("books")

function showBooks(list){

container.innerHTML=""

list.forEach(b=>{

container.innerHTML+=`

<div class="card">

<img src="${b.img}">

<h3>${b.title}</h3>

<a href="ketquatruyen.html?name=${b.title}">Xem</a>

</div>

`

})

}

showBooks(books)


document.getElementById("searchInput").addEventListener("input",function(){

let value=this.value.toLowerCase()

let filtered=books.filter(b=>b.title.toLowerCase().includes(value))

showBooks(filtered)

})
