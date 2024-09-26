import fs, {readFileSync} from "fs";
import path from "path";

export async function GET() {
    const jsonPath = process.env.NEXT_PUBLIC_JSON_CONTACT as string;
    const jsonUrl = path.join(process.cwd(), jsonPath);

    try {
        if (!fs.existsSync(jsonUrl)) {
            return Response.json({code: 0, message: 'File not found'});
        }
        const response = readFileSync(jsonUrl, "utf-8");
        return Response.json({
            message: 'Get contact successfully',
            data: response ? JSON.parse(response) : null,
            code: 1
        })
    } catch (error) {
        return Response.json({code: -1, message: 'Internal server error', data: error});
    }
}