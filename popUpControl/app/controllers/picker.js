// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var pickerData = [];
Ti.API.info('length: ' + args.length);
Ti.API.info('DATA: ' + JSON.stringify(args));

for(var i=0;i<args.length;i++) {
	Ti.API.info('data:' + args[i].color);
	pickerData = Ti.UI.createPickerRow({
		title: args[i].color
	});
}

$.pickerControl.add(pickerData);

function report(e) {
	Ti.API.info('Selected: ' + e.title);
	Ti.API.info('Selected: ' + e.rowIndex);
}
