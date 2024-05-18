import type { Block } from "@/interfaces/blocks.interface";
import type { Results } from "@/interfaces/post.interface";
import type AllPosts from "@/interfaces/post.interface";

const NOTION_KEY = import.meta.env.API_KEY_NOTION;
const DATABASE_ID = import.meta.env.API_NOTION_DB_ID;

export async function getAllPosts(): Promise<AllPosts> {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_KEY}`,
        "notion-version": "2022-06-28",
        "Content-Type": "application/json",
      },
    }
  );
  return await res.json();
}

export async function getPost(id: string | undefined): Promise<Results> {
  const res = await fetch(`https://api.notion.com/v1/pages/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${NOTION_KEY}`,
      "notion-version": "2022-06-28",
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}

export async function getBlocks(id: string | undefined): Promise<Block>  {
  const res = await fetch(`https://api.notion.com/v1/blocks/${id}/children`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${NOTION_KEY}`,
      "notion-version": "2022-06-28",
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}
