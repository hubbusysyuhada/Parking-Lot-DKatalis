const fs = require('fs')
const database = require('./database.json').parking_lot
const input = process.argv.splice(2)

if (input[0] === 'create_parking_lot') {
    if (!input[1]) console.log('Please specify number of parking lots available');
    else {
        let parking_lot = []
        for (let i = 0; i < input[1]; i++) {
            parking_lot.push('')
        }
        console.log(`Created parking lot with ${input[1]} slots`)
        fs.writeFileSync('./database.json',JSON.stringify({parking_lot}, null, 2), null)
    }
} else if (input[0] === 'park') {
    let currentParkingLot = JSON.parse(JSON.stringify(database))
    let slotTaken = 0
    let flag = false
    for (let i = 0; i < currentParkingLot.length; i++) {
        if (currentParkingLot[i] === '') {
            flag = true
            slotTaken = i + 1
            currentParkingLot[i] = input[1]
            break
        }
    }
    if (!flag) console.log('Sorry, parking lot is full')
    else {
        fs.writeFileSync('./database.json',JSON.stringify({parking_lot: currentParkingLot}, null, 2))
        console.log('Allocated slot number:', slotTaken);
    }
} else if (input[0] === 'leave') {
    let currentParkingLot = JSON.parse(JSON.stringify(database))
    const plate_number = input[1]
    const duration = input[2]
    const totalToBePaid = calculateTariff(duration)
    const slot = currentParkingLot.indexOf(plate_number) + 1
    if (!duration) console.log("Please specify number of hours the car parked")
    else {
        if (!currentParkingLot[slot - 1]) console.log(`Registration number ${plate_number} not found`)
        else {
            currentParkingLot[slot - 1] = ""
            fs.writeFileSync('./database.json', JSON.stringify({parking_lot: currentParkingLot}, null, 2))
            console.log(`Registration number ${plate_number} with Slot Number ${+slot} is free with Charge ${totalToBePaid}`)
        }
    }
} else if (input[0] === 'status') {
    let temp = 'Slot No.    Registration No.'
    let checker = false
    database.forEach((registration, index) => {
        if (registration) {
            checker = true
            temp += `\n${index + 1}.          ${registration}`
        }
    })
    if (checker) console.log(temp);
    else console.log('Parking lot is empty');
}

function calculateTariff (int) {
    if (int <= 2) return 10
    else {
        return ((int - 2) * 10) + 10
    }
}