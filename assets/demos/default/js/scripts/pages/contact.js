// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 50.4191749 ,
			lng: 30.5350929,
			scrollwheel: false,
		});


		mapbg.addMarker({
			lat: 50.4191749 ,
			lng: 30.5350929,
			title: 'ТОВ ФК «АМІДА»',
			infoWindow: {
				content: '<h3>ТОВ ФК «АМІДА»</h3><p>Україна, м.Київ, вулиця Чигоріна, будинок 12, офіс 26.</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
    $( window ).resize(function() {
		PageContact.init();
	});
});
