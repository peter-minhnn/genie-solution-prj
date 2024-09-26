import fs, {readFileSync} from "fs";
import path from "node:path";

export async function GET() {
    const jsonPath = process.env.NEXT_PUBLIC_JSON_CONTACT as string;

    try {
        if (!fs.existsSync(jsonPath)) {
            return Response.json({code: 0, message: 'File not found'});
        }
        const response = readFileSync(path.resolve(jsonPath, "utf-8"), "utf-8");
        return Response.json({
            message: 'Get contact successfully',
            data: response ? JSON.parse(response) : null,
            code: 1
        })
    } catch (error) {
        return Response.json({code: -1, message: 'Internal server error', data: error});
    }
}