import { resetContent } from "./reloadContent";

export function contactLoad() {
    let contentOfRestaurant = resetContent();
    let address = document.createElement('p');
    let tel = document.createElement('p');
    let openAndCloseTime = document.createElement('p');
    address.textContent = 'thiland';
    tel.textContent = '17688898568';
    openAndCloseTime.textContent = 'Open: 09:00. Close: 24:00'
    contentOfRestaurant.appendChild(address);
    contentOfRestaurant.appendChild(tel);
    contentOfRestaurant.appendChild(openAndCloseTime);
}