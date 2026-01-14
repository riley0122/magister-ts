// This script is UNTESTED, run it at your own caution. It may not work.
// As of 14/01/2026 grades arent implemented into magister-ts.
// However, since you can make requests to magister on behalve of the user,
// you can add functionality yourself, as long as you know the endpoint.
import { Magister } from "magister-ts";
import dotenv from 'dotenv/config.js';

const magister = new Magister();
magister.authenticate(process.env.SCHOOL_NAME as string, process.env.AUTH_TOKEN as string);

const count = 5;

async function get_grades() {
    // magister-ts will automatically replace {*id*} with the correct id.
    const data = await magister.profile!.AuthenticatedRequest(`/personen/{*id*}/cijfers/laatste?top=${count}&skip=0`)

    const items = data["items"];

    const grades: Number[] = [];

    items.forEach((grade: never) => {
        const value = grade["waarde"] as string;
        const numerical_value = parseFloat(value.replace(",", "."));
        grades.push(numerical_value); 
    });

    grades.forEach(grade => {
        console.log(`Grade: ${grade}`);
    })
}
