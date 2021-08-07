(function(){
    var button = document.getElementById("button");
    var question = document.getElementById("question");
    var questionNo = 1;
    var questionAnswered={
        "Area of Rectangle":"",
        "Area of Circle":"",
        "Area of Square": "",
        "Area of Triangle":""
    };
    var questionAnswers = {
        "Area of Rectangle":"width*height",
        "Area of Circle":"πr2",
        "Area of Square": "side2",
        "Area of Triangle":"1/2*base*height"
    };
    
    button.addEventListener("click",function(){
        questionNo++;
        if(questionNo>4){
            recordAnswers();
            getResult();
            return;
        }
        recordAnswers();
        render();
    })

    function recordAnswers(){
        var answerButton = document.getElementsByName("answer");
        var answer;
        for (var index = 0; index < answerButton.length; index++) {
            answerButton[index].checked ? answer=answerButton[index].value:0;
        }
        questionAnswered[question.innerHTML]=answer;
    }

    function getResult(){
        var points = 0;
        var values = Object.values(questionAnswered);
        var actualvalues = Object.values(questionAnswers);
        for (var index = 0; index < values.length; index++) {
            values[index]==actualvalues[index] ? points++:0;
        }
        alert("You got "+(points/4)*100+"%");
        location.reload();
    }

    function render(){
        question.innerHTML = Object.keys(questionAnswers)[questionNo-1];
        for (var index = 1; index < 5; index++) {
            var option = Object.values(questionAnswers)[index-1];
            var optionButton = document.getElementById("option"+index.toString());
            document.getElementById(index.toString()).innerHTML = option;
            optionButton.value = option;
            optionButton.checked = false;
        } 
        if(questionNo==4){
            button.innerHTML = "Submit";
        }
    }
    render();

})();