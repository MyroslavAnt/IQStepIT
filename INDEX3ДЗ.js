var canvas = document.getElementById("lineargradient");
    var context = canvas.getContext("2d");
    var gradient = context.createLinearGradient(0, 0, 290, 150);
    gradient.addColorStop(0.0, 'blue');
    gradient.addColorStop(0.5, 'red');
    gradient.addColorStop(1.0, 'green');
    context.fillStyle = gradient;
    
    context.fillRect(0, 0, 290, 290);