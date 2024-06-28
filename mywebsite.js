let i=0;
const time = 1100;
const image= ["img/img3.jpg", "img/img6.jpg", "img/img9.jpg","img/img15.jpg","img/img17.jpg"];
// console.log(image);
const img = document.getElementById("img");
// img.src=image[0];
const chimg = ()=> {
    img.src=image[i];

    if(i < image.length-1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("chimg()", time);
}
chimg();
// search item
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    // const storeitem = document.getElementById("product-list");
    const product = document.querySelectorAll(".card");
    const pname = document.getElementsByTagName("h3");
    // console.log(pname);
    for(let i = 0 ; i < pname.length ; i++) {
        let match = product[i].getElementsByTagName('h3')[0];

        let textvalue = match.textContent || match.innerHTML;

        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = "";
        }
        else{
            product[i].style.display = "none";
        }
    }
}

        