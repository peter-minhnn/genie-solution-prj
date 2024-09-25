import fs, {readFileSync} from "fs";

const DATA_PATH = './json/contact.json';

export async function GET() {
    try {
        if (!fs.existsSync(DATA_PATH)) {
            return Response.json({code: 0, message: 'File not found'});
        }
        const response = readFileSync(DATA_PATH, "utf-8");
        return Response.json({
            message: 'Get contact successfully',
            data: response ? JSON.parse(response) : null,
            code: 1
        })
    } catch (error) {
        return Response.json({code: -1, message: 'Internal server error', data: error});
    }
}