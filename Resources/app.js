Ti.include("database.js");
var db = Ti.App.listDb;
db.createTable();
var data = db.lists.getAll();
for(var i =0;i<data.length;i++){
  datum = data[i];
  datum.hasChild=true;
  datum.toUrl="window2.js";
  datum.title = datum.content;
  delete datum.content;
}

// create table view
var tableview = Titanium.UI.createTableView({
    data:data,
    editable:true
});

var win1 = Titanium.UI.createWindow({
     backgroundColor:'#fff'
});
//add table view to that object
win1.add(tableview);

var addBtn = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.ADD
});
win1.setRightNavButton(addBtn);

// create table view event listener
tableview.addEventListener('click', function(e)
{
    if (e.rowData.toUrl)
    {
        var win2= Titanium.UI.createWindow({url:e.rowData.toUrl});
        navGroup.open(win2);
    }
});
var navGroup = Ti.UI.iPhone.createNavigationGroup({
    window:win1
});
var main = Ti.UI.createWindow();
main.add(navGroup);
main.open();

var count = data.length;
addBtn.addEventListener('click',function(e){
  var content = 'List Content Appended' + count;
  var row = Ti.UI.createTableViewRow({
    title:content,
    id:count
  });
  db.lists.insert(content,count);
  count = db.lists.count();
  tableview.appendRow(row);
});
tableview.addEventListener('delete', function(e) {
  db.lists.remove(e.row.id);
  count = db.lists.count();
});
