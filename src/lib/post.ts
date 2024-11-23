import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";

import { Post, PostMatter } from "./types";

const BASE_PATH = "/src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const parsePostFileName = (postPath: string) => {
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

const parsePostMatterWithContent = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  return { ...(data as PostMatter), content };
};

export const getPostList = async (): Promise<Post[]> => {
  const postPaths: string[] = sync(`${POSTS_PATH}/*.mdx`);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );
  return postList;
};

export const getSortedPostList = async (): Promise<Post[]> => {
  const postList = await getPostList();
  return postList.sort((a, b) => (a.date > b.date ? -1 : 1));
};