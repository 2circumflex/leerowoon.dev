import { getBase64 } from "@/lib/getBase64";
import Image, { ImageProps } from "next/image";

type FixedSizeImgWithPlaceholderProps = Omit<
  ImageProps,
  "src" | "placeholder" | "blurDataURL"
> & {
  src: string;
};

export async function FixedSizeImgWithPlaceholder({
  src,
  alt,
  ...props
}: FixedSizeImgWithPlaceholderProps) {
  const { base64, img } = await getBase64(src);

  return (
    <Image
      src={src}
      alt={alt}
      width={img.width}
      height={img.height}
      placeholder="blur"
      blurDataURL={base64}
      {...props}
    />
  );
}
