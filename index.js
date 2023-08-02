// code your solution here
function saturdayFun(activity = 'roller-skate'){
   
    return `This Saturday, I want to ${activity}!`;
    
}


function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`;
};

function wrapAdjective(adj = "*") {
    return function (message) {
        return `You are ${adj}${message}${adj}!`;
    };
}

const wrappedAdjective = wrapAdjective("!!!"); 
console.log(wrappedAdjective("a wonderful person"));