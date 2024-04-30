import restaurantImg from './restaurant.jpg';
import { resetContent } from './reloadContent';

export function pageLoad() {
    let contentOfRestaurant = resetContent();
    let headerOfRestaurant = document.createElement('h1');
    let imgOfRestaurant = new Image();
    let introOfRestaurant = document.createElement('p');
    headerOfRestaurant.textContent = 'Restaurant';
    imgOfRestaurant.src = restaurantImg;
    introOfRestaurant.textContent = 'A hot restaurant providing spicy seafood and noodels at 23 pm in bankok.';
    contentOfRestaurant.appendChild(headerOfRestaurant);
    contentOfRestaurant.appendChild(imgOfRestaurant);
    contentOfRestaurant.appendChild(introOfRestaurant);
};