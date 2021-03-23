class Question{
    constructor(){
        this.input1=createInput("Name")
        this.input2=createInput(" Enter Correct Answer")
        this.button=createButton("Play")
        this.button2=createButton("Submit");
        this.question=createElement('h3')
        this.option1=createElement('h3')
        this.option2=createElement('h3')
        this.option3=createElement('h3')
        this.option4=createElement('h3')
    }


 hide(){
     
         this.button.hide()
         this.input1.hide()      
 }
display(){
   
    var title=createElement('h2')
    title.html("My Quiz Game")
    title.position(180,0);
    this.input1.position(130,160)
    this.button.position(130,200)
   this.button.mousePressed(()=> {
       
        this.input1.hide()
        this.button.hide()
        contestant.name=this.input1.value()
        contestantCount+=1
        contestant.index=contestantCount
        contestant.update()
        contestant.updateCount(contestantCount)
   

        this.question.html("Question:- What starts and ends with the letter 'E',but has only one letter?" );
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);
        this.option3.html("3: Estimate");
        this.option3.position(150,140);
        this.option4.html("4: Example");
        this.option4.position(150,160);
    })
}



}