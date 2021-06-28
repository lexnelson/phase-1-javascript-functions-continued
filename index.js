// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

/*function wrapAdjective(modifier='*'){
    const partOne = 'You are'
    innerFunction(adjective='special') {
        console.log(`${partOne} ${modifier}${adjective}${modifier}`);
    }
}

const encouragingAdjectiveFunction = wrapAdjective(modifier='*') {
    innerFunction(example='special'){
        return `You are ${modifier}${example}`
    }
}*/

function wrapAdjective(flair='*'){
    return function(adjective='special') 
    {
        return `You are ${flair}${adjective}${flair}!`;
    }
}