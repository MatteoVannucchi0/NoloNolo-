function randomDate(start = STARTING_DATE, end = Date.now(), startHour = 0, endHour = 0) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
function afterNDays(startingDate, days) {
    return new Date(startingDate.getTime() + days * 24 * 60 * 60 * 1000)
}

function getRandomCustomer(customer){
    return customer[random(0, customer.length - 1)]
}

function getRandomEmployee(employees) {
    return employees[random(0, employees.length - 1)]
}

function getUnit(units) {
    return units[random(0, units.length - 1)]
}

function testAvailability(unit, rentals, from, to) {
    const unitRentals = rentals.filter(r => r.unit === unit);

    const rentalInPeriod = unitRentals.filter(x => {
        return (x.startDate <= from && x.expectedEndDate >= from)
            || (x.startDate <= to && x.expectedEndDate >= to)
            || (x.startDate >= from && x.expectedEndDate <= to)
    })

    console.log(rentalInPeriod)

    return rentalInPeriod.length === 0
}

function generateBill() {

}

const STARTING_DATE = new Date(2017, 0, 1);
const rentalState = {
    open: 'open',
    close: 'close',
    pending: 'pending',
}
const rentalStateArray = ['open', 'close', 'pending']

const rentalsGenerated = []

function generateRentals(customers, employees, units, rentals) {
    const state = rentalStateArray[random(0,rentalStateArray.length - 1)]
    const customer = getRandomCustomer(customers)

    let employee = undefined
    if(state === 'open' || state === 'close') {
        employee = getRandomEmployee(employees)
    }

    let bill = undefined
    if(state === 'close') {
        bill = generateBill()
    }

    const unit = getUnit(units, rentals)
    let prenotationDate = undefined
    let startDate = undefined
    let endDate = undefined
    let expectedEndDate = undefined
    do{
        prenotationDate = randomDate()
        startDate = randomDate(prenotationDate, afterNDays(prenotationDate, 30))
        expectedEndDate = endDate = randomDate(afterNDays(startDate, 1), afterNDays(startDate, 60))
    } while(!testAvailability(unit, rentals, startDate, endDate))


    
    const priceEstimation = {}
    const rental = {
        state: state,
        customer: customer,
        employee: employee,
        prenotationDate: prenotationDate,
        bill,
        startDate,
        endDate,
        priceEstimation,
        unit,
        expectedEndDate
    }

    console.log(rental)

    return rental
}


function generate(customers, employees, units, max) {
    for(let i = 0; i < max; i+=1) {
        rentalsGenerated.push(generateRentals(customers, employees, units, rentalsGenerated))
    }
    return rentalsGenerated
}


module.exports = {generate}