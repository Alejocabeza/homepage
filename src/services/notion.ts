const NOTION_KEY = import.meta.env.NOTION_API_KEY;

export const PROJECTDB = "157943193f8780569083e7cc04d06d64";
export const BLOGDB = import.meta.env.NOTION_BLOG_DB;

const headers = {
  Authorization: `Bearer ${NOTION_KEY}`,
  "notion-version": "2022-06-28",
  "Content-Type": "application/json",
};

export async function findAllData(dbid: string) {
  const url = genereateUrl("databases", dbid);
  const res = await fetch(url + "/query", {
    method: "POST",
    headers,
  });
  return await res.json();
}

export async function findOneData(id: string) {
  const url = genereateUrl("pages", id);
  const res = await fetch(url, {
    method: "GET",
    headers,
  });
  return await res.json();
}

export async function findOneBlock(id: string) {
  const url = genereateUrl("blocks", id);
  const res = await fetch(url + "/children", {
    method: "GET",
    headers,
  });
  return await res.json();
}

function genereateUrl(page: string, id: string) {
  return `https://api.notion.com/v1/${page}/${id}`;
}
