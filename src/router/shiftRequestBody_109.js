import {ref} from "vue";

export function requestBody() {
    return {
        "messageSpeed": 21.3,
        "workingHours": {
            "start": {
                "hours": 5,
                "minutes": 30,
            },
            "end": {
                "hours": 23,
                "minutes": 30,
            },
        },
        "forwardTotalDistanceKm": 9.33,
        "reverseTotalDistanceKm": 7,
        "lunchDuration": 30,
        "dinnerDuration": 30,
        "forwardParkingTime": 5,
        "reverseParkingTime": 5,
        "interval": 8,
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
        "shiftingType": "ON_DUTY",
        "startStation": "FORWARD",
        "endStation": "FORWARD",
        "lunchDestination": "FORWARD",
        "dinnerDestination": "FORWARD",
        "vehiclesOnOppositeDir": 5,
        "routeName": "Маршрут №109"
    }
}

export function timeUnits() {
    return {
        hours: ref(),
        minutes: ref(),
        seconds: ref()
    };
}
