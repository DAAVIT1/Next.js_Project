import { getAllPosts } from "@/lib/mockStore";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
