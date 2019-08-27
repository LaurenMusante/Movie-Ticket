function Ticket(movie, date, age, name){
  this.movie = movie;
  this.date = date;
  this.age = age;
  this.name = name;
  this.price = "";
}

  // Ticket.prototype.calculatePrice = function(age){
  //   if (this.age <=18){
  //     this.price = "$5";
  //
  //   } else if (this.age > 18 && this.age < 65){
  //     this.price = "$10";
  //
  //   } else {
  //     this.price = "$6";
  //   }
  // }

  Ticket.prototype.calculatePrice = function() {
    if(this.age < 18) {
      this.price = 5;
    } else if(this.age >= 65) {
      this.price = 6;
    } else {
      this.price = 10
    }

  }



// UI stuff
function showTicket(ticketId) {
  $(".ticketDetails").show();
  $(".yourMovie").html(ticket.movie);
  $(".yourDate").html(ticket.date);
  $(".yourAge").html(ticket.age);
  $(".yourName").html(ticket.name);
  $(".yourPrice").html(ticket.price);
}



$(document).ready(function(){
  $(".ticketInfo").submit(function(event){
    event.preventDefault();
    var inputtedMovie = $("select[name=movieType] option:selected").val();
    var inputtedDate = $("input[name=date]").val();
    var inputtedAge = $("#age").val()
    var inputtedName = $("#name").val()
    var newTicket = new Ticket (inputtedMovie, inputtedDate, inputtedAge, inputtedName);
    $(".ticketDetails").show();
    console.log(inputtedAge);
    console.log(newTicket);








  });
});
