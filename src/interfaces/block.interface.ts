export interface Blocks {
    object: string;
    results: Results[];
    next_cursor: null;
    has_more: boolean;
    type: string;
    block: {};
    request_id: string;
  }
  
  interface Results {
    object: string;
    id: string;
    parent: Parent;
    created_time: string;
    last_edited_time: string;
    created_by: CreatedBy;
    last_edited_by: LastEditedTime;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
    type: string;
    heading_1?: Heading1;
    heading_2?: Heading2;
    heading_3?: Heading3;
    image?: Image;
    paragraph?: Paragraph;
    code?: Code;
    bulleted_list_item?: List;
    numbered_list_item?: List;
    to_do?: Todo;
    embed?: Embed;  // Agregado para el bloque de embed
  }
  
  interface Parent {
    type: string;
    page_id: string;
  }
  
  interface CreatedBy {
    object: string;
    id: string;
  }
  
  interface LastEditedTime {
    object: string;
    id: string;
  }
  
  interface Heading2 {
    rich_text: RichText[];
  }
  
  interface Heading1 {
    rich_text: RichText[];
  }
  
  interface Heading3 {
    rich_text: RichText[];
  }
  
  interface Paragraph {
    rich_text: RichText[];
  }
  
  interface Code {
    rich_text: RichText[];
    language: string; // El lenguaje del código, por ejemplo: "javascript", "python"
  }
  
  interface List {
    rich_text: RichText[];
  }
  
  interface Todo {
    rich_text: RichText[];
    checked: boolean;
  }
  
  interface Embed {
    url: string; // URL para incrustar contenido (por ejemplo, un video o mapa)
  }
  
  interface RichText {
    plain_text: string;
  }
  
  interface Image {
    type: string;
    file?: { url: string };
    external?: { url: string };
  }
  