// 1. Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin. jsda
// let num = 5;
// if (num > 0) {
//     num = num + 1;
// } else {
//     num = num - 2;
// }
// console.log(num);

//2. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.
// let year = 2000;
// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     console.log("Kabisa yil");
// } else {
//     console.log("Kabisa yil emas");
// }


//3 a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// function power(a, n) {
//     if (n === 0) {
//         return 1;
//     }
//     if (n < 0) {
//         return 1 / power(a, -n);
//     }
//     return a * power(a, n - 1);
// }
// console.log(power(2, 3));
// console.log(power(2, -3));
// console.log(power(2, 0));


// 4 Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// function sortABC(a, b, c) {
//     let arr = [a, b, c];
//     arr.sort((a, b) => a - b);
//     return arr;
// }
// console.log(sortABC(10, 5, 8));

//  N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM

//5 function getDividersNumberAndSum(N) {
//     let dividers = [];
//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             dividers.push(i);
//         }
//     }
//     return [dividers.length, dividers.reduce((a, b) => a + b
//     )];
// }
// console.log(getDividersNumberAndSum(12));


// 6
// Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)

// function rectangle(a, b) {
//     let area = a * b;
//     let perimetr = 2 * (a + b);
//     return { area, perimetr };
// }

// const javop = rectangle(6, 9);
// console.log(`Yuza: ${javop.area}, Perimetr: ${javop.perimetr}`);


// 7
// function sign(n) {
//     if (n > 0) {
//         console.log("1");
//     } else if (n < 0) {
//         console.log("-1");
//     }else{
//         console.log("0");
//     }
// }
// sign(5)
// sign(0)
// sign(-8)

// 8
//A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY sumRange(8, 10) => 27 
// function sumRange(A, B) {
//     if (A > B) {
//         return 0;
//     }
//     return (B - A + 1) * (A + B) / 2
// }
// console.log(sumRange(8, 10)); 
// // ---------------Function---------------
// Func-1
// function power(a, n) {
//     return a ** n;

// }
// console.log(power(3,5));

// Func-2
// function mean(a, b){
//     let arifmetik =  (a + b) / 2;
//     let  geometric = Math.sqrt(a * b);
//     return [arifmetik, geometric];
// }
// console.log(mean(12,48));

// Func-3
// function sign(n) {
//     if (n > 0) {
//         return 1;
//     } else if (n < 0) {
//         return -1;
//     }else{
//         return 0;
//     }
// }
// console.log(sign(0));

// Func-4
// function numberOfRoots(A, B, C) {
//     let D = B ** 2 - 4 * A * C;
//     if (D > 0) {
//         return 2;
//     } else if (D == 0) {
//         return 1;
//     }else{
//         return  0;
//     }
// }
// console.log(numberOfRoots(1, -6, 9));

// Func-5
// function areaCircle(R) {
//     let area = 3.14 * R ** 2;
//     return area;
// }
//  console.log(areaCircle(5));

// Func-6
// function sumRange(A, B) {
//     if (A > B) {
//         return 0;
//     }
//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }
//     return sum;

// }
// console.log(sumRange(8, 10));

// Func-7
// function calc(A, B, S) {
//     switch (S) {
//         case '+':
//             return A + B;
//         case '-':
//             return A - B;
//         case '*':
//             return A * B;
//         case '/':
//             return A / B;
//         default:
//             return 0
//     }
// }
// console.log(calc(10, 15, "*"));
// console.log(calc(10, 15, "-"));
// console.log(calc(10, 15, "+"));
// console.log(calc(10, 15, "/"));


// Func-8

// function isEven(K) {
//     if (K % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(10));
// console.log(isEven(11));

// Func-9
// function sortABC(a, b, c) {
//     const numbers = [a, b, c]
//     numbers.sort((x, y) => x - y);
//     return `${numbers[0]}, ${numbers[1]}, ${numbers[2]}`;
// }
// console.log(sortABC(5, 2, 15));

// Func-10
// function isPowerN(K, N) {
//     if (K <= 0 || N <= 1) {
//         return false;
//     }

//     let power = 1;
//     while (power < K) {
//         power *= N;
//     }

//     return power === K;
// }
// console.log(isPowerN(8, 2));
// console.log(isPowerN(8,3));

// Func-11
// function isPrime(N) {
//     if (N <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(N); i++) { 
//         if (N % i === 0) { 
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(4)); 
// console.log(isPrime(5)); 


// Func-12
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) { 
//             return false;
//         }
//     }
//     return true; 
// }                                                                                                              


// function numberOfPrime(N) {
//     let count = 0; 
//     for (let i = 2; i <= N; i++) { 
//         if (isPrime(i)) { 
//             count++;
//         }
//     }
//     return count;
// }


// console.log(numberOfPrime(10));

// Func-13
// function digitCount(K) {
//     return K.toString().length; 
// }

// function digitNth(K, N) {
//     if (K <= 0 || N <= 0) return -1;  
//     const count = digitCount(K);  

//     if (N > count) return -1;    
//     return parseInt(K.toString()[N - 1]); 
// }


// console.log(digitNth(105782, 5)); 


// func-14
// function inverseNumber(N) {
//     const reversedString = N.toString().split('').reverse().join('');
//     return parseInt(reversedString, 10);
// }

// console.log(inverseNumber(56814));



//    Func-16
// function factorial(N) {
//     if (N < 0) return 1; 
//     let result = 1;

//     for (let i = 1; i <= N; i++) {
//         result *= i; 
//     }

//     return result; 
// }

// console.log(factorial(5)); 

// Func-17
// function getSum3(N) {
//     let sum = 0; 

//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) { 
//             sum += i; 
//         }
//     }

//     return sum; 
// }

// console.log(getSum3(15));


// Func-18

// function sumOddEven(N) {
//     let evenSum = 0;
//     let oddSum = 0; 

//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             evenSum += i; 
//         } else {
//             oddSum += i;
//         }
//     }

//     return `${evenSum}, ${oddSum}`; 
// }

// console.log(sumOddEven(10));

// func-19
// function invertTime(H, M, S) {
//     let totalSeconds = H * 3600 + M * 60 + S;
//     return totalSeconds;
// }
// console.log(invertTime(1,0,0));

// Func-20
// function decTime(H, M, S) {
//     S--;
//     if (S < 0) {
//         S = 59;
//         M--;

//         if (M < 0) {
//             M = 59;
//             H--;

//             if (H < 0) {
//                 H = 0;
//             }
//         }
//     }

//     return `${String(H).padStart(2, '0')}:${String(M).padStart(2, '0')}:${String(S).padStart(2, '0')}`;
// }

// console.log(decTime(0, 6, 40));
// Func-21
// function isLeapYear(Y) {
//     if (Y % 4 === 0) {
//         if (Y % 100 === 0) {
//             if (Y % 400 === 0) {
//                 return true;
//             }
//             return false; 
//         }
//         return true; 
//     }
//     return false;

// }
// console.log(isLeapYear(2024));

// Func-22
// function isLeapYear(Y) {
//     if (Y % 4 === 0) {
//         if (Y % 100 === 0) {
//             if (Y % 400 === 0) {
//                 return true;
//             }
//             return false;
//         }
//         return true;
//     }
//     return false;
// }

// function monthDays(M, Y) {
//     const daysInMonth = [0, 31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     return daysInMonth[M];
// }

// console.log(monthDays(2, 2024));


// Func-23
// function isLeapYear(Y) {
//     if (Y % 4 === 0) {
//         if (Y % 100 === 0) {
//             if (Y % 400 === 0) {
//                 return true; 
//             }
//             return false;
//         }
//         return true; 
//     }
//     return false;
// }

// function monthDays(M, Y) {
//     const daysInMonth = [0, 31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return daysInMonth[M];
// }

// function prevDate(D, M, Y) {
//     D--; 

//     if (D === 0) {
//         M--; 
//         if (M === 0) { 
//             M = 12;
//             Y--;
//         }
//         D = monthDays(M, Y);
//     }

//     return `${String(D).padStart(2, '0')}.${String(M).padStart(2, '0')}.${Y}`;
// }

// console.log(prevDate(10, 1, 2024)); 


// Func-24
// function isLeapYear(Y) {
//     if (Y % 4 === 0) {
//         if (Y % 100 === 0) {
//             if (Y % 400 === 0) {
//                 return true;
//             }
//             return false; 
//         }
//         return true; 
//     }
//     return false; 

// function monthDays(M, Y) {
//     const daysInMonth = [0, 31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return daysInMonth[M];
// }

// function nextDate(D, M, Y) {
//     D++; 

//     if (D > monthDays(M, Y)) {
//         D = 1;
//         M++; 
//         if (M === 13) { 
//             M = 1;
//             Y++;
//         }
//     }

//     return `${String(D).padStart(2, '0')}.${String(M).padStart(2, '0')}.${Y}`;
// }

// console.log(nextDate(10, 3, 2022)); 


// func-25
// function getDividersNumberAndSum(N) {
//     let count = 0;
//     let sum = 0;

//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             count++;
//             sum += i;
//         }
//     }

//     return `${count}, ${sum}`;
// }

// console.log(getDividersNumberAndSum(12)); 


