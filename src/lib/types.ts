export interface PostMatter {
  title: string;
  desc: string;
  thumbnail: string;
  tags: string[];
  createdAt: Date;
  modifiedAt: Date;
}

export interface PostMatterWithContent extends PostMatter {
  content: string;
}

export interface Post extends PostMatterWithContent {
  slug: string;
}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}
