'use strict';

import {AsyncStorage} from 'react-native';

import ConfigApp from '../configs/app.js';

/**
 * Get liked items.
*/
function getLikedItems() {

	let key = 'requestDrawerMenu' + ConfigApp.version;
	
	AsyncStorage.getItem(key).then((value) => {
            
        if(value !== null){

            return JSON.parse(value);
        }
    });
}

/**
 * Add new item to Liked array.
*/
function addLikedItem(item) {

	let key = 'requestDrawerMenu' + ConfigApp.version;
	item = {
        thumb: "lighthouse_bass",
        index: 6,
        label: "Bass Harbor Head Station, Maine"
	};
	
	AsyncStorage.getItem(key).then((value) => {
            
        if(value !== null) {

            let data = JSON.parse(value);

        	data.items.push(item);

        	AsyncStorage.setItem(key, JSON.stringify(data));
        } else {


        }
    });

}

/**
 * Delete item from Liked array.
*/
function deleteLikedItem(id) {

	let key = 'requestDrawerMenu' + ConfigApp.version;
	
	AsyncStorage.getItem(key).then((value) => {
            
        if(value !== null) {

            let data = JSON.parse(value);

            for (var i = 0; i < data.items.length; i++) {

                if(data.items[i].index == id) {

                    data.items.splice(i, 1);
                }
            }

        	AsyncStorage.setItem(key, JSON.stringify(data));
        } else {


        }
    });

}

exports.getLikedItems = getLikedItems;
exports.addLikedItem = addLikedItem;
exports.deleteLikedItem = deleteLikedItem;