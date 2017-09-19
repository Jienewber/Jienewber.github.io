function csvtoGeoJSON (json) {

	var geojson = {
	    "type": "FeatureCollection",
	    "features": []
	};

	for(var x=0; x<json.length; x++) {

	    geojson.features.push({
	    	"type": "Feature",
	    	"geometry": {
	            "type": "Point",
	            "coordinates": [json[x].LAT, json[x].LNG]
	        }
	        "properties": {
	        	for(var j = 0; j < json[x].length; j++) {
	        		var obj = {};
      				for(var j = 0; j < json[x].length; j++) {
          			obj[json[x][j]] = json[x][j];
      }

      result.push(obj);
	          })
}


	var lines = csv.split(";");

	var result = [];

	var headers = lines[0].split(",");

	for(var i = 1; i < lines.length; i++){

	    var obj = {};
	    var currentline = lines[i].split(",");

	    for(var j = 0; j < headers.length; j++) {
	        obj[headers[j]] = currentline[j];
	    }

	    result.push(obj);
	}

	  //return result; //JavaScript object
	  return JSON.stringify(result); //JSON
	}