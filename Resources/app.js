var data = [
    {title:'List Content 1', hasChild:true, toUrl:'window2.js'},
    {title:'List Content 2'},
    {title:'List Content 3'},
    {title:'List Content 4'}
];

// create table view
var tableview = Titanium.UI.createTableView({
    data:data
});

var win1 = Titanium.UI.createWindow({
     backgroundColor:'#fff'
});
//add table view to that object
win1.add(tableview);

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