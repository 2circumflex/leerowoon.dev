import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";

import { HeadingItem, Post, PostMatter, PostMatterWithContent } from "./types";

const BASE_PATH = "/src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const parsePostFileName = (postPath: string): string => {
  const fileName = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");
  return fileName;
};

const parsePost = async (postPath: string): Promise<Post> => {
  const slug = parsePostFileName(postPath);
  const postMatterWithContent = await parsePostMatterWithContent(postPath);
  return {
    slug,
    ...postMatterWithContent,
  };
};

const parsePostMatterWithContent = async (
  postPath: string
): Promise<PostMatterWithContent> => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  return { ...(data as PostMatter), content };
};

export const getPostPaths = (): string[] => {
  const postPaths: string[] = sync(`${POSTS_PATH}/*.mdx`);
  return postPaths;
};

export const getPostList = async (): Promise<Post[]> => {
  const postPaths = getPostPaths();
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );
  return postList;
};

export const getDescSortedPostList = async (): Promise<Post[]> => {
  const postList = await getPostList();
  return postList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getPost = async (slug: string): Promise<Post> => {
  const postPath = `${POSTS_PATH}/${slug}.mdx`;
  const post = await parsePost(postPath);
  return post;
};

export const getAllTags = async (): Promise<string[]> => {
  const postList = await getPostList();
  const tags = postList.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
};

export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace("##", "").replace("#", ""),
      link:
        "#" +
        heading
          .replace("# ", "")
          .replace("#", "")
          .replace(/[\[\]:!@#$/%^&*()+=,.';]/g, "")
          .replace(/ /g, "-")
          .toLowerCase()
          .replace("?", ""),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  );
};
