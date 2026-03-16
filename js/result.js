<section id="result"></section>

<script>

const books=[

{title:"Dế Mèn Phiêu Lưu Ký",img:"https://upload.wikimedia.org/wikipedia/vi/3/3b/DeMen.jpg"},
{title:"Hai Vạn Dặm Dưới Đáy Biển",img:"https://upload.wikimedia.org/wikipedia/commons/7/73/20000Leagues.jpg"},
{title:"Không Gia Đình",img:"https://upload.wikimedia.org/wikipedia/commons/3/36/SansFamille.jpg"}

]

const params=new URLSearchParams(location.search)

const name=params.get("name")

const result=document.getElementById("result")

books.forEach(b=>{

if(b.title===name){

result.innerHTML=`

<div class="card">

<img src="${b.img}">

<h2>${b.title}</h2>

<p>Đây là trang thông tin truyện.</p>

<a href="sach.html">← Quay lại</a>

</div>

`

}

})

</script>
