import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StandUpService {
    standUpsChanged = new Subject<Map<string, string[]>>();
    private standUps: Map<string, string[]> = new Map;
    private activeStandUp: string = '';

    constructor() {
        this.standUps.set('Helios',['Andrew','Caitlin',
        'Evan','Grant','Jono','Kathleen',
        'Ryan','Sam','Sharon','Sherri','Tim'])
        this.standUps.set('Billabong',['Andrew L','Anthony',
        'Sandra','Evan','Jono','Kathleen',
        'Kane','Sam','Nik','Tim','Nikunj','Andrew B'])
        this.activeStandUp = 'Helios'
    }

    addAttendee(name: string, standUp: string) {
            let standUpAttendees = this.standUps.get(standUp);
            if (standUpAttendees !== undefined){
                standUpAttendees.push(name);
                this.standUps.set(standUp,standUpAttendees)
                this.standUpsChanged.next(this.standUps);
            }
        }

    getStandUps(): Map<string, string[]> {
        return this.standUps;
    }    

    getActiveAttendees(): string[] {
        let activeAttendees = this.standUps.get(this.activeStandUp);
        return (activeAttendees === undefined) ? [] : activeAttendees;
    }

    removeAttendee(name: string, standUp: string) {
        let standUpAttendees = this.standUps.get(standUp);
        if (standUpAttendees != undefined){
            const index = standUpAttendees.indexOf(name, 0);
            if (index > -1) {
                standUpAttendees.splice(index, 1);
            }
            this.standUps.set(standUp, standUpAttendees);
            this.standUpsChanged.next(this.standUps);
        }
    }
}