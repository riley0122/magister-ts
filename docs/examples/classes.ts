// This script is UNTESTED, run it at your own caution. It may not work.
import { Magister, MagisterClass } from "magister-ts";
import dotenv from 'dotenv/config.js';

const magister = new Magister()
magister.authenticate(process.env.SCHOOL_NAME as string, process.env.AUTH_TOKEN as string)

const fromDate = new Date()
const toDate = new Date()
toDate.setDate(toDate.getDate() + 7)

magister.data.get_classes(fromDate, toDate).then((classes: MagisterClass[]) => {
    // class_ as to not conflict with the class keyword
    classes.forEach((class_: MagisterClass) => {
        // All of these properties should be strings.
        console.log(`${class_.description} | ${class_.location} | ${class_.ClassStart} - ${class_.ClassEnd}`)
    })
})
