let myTodos = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,
    
    addMeeting : function(meet){
        this.meetings = this.meetings + meet
    },

    meetingsDone : function(meet){
        this.meetDone = this.meetDone + meet
    },

    summary : function(){
       let meetLeft = this.meetings - this.meetDone;
      return ` you have ${meetLeft} meetings left`
    },

    reset : function(){
        this.meetings = 0;
        this.meetDone = 0;
    },
} 
 

myTodos.addMeeting(4);
myTodos.meetingsDone(2);
console.log(myTodos.summary());
console.log(myTodos);

myTodos.reset();
console.log(myTodos);



