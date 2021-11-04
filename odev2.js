// Asal sayı
function isPrimeNumber(...numbers){
    let a = 0;
    for(let i = 0; i<numbers.length;i++){

        for(let j = 2; j < numbers[i];j++){
            if(numbers[i] % j == 0){
                a++;
            }
        }
        if(a>0){
            console.log(numbers[i] + " is not prime number.")
        }
        else
        console.log( numbers[i] + "  is prime number.");
    } 
}

isPrimeNumber(11,10,15);

// Arkadaş sayılar
function isFriendNumbers(number1, number2){
    let total1 = 0;
    let total2 = 0;
    for(let i = 1; i<number1;i++){
        if(number1 %i == 0){
            total1 += i;
        }
    }

    for(let j = 1; j< number2; j++){
        if(number2 % j == 0){
            total2 += j;
        }
    }

    if(total1 == number2 && total2 == number1){
        console.log(number1 + " and " + number2 + " are friend numbers.")
    }

    else{
        console.log(number1 + " and " + number2 + " are not friend numbers.")
    }

}

isFriendNumbers(220,284);

// 1000'e kadar olan mükemmel sayılar
let perfectNumbers = [];
for(let i = 1;i <=1000;i++){
    let total = 0;
    for(let j = 1;j <=i; j++){
        if(i%j == 0){
          total+=j;
        }
    }
   if((i*2) == total){
      perfectNumbers.push(i);
   }
}
    console.log("Perfect numbers are : " + perfectNumbers);

// 1000'e kadar olan asal sayılar
let primeNumbers = [];
for(let i = 2; i<= 1000; i++){
    let b = 0;
    for(let j = 2;j<i;j++){
        if(i%j == 0){
           b++;
           break;
        } 
    }
    if(b==0){
        primeNumbers.push(i);
    }  
}

console.log("Prime numbers are : " + primeNumbers);

