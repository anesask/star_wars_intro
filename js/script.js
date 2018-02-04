const numStars = 122;

for (let i = 0; i < numStars; i++){
    let star = document.createElement("div");
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}

function getRandomPosition(){
    var x = window.innerHeight;
    var y = window.innerWidth;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return[randomX, randomY];
}