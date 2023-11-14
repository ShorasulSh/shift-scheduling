import {ref} from "vue";

export function requestBody() {
    return {
        "messageSpeed": 19.0,
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
        "interval": 9   ,
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
        "lunchDestination": "FORWARD"
    }
}

export function timeUnits() {
    return {
        hours: ref(),
        minutes: ref(),
        seconds: ref()
    };
}
