import fs from "fs";
import {NextApiRequest} from "next";

const DATA_PATH = './json/contact.json';

export async function DELETE(req: Request) {
    try {
        const id = await req.json();
        const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
        const updatedData = data.filter((contact: { id: number }) => contact.id !== id);
        fs.writeFileSync(DATA_PATH, JSON.stringify(updatedData, null, 2));
        return Response.json({
            code: 1,
            message: 'Contact deleted successfully',
            data: updatedData
        });
    } catch (error) {
        return Response.json({code: -1, message: 'Failed to delete contact', data: null});
    }
}