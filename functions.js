const color='#3D4E44';
        document.body.style.background = 'black';

        window.addEventListener("load", function() {
            document.body.style.transition = "background 5s";
            document.body.style.background = color;
        });
        
        const lingerButton = document.getElementById("linger-button");
        const runImagechurch = document.getElementById("runimagechurch");
        const escapeImagechurch = document.getElementById("escapeimagechurch");
        const messageChurch = document.getElementById("messagechurch")

        const stayButton = document.getElementById("stay-button");
        const runImagehotel = document.getElementById("runimagehotel");
        const escapeImagehotel = document.getElementById("escapeimagehotel");
        const messageHotel=document.getElementById("messagehotel")
        
        lingerButton.addEventListener("click", () => {
            runImagechurch.style.display = "block";
            escapeImagechurch.style.display="block";
            messageChurch.style.display="block";
            stayButton.style.display="none";
            document.body.style.transition = "background 0s";
            document.body.style.background = 'black';
        });

        stayButton.addEventListener("click", () => {
            runImagehotel.style.display = "block";
            escapeImagehotel.style.display="block";
            messageHotel.style.display="block";
            lingerButton.style.display="none";
            document.body.style.transition = "background 0s";
            document.body.style.background = 'black';
        });

        const awayButtonHotel=document.getElementById("awaybuttonhotel");
        awayButtonHotel.addEventListener("click",()=> {
            document.body.style.transition = "background 3s";
            document.body.style.background = color;
        });

        const awayButtonChurch=document.getElementById("awaybuttonchurch");
        awayButtonChurch.addEventListener("click",()=> {
            document.body.style.transition = "background 3s";
            document.body.style.background = color;
        });

        const toButton=document.getElementById("tobutton");
        toButton.addEventListener("click", () => {
           runImagechurch.style.display = "none";
           escapeImagechurch.style.display="none";
           messageChurch.style.display="none";
           runImagehotel.style.display = "none";
           escapeImagehotel.style.display="none";
           messageHotel.style.display="none";
           lingerButton.style.display="block";
           stayButton.style.display="block";
        });