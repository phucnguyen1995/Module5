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
// 1, 1, 2, 3, 5, 8, 13, 21, 34,...

function fibo(num: number): number {
    if (num <= 2) {
        return 1;
    }
    return fibo(num - 1) + fibo(num - 2);
}
let total = 0;
for(let i = 1; i < 10; i++){
    console.log(fibo(i));
    if (fibo(i)){
        total += fibo(i);
    }
}
console.log("Tổng của 9 số đầu tiên : "+ total);








