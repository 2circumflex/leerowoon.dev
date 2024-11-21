export interface PostMatter {
  title: string;
  desc: string;
  date: Date;
  thumbnail: string;
}

export interface PostMatterWithContent extends PostMatter {
  content: string;
}

export interface Post extends PostMatterWithContent {
  slug: string;
}
