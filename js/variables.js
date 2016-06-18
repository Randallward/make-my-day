////////////// VARIABLE DECLARATION ////////////////////////
var Choices = {
    dateNights: [{
        parking: {
            name: 'Perry Brooks Garage',
            address: '720 Brazos St, Austin, TX 78701',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28',
        },
        restaurant: {
            name: 'Roaring Fork',
            address: '701 Congress Ave, Austin, TX 78701',
            labelLetter: 'R',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'BaseCamp',
            address: '120 West 5th Street, Austin, TX 78701',
            labelLetter: 'B',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Perry Brooks Garage',
            address: '720 Brazos St, Austin, TX 78701',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Second Bar + Kitchen',
            address: '200 Congress Ave, Austin, TX 78701',
            labelLetter: 'S',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'Garage',
            address: '503 Colorado Street, Austin, TX 78701',
            labelLetter: 'G',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Austin Convention Center Parking',
            address: '201 E 2nd St, Austin, TX 78701',
            labelLetter: 'A',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Sway',
            address: '1417 S 1st St,Austin,TX 78704',
            labelLetter: 'S',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'Osteria Pronto',
            address: '110 E 2nd St, Austin, TX 78701',
            labelLetter: 'O',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78704'
    }, {
        parking: {
            name: 'Extended Restaurant Parking',
            address: '401 East 53rd St, Austin, TX 78751',
            labelLetter: 'E',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Foreign and Domestic',
            address: '306 East 53rd Street, Austin, TX 78751',
            labelLetter: 'F',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'Drink Well',
            address: '207 East 53rd Street, Austin, TX 78751',
            labelLetter: 'D',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78751'
    }, {
        parking: {
            name: 'The Domain Parking Garage',
            address: '3221 Feathergrass Ct, Austin, TX 78758',
            labelLetter: 'D',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Maggiano\'s Little Italy',
            address: '10910 Domain Dr #100, Austin, TX 78759',
            labelLetter: 'M',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'iPic Theaters',
            address: '3225 Amy Donovan Plaza, Austin, TX 78758',
            labelLetter: 'i',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78759'
    }],
    totallyAustin: [{
        parking: {
            name: 'First Baptist Church Parking Garage',
            address: '811 Trinity St, Austin, TX 78701',
            labelLetter: 'F',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Stubbs BBQ',
            address: '801 Red River St, Austin, TX 78701',
            labelLetter: 'S',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJSVyqJ6S1RIYRdx8PPPRl9Is'
        },
        bar: {
            name: 'Handle Bar',
            address: '121 E 5th St, Austin, TX 78701',
            labelLetter: 'H',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJixveLgi1RIYRg-FziMQPbwk'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Multilevel Parking Garage',
            address: '1407 Eva St, Austin, TX 78704',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Gueros',
            address: '1412 South Congress Avenue, Austin, TX 78704',
            labelLetter: 'G',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJSVyqJ6S1RIYRdx8PPPRl9Is'
        },
        bar: {
            name: 'The Continental Club',
            address: '1315 South Congress Avenue, Austin, TX 78704',
            labelLetter: 'C',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJixveLgi1RIYRg-FziMQPbwk'
        },
        zipCode: '78704'
    }, {
        parking: {
            name: 'Austin Convention Center Parking',
            address: '201 E 2nd St, Austin, TX 78701',
            labelLetter: 'A',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Bangers Sausage House and Beer Garden',
            address: '79 Rainey Street, Austin, TX 78701',
            labelLetter: 'B',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJSVyqJ6S1RIYRdx8PPPRl9Is'
        },
        bar: {
            name: 'Sup ATX Paddle Board Rentals',
            address: '1541 West Cesar Chavez, Austin, TX 78703',
            labelLetter: 'S',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJixveLgi1RIYRg-FziMQPbwk'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Palmer Events Center',
            address: '900 Barton Springs Rd, Austin, TX 78704',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Chuy\'s',
            address: '1728 Barton Springs Rd, Austin, TX 78704',
            labelLetter: 'C',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJSVyqJ6S1RIYRdx8PPPRl9Is'
        },
        bar: {
            name: 'Zach Theatre',
            address: '1510 Toomey Rd, Austin, TX 78704',
            labelLetter: 'Z',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJixveLgi1RIYRg-FziMQPbwk'
        },
        zipCode: '78704'
    }, {
        parking: {
            name: 'Palmer Events Center',
            address: '900 Barton Springs Rd, Austin, TX 78704',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Terry Black\'s Barbecue',
            address: '1003 Barton Springs Rd, Austin, TX 78704',
            labelLetter: 'T',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJSVyqJ6S1RIYRdx8PPPRl9Is'
        },
        bar: {
            name: 'Peter Pan Mini Golf',
            address: '1207 Barton Springs Rd, Austin, TX 78704',
            labelLetter: 'P',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJixveLgi1RIYRg-FziMQPbwk'
        },
        zipCode: '78704'
    }],
    happyHour: [{
        parking: {
            name: 'Village Shopping Center',
            address: '2700 W Anderson Ln # 308, Austin, TX 78757',
            labelLetter: 'V',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Cover 3',
            address: '2700 W. Anderson Ln. Ste #202, Austin, TX 78757',
            labelLetter: 'C',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'Alamo Drafthouse',
            address: '2700 West Anderson Lane Suite #701, Austin, TX 78757',
            labelLetter: 'A',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJixveLgi1RIYRg-FziMQPbwk'
        },
        zipCode: '78757'
    }, {
        parking: {
            name: 'Austin Convention Center Parking',
            address: '201 E 2nd St, Austin, TX 78701',
            labelLetter: 'A',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'The Red Room Lounge',
            address: '306 E 3rd St, Austin, TX 78701',
            labelLetter: 'R',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'Shangri-Lar',
            address: '1016 East Sixth Street, Austin, TX 78702',
            labelLetter: 'S',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'The Domain Parking Garage',
            address: '11501 Domain Dr, Austin, TX 78701',
            labelLetter: 'D',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Copper Restaurant & Dessert Lounge',
            address: '3401 Esperanza Crossing, Austin, TX 78758',
            labelLetter: 'C',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'Topgolf',
            address: '2700 Esperanza Crossing, Austin, TX 78758',
            labelLetter: 'T',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78758'
    }, {
        parking: {
            name: 'Premium Parking P3005',
            address: '500 W 5th St, Austin, TX 78701',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'The Roosevelt Room',
            address: '307 W 5th St, Austin, TX 78701',
            labelLetter: 'R',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'The Volstead Lounge',
            address: '1500 E 6th St, Austin, TX 78702',
            labelLetter: 'V',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Central Parking',
            address: ' 707 East 7th St, Austin, TX 78701',
            labelLetter: 'C',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        restaurant: {
            name: 'Easy Tiger',
            address: '709 E 6th St, Austin, TX 78701',
            labelLetter: 'E',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
        },
        bar: {
            name: 'Piranha Killer Sushi',
            address: '207 San Jacinto Blvd, Austin, TX 78701',
            labelLetter: 'P',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
        },
        zipCode: '78701'
    }]
}