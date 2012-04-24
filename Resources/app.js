var data = [
    {title:'List Content 1'},
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

win1.open();