import fs, {readFileSync} from 'fs';
import {ContactType} from "@/types/contact";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    await dbConnect();

    try {
        const reqBody = await req.json()
        if (!reqBody || !Object.keys(reqBody).length) {
            return Response.json({code: 0, message: 'Invalid request', data: null});
        }
        const findOne = await Contact.findOne({email: reqBody.email});

        if(findOne) {
            const result = await Contact.updateOne({email: reqBody.email}, {
                name: reqBody.name,
                message: reqBody.message,
            });

            if(!result.modifiedCount) {
                return Response.json({
                    code: 0,
                    message: 'Failed to send contact',
                    data: result
                });
            }
        }
        else {
            const createResult = await Contact.create(reqBody);
            if (!createResult) {
                return Response.json({code: 0, message: 'Failed to add contact', data: null});
            }
        }

        return Response.json({
            code: 1,
            message: 'Contact send successfully',
            data: reqBody
        });
    } catch (error) {
        return Response.json({code: 0, message: 'Failed to add contact', data: error});
    }
}