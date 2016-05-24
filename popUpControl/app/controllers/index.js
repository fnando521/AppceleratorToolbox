
var data = [{
	0: "red", value: "RED",
	1: "green",value: "GREEN",
	2: "blue",value: "BLUE",
	3: "cyan",value: "CYAN",
	4: "magenta",value: "MAGENTA",
	5: "yellow",value: "YELLOW",
	6: "black",value: "BLACK"
}];

$.btnPopup.addEventListener('click', function(e) {
	Alloy.createWidget('danielhanold.pickerWidget', {
	  id: 'mySingleColumn',
	  outerView: $.index,
	  hideNavBar: false,
	  type: 'single-column',
	  selectedValues: [3],
	  pickerValues: data,
	  onDone: function(e) {
	  	if (e.cancel === true) {
		    Ti.API.info('Entry was cancelled');
		    return;
		 }
		 else {
		  	Ti.API.info('Selected Key: ' + e.id, Number(e.data[0].key));
	  		Ti.API.info('Selected Value: ' + e.id, e.data[0].value);
	  		//model.save(e.id, Number(e.data[0].key));
		 }
	  },
	});
});

$.index.open();
