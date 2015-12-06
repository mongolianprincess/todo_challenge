describe('toDoListController', function(){
  beforeEach(module('ToDoList'));

    var ctrl;

    beforeEach(inject(function($controller){
      ctrl = $controller('ToDoListController');
    }));

    it ('initializes with an empty add to to list',function(){
      expect(ctrl.addTask).toBeUndefined();
    });
});
