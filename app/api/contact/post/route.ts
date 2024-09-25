import fs, {readFileSync} from 'fs';
import {ContactType} from "@/types/contact";

const DATA_PATH = 'public/json/contact.json';

export async function POST(req: Request) {
    try {
        const reqBody = await req.json()
        if (!reqBody || !Object.keys(reqBody).length) {
            return Response.json({code: 0, message: 'Invalid request', data: null});
        }
        const list = readFileSync(DATA_PATH, "utf-8");
        if (!list) {
            return Response.json({code: 0, message: 'File not found'});
        }
        const data = JSON.parse(list) as ContactType[];
        const idx = data.findIndex(x => x.email === reqBody.email);
        if (idx !== (-1)) {
            data[idx] = {
                ...data[idx],
                name: reqBody.name,
                message: reqBody.message,
            };
        }
        else data.push(reqBody);

        fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), {encoding: 'utf8', flag: 'w'});

        return Response.json({
            code: 1,
            message: 'Contact send successfully',
            data: data
        });
    } catch (error) {
        return Response.json({code: 0, message: 'Failed to add contact', data: error});
    }
}