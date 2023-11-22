import {ref} from "vue";

export function requestBody() {
    return {
        "messageSpeed": 23,
        "workingHours": {
            "start": {
                "hours": 5,
                "minutes": 30,
            },
            "end": {
                "hours": 23,
                "minutes": 57,
            },
        },
        "forwardTotalDistanceKm": 26.84,
        "reverseTotalDistanceKm": 23.37,
        "lunchDuration": 30,
        "dinnerDuration": 30,
        "forwardParkingTime": 5,
        "reverseParkingTime": 5,
        "interval": 10,
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
        "startStation": "BOTH",
        "lunchDestination": "REVERSE",
        "dinnerDestination": "REVERSE",
        "vehiclesOnOppositeDir": 4,
        "routeName": "Маршрут №118"
    }
}

export function timeUnits() {
    return {
        hours: ref(),
        minutes: ref(),
        seconds: ref()
    };
}
