const food = ['sushi', 'pasta', 'onigiri', 'Sandwhich', 'McCDonalds', 'Carls jr', 'Curry', 'Gratin', 'Subway', 'Starbucks', '7 Eleven', 'Family Mart', 'Lawson', 'Supermarket', 'Salad', 'Sukiya', 'New shop', 'Kebab', 'KFC'];

document.querySelector('button').addEventListener('click', function() {
   let randomFood = food[Math.floor(Math.random()*food.length)];
  document.querySelector('.btn').textContent = randomFood;
});