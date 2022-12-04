// function f1() {
//     const a = this;
//     return a;
// }
// const f2 = () => {
//     const a = this;
//     return a;
// }
// const f = f1;
// f();
// f2();
// f1.d = 20;
// console.log(f1.d);
// console.log(f1)
const rectangle = {
    width : 3,
    height: 5,
    square: function() {
        let a = this;
        return a;
    },
    perimeter: () => {
        let a = this;
        return a;
    }
}
rectangle.square();
rectangle.perimeter();