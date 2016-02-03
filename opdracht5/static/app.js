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
			if (route === 'start'){
				document.getElementById('start').style.display='block';
				document.getElementById('best').style.display='none';
			} else {
				document.getElementById('start').style.display='none';
				document.getElementById('best').style.display='block';
			}
		}
	};

	app.init();

})();