<!-- jquery for color change navbar on scroll -->
    <script>

        $(document).ready(function(){
            $(window).scroll(function(){
               var scroll = $(window).scrollTop();
               if(scroll > 280){
                $(".navbar-dark").css("background", "#1db1a8");
               } 
               else{
                $(".navbar-dark").css("background" , "transparent");
               }
            });
        });
    </script>




