export interface Blog {
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
    Status: {
        id: string,
        type: string,
        status: {
            id: string,
            name: string,
            color: string
        }
    },
    Tags: {
        id: string,
        type: string,
        multi_select: {
            id: string,
            name: string
            color: string
        }[]
    },
    Description: {
        id: string,
        type: string,
        rich_text: {
            plain_text: string
        }[]
    },
    Name: {
        id: string,
        type: string,
        title: {
            plain_text: string
        }[]
    },
    Image: {
        id: string,
        types: string,
        files: {
            name: string,
            type: string,
            file: {
                url: string,
                expiry_time: string
            }
        }[]
    }
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
