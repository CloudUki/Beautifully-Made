//Gallery
$(document).ready(function(){
    $(".gallery-img").click(function(){
        var imgSrc = $(this).attr("src"); // Get clicked image source
        $("#modalImage").attr("src", imgSrc); // Set modal image source
        $("#imageModal").modal("show"); // Show modal
    });
});

$(document).ready(function(){
    $("#gallery-title").css({
        "opacity": "1",
        "transform": "translateY(0)"
    });
});

//Contact Us
$(document).ready(function(){
    $("#contact-title").css({
        "opacity": "1",
        "transform": "translateY(0)"
    });
});
