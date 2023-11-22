import {ref} from "vue";

export function requestBody() {
    return {
        "messageSpeed": 21.0,
        "workingHours": {
            "start": {
                "hours": 5,
                "minutes": 30,
            },
            "end": {
                "hours": 23,
                "minutes": 55,
            },
        },
        "forwardTotalDistanceKm": 12.97,
        "reverseTotalDistanceKm": 14,
        "lunchDuration": 30,
        "dinnerDuration": 30,
        "forwardParkingTime": 5,
        "reverseParkingTime": 5,
        "interval": 7,
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
        "vehiclesOnOppositeDir": 0,
        "routeName": "Маршрут №51"
    }
}

export function timeUnits() {
    return {
        hours: ref(),
        minutes: ref(),
        seconds: ref()
    };
}
