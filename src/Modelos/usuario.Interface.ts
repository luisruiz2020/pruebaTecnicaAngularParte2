import { addressI } from "./address.interface";
import { companyI } from "./company.interface";

export interface usuarioI{
    id: number;
    name: string;
    username: string;
    email: string;
    address: addressI;
    phone: string;
    website: string;
    company: companyI;
    
}