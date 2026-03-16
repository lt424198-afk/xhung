const container = document.getElementById("books")

let books = []

for(let i = 1; i <= 60; i++){

books.push({
title: "Truyện thiếu nhi số " + i,
img: "https://picsum.photos/300/400?random=" + i
})

}

function showBooks(list){

container.innerHTML = ""

list.forEach(book => {

container.innerHTML += `
<div class="card">

<img src="${book.img}">

<h3>${book.title}</h3>

<a href="ketquatruyen.html?name=${book.title}">Xem</a>

</div>
`

})

}

showBooks(books)

document.getElementById("searchInput").addEventListener("input",function(){

let value = this.value.toLowerCase()

let filtered = books.filter(book =>
book.title.toLowerCase().includes(value)
)

showBooks(filtered)

})
