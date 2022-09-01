// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

/*
const returnFirstTwoDrivers = (driverArray) => {
    return `${driverArray[0]} ${driverArray[1]}`;
}
*/

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareMultiplier = createFareMultiplier(2);

/*
function createFareMultiplier(param) {
    const fareMultiplier = function() {
        return function();
    }}
*/

function createFareMultiplier(param) {
    return function fareMultiplier(param) {
        return param * param;
    }
}

const fareDoubler = function(fare) {
    return fare * 2;
}

const fareTripler = function(fare) {
    return fare * 3;
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}