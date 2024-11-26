/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXComponents } from "mdx/types";

import { Callout } from "./callout";
import { Image } from "./image";
import { ExternalLink } from "./link";

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  blockquote: Callout,
  Callout,
};
