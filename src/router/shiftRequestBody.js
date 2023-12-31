import {ref} from "vue";

// 115 route
export function requestBody() {
    return {
        "messageSpeed": 19.9,
        "workingHours": {
            "start": {
                "hours": 5,
                "minutes": 15,
            },
            "end": {
                "hours": 22,
                "minutes": 55,
            },
        },
        "forwardTotalDistanceKm": 17.95,
        "reverseTotalDistanceKm": 18.28,
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
