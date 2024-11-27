import { Metadata } from "next";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import SkillText from "@/components/about/skill-text";
import IconWrapper from "@/components/about/icon-wrapper";
import { baseUrl, siteName, siteMetadata } from "@/lib/metadata";
import { FixedSizeImgWithPlaceholder } from "@/components/fixed-size-img-with-placeholder";

export async function generateMetadata(): Promise<Metadata> {
  const title = `About | ${siteName}`;
  const description =
    "모바일 앱 개발에 주력하는 소프트웨어 엔지니어입니다. React Native를 활용한 앱 개발에 집중하며, iOS/Android 개발 경험을 보유하고 있습니다. 책임감 있는 개발과 원활한 팀 협업을 지향합니다.";
  const url = `${baseUrl}/about`;

  return {
    title: `About | ${siteName}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title,
      description,
    },
  };
}

const SKILLS = [
  "React Native",
  "iOS",
  "Android",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Docker",
  "Git",
  "앱 취약성 점검",
  "TypeScript",
  "Java",
  "Swift",
  "Objective-C",
  "...",
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-[750px] mt-36 mb-16 flex flex-col gap-14 p-2 px-6">
      <section className="flex flex-col justify-center items-center gap-4">
        <FixedSizeImgWithPlaceholder
          className="rounded-full size-28"
          src="/images/profile_square.jpg"
          alt="profile"
          width={112}
          height={112}
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
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">소개</h2>
        <p className="leading-7 text-muted-foreground">
          안녕하세요, 이로운입니다. 👋
          <br />
          모바일 앱 개발에 주력해왔으며, 현재는 React Native를 활용한 앱 개발에
          집중하고 있습니다.
          <br />
          하지만 특정 기술에만 국한되지 않고, 필요한 기술이라면 언제든 배우고
          활용하며 성장합니다.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-medium underline underline-offset-4">
            저는 책임감이 있습니다.
          </h3>
          <p className="leading-7 text-muted-foreground">
            문제가 발생했을 때 회피하지 않고 끝까지 해결하려는 태도로 임합니다.
            맡은 일에 대해 책임감을 가지고 끝까지 완수하며, 주니어 시절부터
            지금까지 모든 프로젝트를 성공적으로 마무리해온 경험이 있습니다.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-medium underline underline-offset-4">
            협업과 의사소통을 중요하게 생각합니다.
          </h3>
          <p className="leading-7 text-muted-foreground">
            단순히 주어진 업무를 수행하는 데 그치지 않고, 능동적이고 열린 자세로
            팀원들과 협력합니다. 팀의 목표와 비전을 달성하기 위해 적극적으로
            의사소통하고 함께 해결책을 찾아갑니다.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">스킬</h2>
        <div className="mt-1 flex flex-wrap gap-1.5 gap-y-2">
          {SKILLS.map((skill) => (
            <SkillText key={skill} text={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
