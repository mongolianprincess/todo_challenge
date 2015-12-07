describe('toDoController', function(){
  beforeEach(module('ToDo'));

    var ctrl;

    beforeEach(inject(function($controller){
      ctrl = $controller('ToDoController');
    }));

    it ('initializes with an empty add task to list',function(){
      expect(ctrl.addTodo).toBeUndefined();
    });

    it ('can add at task', function(){

      ctrl.newTodo = "be happy";
      ctrl.addTodo();
      expect(ctrl.todos.title).toEqual("be happy")
    });
});
