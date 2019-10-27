/*
  Name: Sukayna Kugshia
  Date: 10/27/2019
  Description: The app.js file allows for behavior to the elements to be executed through the controller. 
                                  
                                  Assignment #7 
*/

(function () {
		  'use strict';

		   angular.module('ShoppingListCheckOff', [])

		  .controller("ToBuyController", ToBuyController)
		  .controller("AlreadyBoughtController", AlreadyBoughtController)
		  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

		   ToBuyController.$inject = ['ShoppingListCheckOffService'];
		   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

	 function ShoppingListCheckOffService() {
		  var service = this;

		  var shoppingListItem = 
		    [{ item_name: "cookies", item_quantity: 10,  pricePerItem: 2},
		    { item_name : "bread",   item_quantity : 2,  pricePerItem: 3},
		    { item_name : "eggs",    item_quantity : 1,  pricePerItem: 3},
		    { item_name : "apples",  item_quantity : 5,  pricePerItem: 1},
		    { item_name : "cheese",  item_quantity : 3,  pricePerItem: 2}];
		  
		  var bought = [];

		  service.buyItem = function (itemIndex) {
		    var boughtItem = shoppingListItem[itemIndex];
		    shoppingListItem.splice(itemIndex, 1);
		    bought.push(boughtItem);
		  };

		  service.getBoughtItems = function () {
		    return bought;
		  };

		  service.getShoppingListItem = function () {
		    return shoppingListItem;
		  };
	}

	function ToBuyController(ShoppingListCheckOffService) {
		  var toBuy = this;

		  toBuy.items = ShoppingListCheckOffService.getShoppingListItem();

		  toBuy.buyItem = function  (itemIndex) {
		    ShoppingListCheckOffService.buyItem(itemIndex);
		  };

		  toBuy.isEmpty = function () {
		    return toBuy.items.length == 0;
		  };
	}

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		  var bought = this;

		  bought.items = ShoppingListCheckOffService.getBoughtItems();

		  bought.isEmpty = function () {
		    return bought.items.length == 0;
		  };
	}
})()