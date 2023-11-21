import {ref} from "vue";

export function requestBody() {
    return {
        "messageSpeed": 23.5,
        "workingHours": {
            "start": {
                "hours": 5,
                "minutes": 30,
            },
            "end": {
                "hours": 23,
                "minutes": 58,
            },
        },
        "forwardTotalDistanceKm": 28.14,
        "reverseTotalDistanceKm": 31.07,
        "lunchDuration": 30,
        "dinnerDuration": 30,
        "forwardParkingTime": 5,
        "reverseParkingTime": 5,
        "interval": 11,
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
        "dinnerDestination": "FORWARD",
        "vehiclesOnOppositeDir": 7,
        "routeName": "Маршрут №12"
    }
}

export function timeUnits() {
    return {
        hours: ref(),
        minutes: ref(),
        seconds: ref()
    };
}
