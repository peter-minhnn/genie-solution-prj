import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export const dynamic = 'force-dynamic'

export async function GET() {
    await dbConnect();

    try {
        const result = await Contact.find({});
        if (!result || Array.isArray(result) && !result.length) {
            return Response.json({code: 1, message: 'No data', data: []});
        }
        const contacts = result.map((doc) => {
            return JSON.parse(JSON.stringify(doc));
        });
        return Response.json({
            message: 'Get contact successfully',
            data: contacts,
            code: 1
        })
    } catch (error) {
        return Response.json({code: -1, message: 'Internal server error', data: error});
    }
}