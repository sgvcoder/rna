module.exports = function(str){
	
	var url = 'http://192.168.1.100/test.json?name=' + str;

	return fetch(url).then(function(response){

		return response.json();
	}).then(function(json){
		
		return json;
	}); 
}