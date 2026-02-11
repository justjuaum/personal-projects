class Calculator{
    //add the value (item) to result in DOM.
    add(item){
        const result = document.querySelector(".result");
        if(result.innerHTML !== "0"){
            return result.innerHTML += item;
        }

        result.innerHTML = "";
        return result.innerHTML += item;
    }
    
    //add operators like +, -, *, /, ( or ) to result in DOM.
    addOperation(item){
        const result = document.querySelector(".result");
        const lastEntrie = this.checkLastEntrie();

        if(item === ")" && lastEntrie.lastEntrie !== "+"){
            return result.innerHTML += ")"; 
        }

        if(lastEntrie.bool){
            let modifiedResult = this.removeLastEntrie();
            switch(item){
                case "+" : modifiedResult += "+"; break;
                case "-" : modifiedResult += "-"; break;
                case "*" : modifiedResult += "*"; break;
                case "/" : modifiedResult += "/"; break;
                case "(" : modifiedResult += "*("; break;
            }
            return result.innerHTML = modifiedResult;
        }

        switch(item){
            case "+" : return result.innerHTML += "+";
            case "-" : return result.innerHTML += "-";
            case "*" : return result.innerHTML += "*";
            case "/" : return result.innerHTML += "/";
            case "(" : return result.innerHTML += "*(";
        }
    }

    //checks if de last entrie on result is a operator, case yes, remove the last item and substitues for a new operator.
    checkLastEntrie(){
        const result = document.querySelector(".result").innerHTML;
        let lastEntrie;
        for(let char of result){
            lastEntrie = char;
        }
        switch(lastEntrie){
            case "+" : return {bool: true, lastEntrie};
            case "-" : return {bool: true, lastEntrie};
            case "*" : return {bool: true, lastEntrie};
            case "/" : return {bool: true, lastEntrie};
            case "(" : return {bool: true, lastEntrie};
            default : return {bool: false, lastEntrie};
        }
    }

    //remove the last entrie in result element, if is a ( remove * too.
    removeLastEntrie(){
        const result = document.querySelector(".result").innerHTML;
        let currentResult = "";
        let lastEntrie = this.checkLastEntrie().lastEntrie;

        if(lastEntrie == "("){
            for(let i = 0; i < result.length-2; i++){
                return currentResult += result[i];
            }
        }
        for(let i = 0; i < result.length-1; i++){
            return currentResult += result[i];
        }
    }

    clearResult(){
        const result = document.querySelector(".result");
        result.innerHTML = "0";
    }

    getResult(){
        const result = document.querySelector(".result");
        try{
            return result.innerHTML = eval(result.innerHTML);
        } catch(e){
            return result.innerHTML = "Error."
        }
    }
}

const c = new Calculator;

