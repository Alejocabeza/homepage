import type { Public } from "@/enums/Public.enum";

export default interface AllPosts {
  object: string;
  results: Results[];
  next_cursor: string | null;
  has_more: boolean;
  type: string;
  page_or_database: object;
  request_id: string;
}

export interface Results {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: Cover | null;
  icon: Icon | null;
  parrent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url: null;
}

interface CreatedBy {
  object: string;
  id: string;
}


interface Properties {
    name: {
        title: Title[]
    }
    tags: {
        select: {
            name: string
        }
    }
    public: {
        status: {
            name: string
        }
    }
    description: {
      rich_text: RichText[]
    }
}

interface Title {
  plain_text: string
}

interface RichText {
  plain_text: string
}

interface LastEditedBy {
  object: string;
  id: string;
}

interface Cover {
  type: string;
  external: {
    url: string;
  };
}

interface Icon {
  type: string;
  emoji: string;
}
