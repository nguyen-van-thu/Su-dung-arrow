var inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
];
// let fillMachine = inventory.filter((obj) => obj.type === "machine");
// console.log(fillMachine);
// let fillMachine1 = fillMachine.map((obj) => obj.value);
// console.log(fillMachine1);
// // let fillMachine2 = fillMachine1.reduce((thu, phat) => thu + phat);
// // console.log(fillMachine2);
//
//
var totalMachineValue = function (arr) {
    var sum = 0;
    arr.forEach(function (element) {
        if (element.type === "machine") {
            sum += element.value;
        }
        return sum;
    });
    return sum;
};
console.log(totalMachineValue(inventory));
