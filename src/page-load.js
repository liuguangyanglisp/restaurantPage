import restaurantImg from './restaurant.jpg';

export function pageLoad() {
    let contentOfRestaurant = document.getElementById('content');
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

