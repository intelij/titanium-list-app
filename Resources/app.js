//var data = [
//    {title:'List Content 1', hasChild:true, toUrl:'window2.js', header:"Header 1"},
//    {title:'List Content 2'},
//   {title:'List Content 3',header:"Header 2"},
//    {title:'List Content 4'}
//];

var db = Ti.Database.install('lists.sqlite','lists.sqlite');
var rows = db.execute('SELECT * FROM LISTS;');
var data = [];

while (rows.isValidRow())
{
    data.push({
      title:rows.fieldByName('content'),
      id:rows.fieldByName('id')
    });
    rows.next();
};
rows.close();

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

//win1.open();

// create table view event listener
tableview.addEventListener('click', function(e)
{
    if (e.rowData.toUrl)
    {
        var win2= Titanium.UI.createWindow({url:e.rowData.toUrl});
        //win1.close();
        //win2.open();
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
	row = Ti.UI.createTableViewRow(	{title:'List Content Appended' + count,id:count});
	db.execute('INSERT INTO lists (content) VALUES (?)',row.title);
	tableview.appendRow(row);
	updateRowCount();
});
function updateRowCount(){
	rows  = db.execute('select count(*) as count from lists');
	while (rows.isValidRow())
	{
		count = rows.fieldByName("count");
		rows.next();
	};
	rows.close();
}
 tableview.addEventListener('delete', function(e) {
	db.execute("DELETE FROM lists WHERE id=?",e.row.id);
	updateRowCount();
 });
