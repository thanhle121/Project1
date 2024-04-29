import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";

drawProduct();


//Search

const inputSearch = document.querySelector("#search input");

const buttonSearch = document.querySelector("#search button");

const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", function() {
    search();
})
inputSearch.addEventListener("keydown", function(e) {
    if(e.key === "Enter"){
        search();
    }
})

//End Search

// Filter

const filter = document.querySelector("#filter");

filter.addEventListener("change", function(e){
    switch(e.target.value){
        case "mac-dinh":
            params.sort = ""
            params.order = ""
            break;
        case "gia-thap-den-cao":
            params.sort = "price"
            params.order = "asc"
            break;
        case "gia-cao-den-thap":
            params.sort = "price"
            params.order = "desc"
            break;
        case "giam-gia-nhieu":
            params.sort = "discountPercentage"
            params.order = "desc"
            break;
    }
    drawProduct();
})

// End Filter

// Pagination

const pagiPrev = document.querySelector("#paginationPrev");
const pagiNext = document.querySelector("#paginationNext");
const pagiNumber = document.querySelector("#paginationNumber");

pagiNext.addEventListener("click", function(){
    params.page = params.page + 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
})

pagiPrev.addEventListener("click", function(){
    if(params.page > 1){
        params.page = params.page - 1;
        pagiNumber.innerHTML = params.page;
        drawProduct();
    }
})

// End Pagination