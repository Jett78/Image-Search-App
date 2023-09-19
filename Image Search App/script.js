const inputfield = document.getElementById("searchbar")
const submitbtn  = document.getElementById("submit")
const displayfield = document.getElementById("image-display")

function generate(){
let url = `https://api.unsplash.com/search/photos?page=1&query=${inputfield.value}&per_page=120&order_by=latest&client_id=TPDeJ_ppFqcOW0FjPWQb_RauR2Uj23ch59RfkwZu6-I`
fetch(url)
.then(response => {
    return response.json()
}).then(value => {
    console.log(value)
    const results = value.results;
    results.map((result)=>
    {
        const image = document.createElement("img")
        image.src = result.urls.small
        const imglink = document.createElement("a")
        imglink.href = result.links.html;

        imglink.appendChild(image)
        displayfield.appendChild(image)
    })
})
displayfield.innerHTML="";
}

submitbtn.addEventListener("click",()=>{
    generate()
})

inputfield.addEventListener("keypress", function(event) {
    if (event.key === "Enter") 
    {
        generate()
    }
})