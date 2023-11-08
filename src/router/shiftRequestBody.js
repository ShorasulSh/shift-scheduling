import {ref} from "vue";

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
        "totalVehicles": 18,
        "numberOfDuties": 0,
        "forwardTotalDistanceKm": 17.95,
        "reverseTotalDistanceKm": 18.28,
        "lunchTime": "2023-10-02T09:30:00.000Z",
        "dinnerTime": "2023-10-02T19:00:00.000Z",
        "lunchDuration": 45,
        "dinnerDuration": 45,
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
                    "minutes": 30,
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
