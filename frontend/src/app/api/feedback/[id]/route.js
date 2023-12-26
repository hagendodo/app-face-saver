import {NextResponse} from "next/server";

export async function GET(request, {params}) {
    return new NextResponse(
        JSON.stringify({ success: false, message: params.id }),
        { status: 200},
    );
}
