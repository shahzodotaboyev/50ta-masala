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

// function getDividersNumberAndSum(N) {    
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











