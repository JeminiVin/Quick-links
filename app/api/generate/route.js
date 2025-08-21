
import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("Quicklinks");
    const collection = db.collection("url");

    // check if the short url already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "Short URL already exists 🚫",
      }, { status: 400 });
    }

    // insert new record
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date()
    });

    return NextResponse.json({
      success: true,
      error: false,
      message: "✅ Short URL created successfully!",
    });

  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({
      success: false,
      error: true,
      message: "Internal Server Error",
    }, { status: 500 });
  }
}
