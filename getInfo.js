
$(document).ready(function(){
    $("button").click(function(){
        $.get( "https://embed.waze.com/rtserver/web/TGeoRSS", function( data ) {
  		console.log(data)
  		alert( "Load was performed." );
});
    });
});


//https://embed.waze.com/rtserver/web/TGeoRSS?bottom=43.786967417325926&left=-79.37484741210939&ma=200&mj=100&mu=0&right=-79.04525756835939&top=43.90581740087164&types=alerts%2Ctraffic