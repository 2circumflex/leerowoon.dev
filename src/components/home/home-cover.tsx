import Image from "next/image";

export default function HomeCover() {
  return (
    <div className="relative w-full h-[300px] mb-16">
      <Image
        src="/images/home_cover.jpg"
        alt="프라하의 아름다운 도시 전경"
        width={1252}
        height={706}
        className="rounded-lg object-cover w-full h-[300px] animate-home-cover mb-16"
      />
      <div className="absolute z-10 inset-0 bg-black/30 rounded-lg" />
      <h1 className="absolute z-20 bottom-5 left-5 text-3xl text-white">
        이로운 개발 👨‍💻
      </h1>
    </div>
  );
}
