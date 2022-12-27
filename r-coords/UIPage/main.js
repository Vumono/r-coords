$(() => {
    window.addEventListener('message', (event) => {
        let v = event.data

        if (v.type == "open") {
            $('body').css('display', 'block')

            $('.all').append(` 
                <div class="coords"> <span id="copy"><i class="fa-solid fa-copy"></i></span> <span id="text" > vector3(${v._charPosx}, ${v._charPosy}, ${v._charPosz}) </span> </div>
                <div class="coords">  <span id="copy"><i class="fa-solid fa-copy"></i></span> <span id="text" > vector4(${v._charPosx}, ${v._charPosy}, ${v._charPosz}, ${v._charHeading}) </span>  </div>
                <div class="coords">  <span id="copy"><i class="fa-solid fa-copy"></i></span> <span id="text" > x = ${v._charPosx}, y = ${v._charPosy}, z = ${v._charPosz} </span>  </div>
                <div class="coords">  <span id="copy"><i class="fa-solid fa-copy"></i></span> <span id="text" > x = ${v._charPosx}, y = ${v._charPosy}, z = ${v._charPosz}, h = ${v._charHeading} </span>  </div>
                <div class="coords">  <span id="copy"><i class="fa-solid fa-copy"></i></span> <span id="text" > vec3(${v._charPosx}, ${v._charPosy}, ${v._charPosz}) </span>  </div>
                <div class="coords">  <span id="copy"><i class="fa-solid fa-copy"></i></span> <span id="text" > vec4(${v._charPosx}, ${v._charPosy}, ${v._charPosz}, ${v._charHeading}) </span>  </div>
                

                `) 
        }



        let copy = str => {
            const copytx = document.createElement('textarea');
            copytx.value = str;
            document.body.appendChild(copytx);
            copytx.select();
            document.execCommand('copy');
            document.body.removeChild(copytx);
         };

        $('.coords').click(function () {
            let text = $(this).find('#text').text()
            copy(text)
            console.log(text)
            closeall()
            $.post("https://r-coords/int:noty", JSON.stringify({
                noti: 'Has copiado las cordenadas:' + text,
            }))
            
        })


        document.onkeydown = function (e) {
            if ((e.which == 27)) { 
                closeall()
              }
         }

        function closeall() {
            $.post("https://r-coords/int:close", JSON.stringify('close')); 
            $('.all').empty()
            $('body').css('display', 'none')
        }

    })
})
