// console.log('hello');
var exampleType = null;
console.log(typeof exampleType);

var number1 = 71.25479863225;
var number2 = 52.569855485494;
var result = number1 + number2;
console.log(parseFloat(result).toFixed(2))
// console.log(parseInt (number));


/*
0 - 32 = F Grade ;
33 - 39 = D Grade ;
40 - 49 = C Grade ;
50 - 59 = B Grade ;
60 - 69 = A- Grade ;
70 - 79 = A Grade ;
80 - 95 = A+ Grade ;
95 - 100 = Golden A+ Grade ;
*/ 

// var result = 35 ;

// if ( result > 0 && result < 32 ) {
//     console.log("Sorry, You just failed in the exam");
// }

// else if( result >= 33 && result <40){
//     console.log('You score "D" Grade in this exam');
// }

// switch
// Switch, Case, Break, Default

var name = 'Hero'

switch( name ){
    case 'Rahim':
        console.log("'Wow! It's Rahim");
    break;
    case 'Abdul':
        console.log("Wow! It's Abdul Rahim Vai.");
    break;
    case 'Hero' :
        console.log("Wow! Tumie amr sei 'Hero'");
    break;
    default :
        console.log("Don't Know")
    
}