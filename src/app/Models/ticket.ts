import { User } from "./user";

export class Ticket {
    //@ts-ignore
    id: number;
    //@ts-ignore
    objet: string;
    //@ts-ignore
    etat: string;
    //@ts-ignore
    userId: number;
    
    //@ts-ignore
    user: User;

    //@ts-ignore
    messages: any;
}
