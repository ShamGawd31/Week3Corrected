//asking the question
let question =Number(prompt("Enter a number"));


//global variable
let result="";
let result2="";
let result3="";


if (isNaN(question)){
    result="Number 1 is Invalid"
}else if(question){
    let question2 = Number(prompt("Enter a second number"));
    if (isNaN(question2)){
        result2="Number 2 is invalid"
    }else if(question2){
        let question3 = prompt("Enter an Operator (+,-,*,/)");
        if(question3==="+"){
            result3= question+question2
        }
        else if(question3==="-"){
            result3=question-question2
        }
        else if(question3==="/") {
            result3 = question / question2
        }
        else if(question3==="*"){
            result3=question*question2
        }
        else{
            result3="Operator is invalid"
        }
    }
}



//conditional statement
//if(question==="Good"||question==="good") {
//result = "A good day"
//}else if(question=="awful"||question==="Awful"){
//  result="Holy cow I'm sorry"
//}else{
//result="Im sorry your day was not good"
//}

//write answer into body tag
document.body.innerHTML=result+"   "+result2+""+result3;