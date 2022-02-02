class Form{

  constructor(){

  }
  
      display(){
        var title=createElement("h2");
        title.html("Run Fasting");
        title.position(300,100);
        var input=createInput("name");
        input.position(300,250);
        var button=createButton("Entrar");
        button.position(300,300);
        var greeting=createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hola:  " + name);
            greeting.position(300,300);
        });
        
      }

}