class Form {

    constructor() {
      this.nameInput = createInput("Enter Name Here");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    }

display(){

this.title.html("The Attack on Pearl Harbour")
this.title.position(600,100);

this.input.position(600,400);
this.button.position(600,600);

this.button.mousePressed(()=>{
    this.nameInput.hide();
    this.button.hide();
    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  });

}


}
