import {ref} from "vue";

// 115 route
export function requestBody() {
    return {
        "messageSpeed": 20.5,
        "workingHours": {
            "start": {
                "hours": 5,
                "minutes": 30,
            },
            "end": {
                "hours": 22,
                "minutes": 6,
            },
        },
        "forwardTotalDistanceKm": 18.50,
        "reverseTotalDistanceKm": 17.73,
        "lunchDuration": 30,
        "dinnerDuration": 30,
        "forwardParkingTime": 5,
        "reverseParkingTime": 5,
        "interval": 9,
        "peakHourList": [
            {
                "start": {
                    "hours": 7,
                    "minutes": 0,
                },
                "end": {
                    "hours": 9,
                    "minutes": 0,
                },
            },
            {
                "start": {
                    "hours": 17,
                    "minutes": 0,
                },
                "end": {
                    "hours": 19,
                    "minutes": 0,
                },
            }
        ],
        "startStation": "FORWARD",
        "lunchDestination": "FORWARD",
        "dinnerDestination": "FORWARD",
        "vehiclesOnOppositeDir": 4,
        "routeName": "Маршрут №100"

    }
}

export function timeUnits() {
    return {
        hours: ref(),
        minutes: ref(),
        seconds: ref()
    };
}
