(function(){
	'use strict'

	var app = {
		init: function(){
			routes.init();
		}
	};

	var routes = {
		init: function(){
			window.addEventListener('hashchange', function(hashObj) {
				var hash = hashObj.newURL.split('#')[1];
				sections.toggle(hash);
			}, false); // prevents default function (off)
		}
	};

	var sections = {
		toggle: function(route){
			var startBlock = document.getElementById('start');
			var bestBlock = document.getElementById('best');
			if (route === 'start'){
				startBlock.style.display='block';
				bestBlock.style.display='none';
			} else {
				startBlock.style.display='none';
				bestBlock.style.display='block';
			}
		}
	};

	app.init();

})();
