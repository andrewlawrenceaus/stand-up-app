import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StandUpService {
    attendeesChanged = new Subject<string[]>();
    private attendees: string[] = [];

    constructor() {
        this.attendees.push(
            ...['Andrew','Jess','Calvin','Scully']
        )
    }

    addAttendee(name: string) {
        this.attendees.push(name);
        this.attendeesChanged.next(this.attendees);
    }

    getAttendees() {
        return this.attendees;
    }

    removeAttendee(name: string) {
        const index = this.attendees.indexOf(name, 0);
        if (index > -1) {
            this.attendees.splice(index, 1);
        }
        this.attendeesChanged.next(this.attendees);
    }
}