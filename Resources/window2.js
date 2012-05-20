var win = Titanium.UI.currentWindow;
Ti.include("database.js");
var db = Ti.App.listDb;
var row = db.lists.get(win.targetId);
//create the text area with row.content as value
var ta = Ti.UI.createTextArea({
	editable: true, 
	backgroundColor:'white',
	height:420,
	width:320,
	suppressReturn:false,
	value:row.content
});
//add to current window
win.add(ta);

win.addEventListener('close', function(e)
{
  var result = {
    content:ta.getValue(),
    id:win.targetId
  };
  db.lists.update(result);
  Ti.App.fireEvent("listRefresh",result);
});
