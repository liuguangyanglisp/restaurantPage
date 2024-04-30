import { resetContent } from "./reloadContent";

export function menuLoad() {
    let contentOfRestaurant = resetContent();
    let name = document.createElement('h1');
    let image = new Image();
    let price = document.createElement('p');
    name.textContent = 'spicy noodel with seafood';
    price.textContent = '20';
    contentOfRestaurant.appendChild(name);
    contentOfRestaurant.appendChild(price);
    contentOfRestaurant.appendChild(image);
}