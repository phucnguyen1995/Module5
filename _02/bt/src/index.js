// happy coding 👻
// console.log("hello world");
// Bước 1: Khai báo một hàm trả về số fibonacci bằng cách sử dụng đệ quy
//
// Bước 2: Sử dụng vòng lặp để hiển thị các số fibonacci
//
// Bước 3: Khai báo biến sum = 0
//
// Bước 4: Thực hiện việc tính tổng các số fibonacc
// Cụ thể, các số đầu tiên của dãy Fibonacci là
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610...
function fibonaccySum(num) {
    if (num <= 2) {
        return 1;
    }
    return fibonaccySum(num - 1) + fibonaccySum(num - 2);
}
var total = 0;
for (var i = 1; i < 10; i++) {
    console.log(fibonaccySum(i));
    if (fibonaccySum(i)) {
        total += fibonaccySum(i);
    }
}
console.log("Tổng của 9 số đầu tiên : " + total);
