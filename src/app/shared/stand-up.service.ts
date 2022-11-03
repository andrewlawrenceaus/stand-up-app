import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StandUpService {
    attendeesChanged = new Subject<string[]>
    private attendees: string[] = [];

    constructor(){
    }

    addAttendee(name: string){
        this.attendees.push(name);
        this.attendeesChanged.next(this.attendees);
    }
}