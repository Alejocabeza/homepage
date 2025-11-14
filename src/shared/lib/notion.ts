import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: import.meta.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  author: string;
  author_avatar?: string;
  htmlPlaceholders?: string[];
}

// Función para mapear una página de Notion a nuestro objeto Post
const mapNotionPageToPost = (page: any): Omit<Post, "content"> => {
  const { properties } = page;
  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || "Sin Título",
    slug: properties.Slug?.rich_text?.[0]?.plain_text || "",
    date: properties.PublishedDate?.date?.start || new Date().toISOString(),
    excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || "",
    tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    category: properties.Category?.select?.name || "",
    author: properties.Author?.people?.[0]?.name || "",
    author_avatar: properties.Author?.people?.[0]?.avatar_url || undefined,
  };
};

export const getPublishedPosts = async (): Promise<Omit<Post, "content">[]> => {
  if (!import.meta.env.NOTION_DATABASE_ID) {
    throw new Error("NOTION_DATABASE_ID no está configurado en .env");
  }

  const response = await (notion as any).databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      select: {
        equals:
          import.meta.env.NODE_ENV === "production" ? "Publicado" : "Borrador",
      },
    },
    sorts: [
      {
        property: "PublishedDate",
        direction: "descending",
      },
    ],
  });

  return response.results.map(mapNotionPageToPost);
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  if (!import.meta.env.NOTION_DATABASE_ID) {
    throw new Error("NOTION_DATABASE_ID no está configurado en .env");
  }

  const response = await (notion as any).databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  const page = response.results[0];
  if (!page) return null;

  const post = mapNotionPageToPost(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  // mdString can be either a plain string or an object with a `parent` property
  let preprocessedContent: string = "";
  if (typeof mdString === "string") {
    preprocessedContent = mdString;
  } else if (mdString && typeof mdString.parent === "string") {
    preprocessedContent = mdString.parent;
  }

  // Aggressively remove [object Object]
  preprocessedContent = preprocessedContent.replace(/\[object Object\]/g, "");

  return {
    ...post,
    content: preprocessedContent,
    htmlPlaceholders: [],
  };
};

// --- Funciones para Servicios ---

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  htmlPlaceholders?: string[];
}

const mapNotionPageToService = (page: any): Omit<Service, "content"> => {
  const { properties } = page;
  return {
    id: page.id,
    name: properties.Name?.title?.[0]?.plain_text || "Servicio sin nombre",
    slug: properties.Slug?.rich_text?.[0]?.plain_text || "",
    description: properties.Description?.rich_text?.[0]?.plain_text || "",
  };
};

export const getPublishedServices = async (): Promise<
  Omit<Service, "content">[]
> => {
  if (!import.meta.env.NOTION_SERVICES_DATABASE_ID) {
    throw new Error("NOTION_SERVICES_DATABASE_ID no está configurado en .env");
  }

  const response = await (notion as any).databases.query({
    database_id: import.meta.env.NOTION_SERVICES_DATABASE_ID,
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  });

  return response.results.map(mapNotionPageToService);
};

export const getServiceBySlug = async (
  slug: string
): Promise<Service | null> => {
  if (!import.meta.env.NOTION_SERVICES_DATABASE_ID) {
    throw new Error("NOTION_SERVICES_DATABASE_ID no está configurado en .env");
  }

  const response = await (notion as any).databases.query({
    database_id: import.meta.env.NOTION_SERVICES_DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  const page = response.results[0];
  if (!page) return null;

  const service = mapNotionPageToService(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  let preprocessedContent: string = "";
  if (typeof mdString === "string") {
    preprocessedContent = mdString;
  } else if (mdString && typeof mdString.parent === "string") {
    preprocessedContent = mdString.parent;
  }

  preprocessedContent = preprocessedContent.replace(/\[object Object\]/g, "");

  return {
    ...service,
    content: preprocessedContent,
    htmlPlaceholders: [],
  };
};

// --- Funciones para Proyectos ---

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  stack: string[];
  url: string | null;
  content: string;
  htmlPlaceholders?: string[];
}

const mapNotionPageToProject = (page: any): Omit<Project, "content"> => {
  const { properties } = page;
  return {
    id: page.id,
    name: properties.Name?.title?.[0]?.plain_text || "Proyecto sin nombre",
    slug: properties.Slug?.rich_text?.[0]?.plain_text || "",
    description: properties.Description?.rich_text?.[0]?.plain_text || "",
    stack: properties.Stacks?.multi_select?.map((tag: any) => tag.name) || [],
    url: properties.URL?.url || null,
  };
};

export const getPublishedProjects = async (): Promise<
  Omit<Project, "content">[]
> => {
  if (!import.meta.env.NOTION_PROJECTS_DATABASE_ID) {
    throw new Error("NOTION_PROJECTS_DATABASE_ID no está configurado en .env");
  }

  const response = await (notion as any).databases.query({
    database_id: import.meta.env.NOTION_PROJECTS_DATABASE_ID,
    filter: {
      property: "Status",
      select: {
        equals:
          import.meta.env.NODE_ENV === "production" ? "Publicado" : "Pendiente",
      },
    },
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  });

  return response.results.map(mapNotionPageToProject);
};

export const getProjectBySlug = async (
  slug: string
): Promise<Project | null> => {
  if (!import.meta.env.NOTION_PROJECTS_DATABASE_ID) {
    throw new Error("NOTION_PROJECTS_DATABASE_ID no está configurado en .env");
  }

  const response = await (notion as any).databases.query({
    database_id: import.meta.env.NOTION_PROJECTS_DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  const page = response.results[0];
  if (!page) return null;

  const project = mapNotionPageToProject(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  let preprocessedContent: string = "";
  if (typeof mdString === "string") {
    preprocessedContent = mdString;
  } else if (mdString && typeof mdString.parent === "string") {
    preprocessedContent = mdString.parent;
  }

  // Aggressively remove [object Object]
  preprocessedContent = preprocessedContent.replace(/\[object Object\]/g, "");

  // Store original HTML and replace with placeholders
  const htmlPlaceholders: string[] = [];
  preprocessedContent = preprocessedContent.replace(
    /<strong><code>([^<]+)<\/code><\/strong>/g,
    (match) => {
      const placeholder = `__HTML_CODE_PLACEHOLDER_${htmlPlaceholders.length}__`;
      htmlPlaceholders.push(match);
      return placeholder;
    }
  );

  return {
    ...project,
    content: preprocessedContent,
    htmlPlaceholders: htmlPlaceholders,
  };
};
