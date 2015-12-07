todo.controller('ToDoController', [function(){
  var self = this;
  self.todos = [
    {'title':'be happy','done': false}
  ];
  self.addTodo = function(){
    self.todos.push({'title':self.newTodo,'done':false})
    self.newTodo = ""
  }

  self.deleteTodo = function(item){
    var index = self.todos.indexOf(item);
    self.todos.splice(index,1);
  }

  self.clearCompleted = function(){
    self.todos = self.todos.filter(function(item){
      return !item.done
    })
  }
}]);
