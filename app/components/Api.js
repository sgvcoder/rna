'use strict';

import ConfigApp from '../configs/app.js';

module.exports = function(api, query){
	
	var url = ConfigApp.serverApiUrl + api + '.php?' + query;

	return fetch(url).then(function(response){

		return response.json();
	}).then(function(json){
		
		return json;
	}); 
}