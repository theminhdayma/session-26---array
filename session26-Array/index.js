// let st1 = "Khánh Huyền";
// let st2 = "Minh lớp trưởng";

// let stN = "Lê Anh Nuôi";

// let stList = new Array(st1, st2, stN);
// console.log(stList);

// let numberList = [2, 3,4,5,6,7,8,9]
// console.log(numberList);

// let randomList = ["Hello", 12, 20, true, false, []];
// console.log(randomList);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//index       0  1  2  3  4  5  6  7  8    ==> Chỉ số ( vị trí)
             // length / size (length - 1)
console.log("Độ dài mảng là: ", number.length); // độ dài mảng array 

console.log("number[0] = ", number[0]);
console.log("number[2] = ", number[2]);

// console.log("Đây là phần tử cuối cùng : " ,number.push(number));

// for(let i=0;i<=number.length -1 ; i++){
//     // i ======> 0 đến 8 (chỉ số)
//     // number[i] =======> 1 đến 9 (giá trị)
//     console.log(`number ${i} là: `,  number[i]);
// }

// for(let n of number){
//     console.log("Từng phần tử", n);
// }

// for(let index in number){
//     console.log(`Chỉ số là: `, index)
// }

let conVat = [
    "Chó",
    "Mèo",
    "Lợn",
    "Gà"
];

// console.log("Danh sách động vật hiện tại: ", conVat);
// //Create
// // 1. Thêm đầu (unshift)
// conVat.unshift("Cá sấu");
// console.log("Danh sách sau khi được thêm mới vào đầu: ", conVat);

// //2. Thêm cuối (push)
// conVat.push("Cá heo");
// console.log("Danh sách sau khi được thêm mới vào cuối: ", conVat);

// 3. Thêm vào vị trí bất kì (splice)
// conVat.splice(2, 1, "Cá mập");
// console.log("Danh sách sau khi được thêm mới vào vị trí bất kì: ", conVat);

// console.log("Danh sách động vật hiện tại: ", conVat);

// conVat[2] = "Lợn nái";
// // or
// conVat.splice(1, 1, "Mèo hoang");
// console.log("Danh sách sau khi được cập nhật: ", conVat);

//DELETE
console.log("Danh sách động vật hiện tại: ", conVat);
// 1. Xóa đầu ( shift)
conVat.shift();
console.log("Danh sách sau khi được xóa phần tử đầu: ", conVat);
// 2. Xóa cuối ( pop )
conVat.pop();
console.log("Danh sách sau khi được xóa phần tử cuối: ", conVat);
// 3. Xóa bất kỳ (splice)
conVat.splice(1, 1);
console.log("Danh sách sau khi được xóa phần tử bất kỳ: ", conVat);
