document.addEventListener("DOMContentLoaded", function(){

    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    
    var data = [50, 160, 100, 200, 120, 100, 180]


    // Untuk memberikan label di sebelah kiri degnan posisi miring
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = "black";
    ctx.fillText("Hasil Produksi Padi Indonesia (ton)", -canvas.height + 100, 20)
    ctx.restore()

    // Untuk menambahkna garis horizontal
    ctx.beginPath()
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;

    var startX = 50;
    var endX = 650;
    var y = 50;

   var lineSpacing = 50

    while (y < canvas.height) {
        ctx.moveTo(startX, y)
        ctx.lineTo(endX,y)
        ctx.stroke();

        y += lineSpacing;
    }


    // untuk menambah kan label di bawah 
    for(var i=0; i < data.length; i++){
        ctx.fillStyle = "#000"
        ctx.fillText( i + 2010, 80 * i + 100, 370)
    }

    // untuk menambahkan label di sebelah kiri
    ctx.save()
    ctx.fillStyle = "#000";
    for ( i = 0; i < data.length; i++){
        var yPos = 50 + (data.length - i - 1) * 50;
    ctx.fillText(10 * i, 30, yPos);   
    }
    ctx.restore()

    
// untuk membuat garis grafik
    ctx.beginPath();
    ctx.moveTo(80, 150 - data[0])
    for (var i = 1; i < data.length; i++){
        ctx.lineTo(10 + i * 100, 400 - 100 - data[i])
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "blue";
    ctx.stroke();

// menentukan titik grafik
    ctx.beginPath()
    ctx.arc(80,150 - data[0], 5,0,3 * Math.PI)
    ctx.fillStyle = "blue";
    ctx.fill()


    ctx.beginPath()
    ctx.arc(110,190 - data[0], 5,0,3 * Math.PI)
    ctx.fillStyle = "blue";
    ctx.fill()
    
    
    ctx.beginPath()
    ctx.arc(210,250 - data[0], 5,0,3 * Math.PI)
    ctx.fillStyle = "blue";
    ctx.fill()
    
    
    ctx.beginPath()
    ctx.arc(310,150 - data[0], 5,0,3 * Math.PI)
    ctx.fillStyle = "blue";
    ctx.fill()
    
    
    ctx.beginPath()
    ctx.arc(410,230 - data[0], 5,0,3 * Math.PI)
    ctx.fillStyle = "blue";
    
    
    ctx.fill()
    ctx.beginPath()
    ctx.arc(510,250 - data[0], 5,0,3 * Math.PI)
    // ctx.arc(koordinatY, koordinatX - data[0], besarLingkaran, bentuk lingkaran,3 )
    ctx.fillStyle = "blue";
    ctx.fill()
    
    
    ctx.beginPath()
    ctx.arc(610,170 - data[0], 5,0,3 * Math.PI)
    ctx.fillStyle = "blue";
    ctx.fill()

// judul
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillText("Hasil Produksi Padi Indonesia Tahun 2016- 2020", canvas.height - 150, 20)
    ctx.restore()

    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillText("Hasil Produksi Padi Indonesia Tahun 2016- 2020", canvas.height - 150, 390)
    ctx.restore()




    // ctx.beginPath();
    // ctx.strokeStyle = "grey";
    // ctx.lineWidth = 1;
    
    // var startX = 50; 
    // var endX = 650;  
    // var y = 50;
    
    // var lineSpacing = 50;
    
    // while (y < canvas.height) {
    //     ctx.moveTo(startX, y);
    //     ctx.lineTo(endX, y);
    //     ctx.stroke();
    //     y += lineSpacing;
    // }
      
})
