////////////// VARIABLE DECLARATION ////////////////////////
var Choices = {
    dateNights: [{
        parking: {
            name: 'Perry Brooks Garage',
            address: '720 Brazos St, Austin, TX 78701',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJXUecQqe1RIYRoSPukdpTk-Y',
        },
        restaurant: {
            name: 'Roaring Fork',
            address: '701 Congress Ave, Austin, TX 78701',
            labelLetter: 'R',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ1XlZ4Qm1RIYR4rpevy6Ybs4'
        },
        bar: {
            name: 'BaseCamp',
            address: '120 West 5th Street, Austin, TX 78701',
            labelLetter: 'B',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJIzM0rAm1RIYR-OnlASdacUA'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Perry Brooks Garage',
            address: '720 Brazos St, Austin, TX 78701',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJXUecQqe1RIYRoSPukdpTk-Y'
        },
        restaurant: {
            name: 'Second Bar + Kitchen',
            address: '200 Congress Ave, Austin, TX 78701',
            labelLetter: 'S',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJjxgwfgi1RIYRFkkL2iIIb8g'
        },
        bar: {
            name: 'Garage',
            address: '503 Colorado Street, Austin, TX 78701',
            labelLetter: 'G',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJWdi3AAm1RIYRVOzVjpc3hOQ'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Austin Convention Center Parking',
            address: '201 E 2nd St, Austin, TX 78701',
            labelLetter: 'A',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ3wMgaai1RIYRVZMKbj5DQTA'
        },
        restaurant: {
            name: 'Sway',
            address: '1417 S 1st St,Austin,TX 78704',
            labelLetter: 'S',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJX5qi8OK0RIYR4SjE2J7x0_Y'
        },
        bar: {
            name: 'Osteria Pronto',
            address: '110 E 2nd St, Austin, TX 78701',
            labelLetter: 'O',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ65Af3ge1RIYR3TKbll9BteA'
        },
        zipCode: '78704'
    }, {
        parking: {
            name: 'Extended Restaurant Parking',
            address: '401 East 53rd St, Austin, TX 78751',
            labelLetter: 'E',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJlWVeRRPKRIYRQOh6zIKV2Gs'
        },
        restaurant: {
            name: 'Foreign and Domestic',
            address: '306 East 53rd Street, Austin, TX 78751',
            labelLetter: 'F',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJEaO0VhPKRIYRmmIiuYiG3hw'
        },
        bar: {
            name: 'Drink Well',
            address: '207 East 53rd Street, Austin, TX 78751',
            labelLetter: 'D',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJc262qWzKRIYRxo9PBUampxk'
        },
        zipCode: '78751'
    }, {
        parking: {
            name: 'Parking at the Domain',
            address: '3221 Feathergrass Ct, Austin, TX 78758',
            labelLetter: 'D',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJBTs97HHMRIYRIAQ_ZGynxHc'
        },
        restaurant: {
            name: 'Maggiano\'s Little Italy',
            address: '10910 Domain Dr #100, Austin, TX 78759',
            labelLetter: 'M',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJwyDI93bMRIYR38GEET3DD3Q'
        },
        bar: {
            name: 'iPic Theaters',
            address: '3225 Amy Donovan Plaza, Austin, TX 78758',
            labelLetter: 'i',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJpUngCXHMRIYRzVOHmE8OiDI'
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
            placeID: 'ChIJKdm99q61RIYRvCx0OZmnIKA'
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
            placeID: 'ChIJjeU7Hf20RIYRBpv75o2vFgQ'
        },
        restaurant: {
            name: 'Gueros',
            address: '1412 South Congress Avenue, Austin, TX 78704',
            labelLetter: 'G',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ14gY_Py0RIYRUTA0uLXWlEw'
        },
        bar: {
            name: 'The Continental Club',
            address: '1315 South Congress Avenue, Austin, TX 78704',
            labelLetter: 'C',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJJUbJuv20RIYRpFyFb-IiSZo'
        },
        zipCode: '78704'
    }, {
        parking: {
            name: 'Austin Convention Center Parking',
            address: '201 E 2nd St, Austin, TX 78701',
            labelLetter: 'A',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ3wMgaai1RIYRVZMKbj5DQTA'
        },
        restaurant: {
            name: 'Bangers Sausage House and Beer Garden',
            address: '79 Rainey Street, Austin, TX 78701',
            labelLetter: 'B',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJ20zQ16u1RIYRHXxs8v4BacY'
        },
        bar: {
            name: 'Lustre Pearl',
            address: '94 Rainey St, Austin, TX 78701',
            labelLetter: 'L',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJUz_DDam1RIYRm2VVEesZZp4'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Palmer Events Center',
            address: '900 Barton Springs Rd, Austin, TX 78704',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJjQrDOBu1RIYRmzNTfmMEHCQ'
        },
        restaurant: {
            name: 'Terry Black\'s Barbecue',
            address: '1003 Barton Springs Rd, Austin, TX 78704',
            labelLetter: 'T',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJZSqCDhu1RIYRx1iRoCvCOsA'
        },
        bar: {
            name: 'Peter Pan Mini Golf',
            address: '1207 Barton Springs Rd, Austin, TX 78704',
            labelLetter: 'P',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJbVDq1Bu1RIYRY-2-6-78Fj8'
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
            placeID: 'ChIJAdEIt6XLRIYRm77jyxKFgo0'
        },
        restaurant: {
            name: 'Cover 3',
            address: '2700 W. Anderson Ln. Ste #202, Austin, TX 78757',
            labelLetter: 'C',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJAdEIt6XLRIYRSi2zflsJlRo'
        },
        bar: {
            name: 'Alamo Drafthouse',
            address: '2700 West Anderson Lane Suite #701, Austin, TX 78757',
            labelLetter: 'A',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJAdEIt6XLRIYRoGxXzpQ8hJM'
        },
        zipCode: '78757'
    }, {
        parking: {
            name: 'Austin Convention Center Parking',
            address: '201 E 2nd St, Austin, TX 78701',
            labelLetter: 'A',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJ3wMgaai1RIYRVZMKbj5DQTA'
        },
        restaurant: {
            name: 'The Red Room Lounge',
            address: '306 E 3rd St, Austin, TX 78701',
            labelLetter: 'R',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJT2Ke4qe1RIYRKn-IrBySDe0'
        },
        bar: {
            name: 'Shangri-Lar',
            address: '1016 East Sixth Street, Austin, TX 78702',
            labelLetter: 'S',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJwc9096-1RIYRIEXZT4wwdNk'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Parking at the Domain',
            address: '11501 Domain Dr, Austin, TX 78701',
            labelLetter: 'D',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJBTs97HHMRIYRIAQ_ZGynxHc'
        },
        restaurant: {
            name: 'Copper Restaurant & Dessert Lounge',
            address: '3401 Esperanza Crossing, Austin, TX 78758',
            labelLetter: 'C',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJDTcvo3HMRIYR5WauswIaA8I'
        },
        bar: {
            name: 'Topgolf',
            address: '2700 Esperanza Crossing, Austin, TX 78758',
            labelLetter: 'T',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJhyiGS3PMRIYRrecvcocgpZ8'
        },
        zipCode: '78758'
    }, {
        parking: {
            name: 'Premium Parking P3005',
            address: '500 W 5th St, Austin, TX 78701',
            labelLetter: 'P',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJxZc8qg61RIYR7cI22tQR1-I'
        },
        restaurant: {
            name: 'The Roosevelt Room',
            address: '307 W 5th St, Austin, TX 78701',
            labelLetter: 'R',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJIeohJQm1RIYRG-NyRBlsnuw'
        },
        bar: {
            name: 'The Volstead Lounge',
            address: '1500 E 6th St, Austin, TX 78702',
            labelLetter: 'V',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJ85Q77rC1RIYRr5_R_urUGbQ'
        },
        zipCode: '78701'
    }, {
        parking: {
            name: 'Central Parking',
            address: ' 707 East 7th St, Austin, TX 78701',
            labelLetter: 'C',
            markerColor: 'green',
            type: 'parking',
            placeID: 'ChIJSUPsxKW1RIYR9z8JpWbx8tE'
        },
        restaurant: {
            name: 'Easy Tiger',
            address: '709 E 6th St, Austin, TX 78701',
            labelLetter: 'E',
            markerColor: 'blue',
            type: 'restaurant',
            placeID: 'ChIJn0u35aW1RIYRxCTiNNvF3cA'
        },
        bar: {
            name: 'Piranha Killer Sushi',
            address: '207 San Jacinto Blvd, Austin, TX 78701',
            labelLetter: 'P',
            markerColor: 'red',
            type: 'bar',
            placeID: 'ChIJS6NrAai1RIYR3JeQux1qnOA'
        },
        zipCode: '78701'
    }]
}



function googleMap(date) {
    /////////add a custom icon to labelLetter! /////////////
    $('#make-my-day').on('click', function() {
        function showWeather() {
            console.log('weather');
            var key = '7f2c1ad71abdf07a660a8667474497f2';
            var zip = date.zipCode;
            var requestURL = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=' + key

            $.ajax({
                    url: requestURL,
                    method: 'GET'
                })
                .done(function(response) {

                    var currentTemp = $('<p>').text('Current Temp: ' + Math.round(response.main.temp) + ' degrees');
                    var highTemp = $('<p>').text('High Today: ' + Math.round(response.main.temp_max) + ' degrees');
                    var humidity = $('<p>').text('Humidity: ' + response.main.humidity + ' percent');
                    var windSpeed = $('<p>').text('Wind Speed: ' + response.wind.speed + ' mph');

                    $('#weather').html('');
                    $('#weather').append('<div class="weatherTitle">Current Weather</div>');
                    $('#weather').append(currentTemp);
                    $('#weather').append(highTemp);
                    $('#weather').append(humidity);
                    $('#weather').append(windSpeed);

                })
        };

        var map;
        /// creates the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('googlemap'), {
                // got lazy, set the center to Austin
                center: { lat: 30.267153, lng: -97.743061 },
                zoom: 15
            });
        }


        //creates an ajax call to determine the weather at a specific zip code
        showWeather();

        initMap();
        /// creates clickable markers
        var infowindow = new google.maps.InfoWindow();
        ///creates a boundary for each marker to change map size
        var bounds = new google.maps.LatLngBounds();
        /// creates a new location/places call
        var newLocale = new google.maps.places.PlacesService(map);
        console.log(newLocale);
        
        //// PARKING
        newLocale.getDetails({
            placeId: date.parking.placeID
        }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                });
                /// dynamic html
                console.log(place.name);
                $('#googleplacedata').append('<br><div class="parkingTitle">Parking:</div><div class="placeNameData">' + place.name + '</div><div class="placeFormattedAddressData">' + place.formatted_address + '</div><br><div class="theRestTitle">Things to do: </div>');
                /// changes map size
                bounds.extend(marker.position);
                /// makes markers clickable
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address + '</div>');
                    infowindow.open(map, this);
                });
                /// fits map to new boundaries
                map.fitBounds(bounds);
            }
        });

        /// stores data from the date choice.
        var locationArray = [date.restaurant.placeID, date.bar.placeID];
        /// generates markers and corresponding dynamic html
        for (i = 0; i < locationArray.length; i++) {
            newLocale.getDetails({
                placeId: locationArray[i]
            }, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                    });
                    /// dynamic html
                    console.log(place.name);
                    $('#googleplacedata').append('<div class="placeNameData">' + place.name + '</div><div class="placeFormattedAddressData">' + place.formatted_address + '</div><div class="placePriceLevelData">' + 'Price Level: ' + place.price_level + '</div><div class="placePhoneNumberData">' + place.international_phone_number + '</div>');
                    $('#googleplacedata').append('<div class="placeHoursTitleData">Hours</div><div class="placeHoursData">' + place.opening_hours.weekday_text[0] + '<br>' + place.opening_hours.weekday_text[1] + '<br>' + place.opening_hours.weekday_text[2] + '<br>' + place.opening_hours.weekday_text[3] + '<br>' + place.opening_hours.weekday_text[4] + '<br>' + place.opening_hours.weekday_text[5] + '<br>' + place.opening_hours.weekday_text[6] + '<br>' + '</div>');
                    $('#googleplacedata').append('<div class="placeWebsiteData"><a href="' + place.website + '">' + place.website + '</a></div>')
                        /// changes map size
                    bounds.extend(marker.position);
                    /// makes markers clickable
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address + '</div>');
                        infowindow.open(map, this);
                    });
                    /// fits map to new boundaries
                    map.fitBounds(bounds);
                }
            });
        };
        

    });
}; ///make my day on click

/// function call

$(document).ready(function() {
    // $(this).scrollTop(0);
    $('#make-my-day').hide();
    $('#dropdownMenu1').on('click', function(date) {
        $('#make-my-day').show('slow');
        var date = Choices.dateNights[Math.floor(Math.random() * Choices.dateNights.length)];
        googleMap(date);
    });
    $('#dropdownMenu3').on('click', function(date) {
        $('#make-my-day').show('slow');
        var date = Choices.totallyAustin[Math.floor(Math.random() * Choices.totallyAustin.length)];
        googleMap(date);
    });
    $('#dropdownMenu2').on('click', function(date) {
        $('#make-my-day').show('slow');
        var date = Choices.happyHour[Math.floor(Math.random() * Choices.happyHour.length)];
        googleMap(date);
    })
});
