# Parking Lot Hubb Application
- A Javascript Command Line Interface application to manage parking lot in a public places
- By Muhammad Hafidz Hubbusysyuhada as Assessment Project for DKatalis (Bank Jago)
- Git repository : https://github.com/hubbusysyuhada/Parking-Lot-DKatalis.git
  
## Features :
 - Create parking lot with customized ammount of available spaces
 - Register a parked car with it's vehicle number
 - Empty current slot if a car leaves parking lot
 - Check status of current parking lot
  
# Commands
  
# Using Docker
> Run this file test using docker

1. Pull docker image from repository
```json
docker pull hubbusysyuhada/parking_lot_dkatalis:latest
```

2. Run the test
```json
docker run hubbusysyuhada/parking_lot_dkatalis
```

# Using Node Package Manager

## Run all test
> Run all test and case given by the DKatalis

```json
npm test
```

## Create parking lot
> Register a new parked car with it's vehicle registration number

node app park <vehicle registration number>
```json
node app park KA-01-HH-3141
```

> if success will return
```json
Allocated slot number: <slot number taken by the car>
```

> if failed will return
```json
Sorry, parking lot is full
```

## Park a car
> Create parking lot with specific ammount of lot

node app create_parking_lot <desired number>
```json
node app create_parking_lot 10
```

> if success will return
```json
Created parking lot with 10 slots
```

> if failed will return
```json
Please specify number of parking lots available
```

## Leave parking lot
> A car with registered vehicle number leaves the parking lot

node app leave <vehicle registration number> <total hours>
```json
node app leave KA-01-HH-1234 4
```

> if success will return
```json
Registration number <vehicle registration number> with Slot Number <slot taken by the vehicle> is free with Charge <total money needs to be paid>
```

> if failed will return
```json
Registration number <vehicle registration number> not found
```

## Status
> Check all current filled slot in parking lot

node app status
```json
node app status
```

> if there are at least 1 car parked in the parking lot will return
```json
Slot No.    Registration No.
1.          KA-09-HH-0987
2.          KA-01-HH-9999
3.          CA-09-IO-1111
4.          KA-01-HH-7777
5.          KA-01-HH-2701
6.          KA-01-P-333
<slot no.>  <vehicle registration no.>
```

> if there is no car parked in the parking lot will return
```json
Parking lot is empty
```