import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import SkillText from "@/components/about/skill-text";
import IconWrapper from "@/components/about/icon-wrapper";

const SKILLS = [
  "React Native",
  "iOS",
  "Android",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "JavaScript",
  "TypeScript",
  "Java",
  "Swift",
  "Objective-C",
  "Git",
  "Docker",
  "앱 취약성 점검",
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-[800px] mt-32 mb-16 flex flex-col gap-10 p-2 px-6">
      <section className="flex flex-col justify-center items-center gap-4">
        <Image
          className="rounded-full size-28"
          src="/profile_square.jpg"
          alt="profile"
          width={120}
          height={120}
        />
        <h1 className="text-3xl font-bold">이로운</h1>
        <p className="text-sm text-center">
          Software Engineer | Mobile, React Native Developer
        </p>
        <div className="flex gap-3">
          <Link href="mailto:2circumflex@gmail.com">
            <IconWrapper>
              <MdEmail size={14} />
            </IconWrapper>
          </Link>
          <Link
            href="https://github.com/2circumflex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <FaGithub size={14} />
            </IconWrapper>
          </Link>
          <Link
            href="https://www.linkedin.com/in/2circumflex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <FaLinkedin size={14} />
            </IconWrapper>
          </Link>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="leading-7 text-muted-foreground">
          제품에 대한 책임감과 열정을 지니고 있습니다. <br />
          10년 이상의 경력을 모바일 앱 개발에 집중해왔으며, 현재는 React
          Native를 활용한 앱 개발에 주력하고 있습니다.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-1 gap-y-2">
          {SKILLS.map((skill) => (
            <SkillText key={skill} text={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
