const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let log = console.log
// Code your solution here

const totalBatteries = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue);

log(totalBatteries);