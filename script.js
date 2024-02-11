document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen canvas dan konteksnya
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Data untuk grafik garis
    var data = [50, 170, 100, 50, 120];


    // Judul
   

    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = "black";
    ctx.fillText("Hasil Produksi Padi Indonesia (ton)", -canvas.height + 100, 20)
    ctx.restore()


    // pembuatan garis horizontal
    ctx.beginPath();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;
    
    var startX = 50; // Koordinat x awal
    var endX = 750;  // Koordinat x akhir
    var y = 50;      // Koordinat y awal
    
    var lineSpacing = 50;
    
    while (y < canvas.height) {
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
        ctx.stroke();
        y += lineSpacing;
    }


    // Membuat label di suhu x
    for (var i = 0; i < data.length; i++) {
        ctx.fillStyle = "#333";
        ctx.fillText(i + 2016, 100 + i * 150, 370);
    } 

    // Membuat label di suhu y
    ctx.save()
   
    ctx.fillStyle = "#000";
    for ( i = 0; i < data.length; i++){
        var yPos = 50 + (data.length - i - 1) * 50;
    ctx.fillText(10 * i, 30, yPos);   
    }
    ctx.restore()



    

    
    

    // Menggambar grafik garis
    ctx.beginPath();
    ctx.moveTo(50,150 - data[0]);

    for (var i = 1; i < data.length; i++) {
        ctx.lineTo(10 + i * 100, 400 - 100 - data[i]);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#3498db";
    ctx.lineJoin = 'round';        
    ctx.lineCap = 'round'; 
    ctx.stroke();


    
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillText("Hasil Produksi Padi Indonesia Pada Tahun 2016 - 2020", canvas.height - 100, 20);
    ctx.restore()

    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillText("Tahun", canvas.height - 50, 390);
    ctx.restore()

    ctx.beginPath();
    ctx.arc(50, 150 - data[0], 5, 0, 2 * Math.PI);
    //ctx.arc(50, 150 - data[0], size, setengah lingkaran di bagian bawah, setengah lingkaran untuk bagian atas * Math.PI); 
    ctx.fillStyle = "#3498db";
    ctx.fill();


    ctx.beginPath();
    ctx.arc(140, 200 - data[0], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#3498db";
    ctx.fill();


    ctx.beginPath();
    ctx.arc(210, 250 - data[0], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#3498db";
    ctx.fill();


    ctx.beginPath();
    ctx.arc(310, 300 - data[0], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#3498db";
    ctx.fill();


    ctx.beginPath();
    ctx.arc(410, 230 - data[0], 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#3498db";
    ctx.fill();
    












   


    // Menggambar sumbu x dan y
    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.lineTo(50, 350);
    // ctx.lineTo(750, 350);
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = "#333";
    // ctx.stroke();

   

   
 




    // Menambahkan label sumbu x
   



   

  

    



    

   
});
