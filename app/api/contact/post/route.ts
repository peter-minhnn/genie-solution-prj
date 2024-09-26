import fs, {readFileSync} from 'fs';
import {ContactType} from "@/types/contact";
import * as path from "node:path";

export async function POST(req: Request) {
    const jsonPath = process.env.NEXT_PUBLIC_JSON_CONTACT as string;

    try {
        const reqBody = await req.json()
        if (!reqBody || !Object.keys(reqBody).length) {
            return Response.json({code: 0, message: 'Invalid request', data: null});
        }
        const list = readFileSync(path.resolve(jsonPath, "utf-8"), "utf-8");
        if (!list) {
            return Response.json({code: 0, message: 'File not found'});
        }
        const data = JSON.parse(list) as ContactType[];
        const idx = data.findIndex(x => x.email === reqBody.email);
        if (idx !== (-1)) {
            data[idx] = {
                ...data[idx],
                id: reqBody.id,
                name: reqBody.name,
                message: reqBody.message,
            };
        }
        else data.push(reqBody);

        fs.writeFileSync(path.resolve(jsonPath, "utf-8"), JSON.stringify(data, null, 2), {encoding: 'utf8'});

        return Response.json({
            code: 1,
            message: 'Contact send successfully',
            data: data
        });
    } catch (error) {
        return Response.json({code: 0, message: 'Failed to add contact', data: error});
    }
}