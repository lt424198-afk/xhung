const container=document.getElementById("books")

let books=[]

for(let i=1;i<=100;i++){

books.push({

title:"Truyện thiếu nhi số "+i,

img:"https://picsum.photos/200/300?random="+i

})

}

function showBooks(list){

container.innerHTML=""

list.forEach(b=>{

container.innerHTML+=`

<div class="card">

<img src="${b.img}">

<h3>${b.title}</h3>

<a href="ketquatruyen.html?name=${b.title}">Đọc truyện</a>

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
