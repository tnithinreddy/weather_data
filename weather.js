var http=require('http');
var options={};
var getlocation=function()
        {
	
	process.stdin.resume();
	process.stdin.once('data',function(place){
                place=place.toString().trim();
		options['host']='api.worldweatheronline.com';
                options['path']='/free/v1/weather.ashx?q='+place+'&format=json&num_of_days=1&key=9191c7f24c1c7a95794cf0c1e9223ff53948044f';
						//console.log(options['host']);
	http.request(options,function(response){var text='';
						response.on('data',function(chunk){
										  text+=chunk;
										  });
						response.on('end',function(){
										var parsedtext=JSON.parse(text);
console.log('temp: '+parsedtext['data']['current_condition'][0]['temp_C']);										
									getlocation();	});						
						}).end();
						});
	          
	};

getlocation();
