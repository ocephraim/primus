
const ppty = document.querySelectorAll(".property");

const createListings = function(listing) {
    let image = document.querySelectorAll(".img");
    let type = document.querySelectorAll(".type");
    let propertyName = document.querySelectorAll(".propertyName");
    let address = document.querySelectorAll(".address");
    let price = document.querySelectorAll(".price");
    let bed = document.querySelectorAll(".bed");
    let bath = document.querySelectorAll(".bath");

    for (var i = 0; i < listing.length; i++) {
        image[i].style.background = listing[i].image;
        image[i].style.backgroundBlendMode = "overlay, normal";
        image[i].style.backgroundSize = "cover";
        type[i].innerHTML = listing[i].type;
        propertyName[i].innerHTML = listing[i].propertyName;
        address[i].innerHTML = `&nbsp; &#8226; &nbsp ${listing[i].address}`;
        price[i].innerHTML = `&#8358; ${listing[i].price}`;
        bed[i].innerHTML = `${listing[i].bed} <i class="fas fa-bed"></i>`;
        bath[i].innerHTML = `${listing[i].bath} <i class="fas fa-bath"></i>`;
    }
}

ppty.forEach (this.append(createListings(data)));