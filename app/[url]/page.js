import { redirect } from "next/navigation"
import { MongoClient } from "mongodb"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }){
    const url = (await params).url
    const client = await clientPromise;
    const db = client.db("Quicklinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl: url})
    if(doc){
        redirect(doc.url)
    }
    else{
        redirect(process.env.NEXT_HOST)
    }
    return <div>My post: {url}</div>
}