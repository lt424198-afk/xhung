const params=new URLSearchParams(location.search)

const name=params.get("name")

const result=document.getElementById("result")

if(name){

result.innerHTML=`

<div class="card">

<h2>${name}</h2>

<p>Đây là trang thông tin truyện.</p>

<a href="sach.html">← Quay lại thư viện</a>

</div>

`

}
