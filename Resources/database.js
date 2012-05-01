Ti.App.listDb = function(){
  var conn = Ti.Database.install('lists.sqlite','lists.sqlite');
  return {
    lists : {
      createTable : function(){
        conn.execute('CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY, content TEXT)');
      },
      dropTable: function(){
        conn.execute('DROP TABLE lists');
      },
      deleteAll:function(){
        conn.execute('DELETE FROM lists');
      },
      getAll:function(){
        var results = [];
        var resultSet = conn.execute('SELECT * FROM lists');
        while (resultSet.isValidRow()) {
          results.push({
            id: resultSet.fieldByName('id'),
            content: resultSet.fieldByName('content')
          });
          resultSet.next();
        }
        resultSet.close();

        return results;
      },
      remove:function(id){
        conn.execute("DELETE FROM lists WHERE id = ?", id);
        return conn.rowsAffected;
      },
      update:function(item) {
        conn.execute("UPDATE lists SET content = ? WHERE id = ?", item.content, item.id);
        return conn.rowsAffected;
      },
      count:function(){
        var count =0, 
            rows  = conn.execute('select count(*) as count from lists');
        while (rows.isValidRow())
        {
          count = rows.fieldByName("count");
          rows.next();
        }
        rows.close();
        return count;
      },
      insert:function(content,id){
        conn.execute('INSERT INTO lists (content,id) VALUES(?,?)',content,id);
        return conn.lastInsertRowId;
      }
    }
  };
}();
