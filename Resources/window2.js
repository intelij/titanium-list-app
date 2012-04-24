var data = [
    {title:'Window 2 Content 1'},
    {title:'Window 2 Content 2'},
    {title:'Window 2 Content 3'},
    {title:'Window 2 Content 4'}
];
 
// create table view
var tableview = Titanium.UI.createTableView({
    data:data
});

Titanium.UI.currentWindow.add(tableview)