var win = Titanium.UI.currentWindow;

var ta = Ti.UI.createTextArea({
	editable: false, 
	backgroundColor:'#ccc',
	value:'Contact\n test@test.com\n 817-555-5555\n http://bit.ly\n 444 Castro Street, Mountain View, CA'
});

win.add(ta)
