import { parsePostFileName, parseToc } from "./post";

describe("post.ts", () => {
  describe("parsePostFileName", () => {
    it("should parse post file name correctly", () => {
      const postPath = "/Users/test/project/src/posts/my-awesome-post.mdx";
      const result = parsePostFileName(postPath);
      expect(result).toBe("my-awesome-post");
    });

    it("should handle nested paths with BASE_PATH", () => {
      const postPath = "/some/nested/path/src/posts/another-post.mdx";
      const result = parsePostFileName(postPath);
      expect(result).toBe("another-post");
    });

    it("should handle files without extension", () => {
      const postPath = "/path/to/src/posts/simple-post";
      const result = parsePostFileName(postPath);
      expect(result).toBe("simple-post");
    });
  });

  describe("parseToc", () => {
    it("should parse table of contents from real MDX content - 2024-year-in-review", () => {
      const content = `---
title: "2024년 회고"
---

## 들어가기 전에

올해 회사 경영악화로 권고사직을 받으며...

## 정보처리기사 자격증

개발자로 일한지 10년이 넘었지만...

## 결혼기념일 일본 여행

4월 9일은 결혼기념일이다...

## SQLD 자격증

정보처리기사를 준비하면서...

## 건강 관리

전 직장에서 너무 열심히 일한 탓인지...

## 이탈리아 여행

8월 10일부터 8월 17일까지...

## 정보보호관리사 자격증

전 회사가 핀테크 기업이다 보니...`;

      const result = parseToc(content);
      expect(result).toHaveLength(7);
      expect(result[0]).toEqual({
        text: "들어가기 전에",
        link: "#들어가기-전에",
        indent: 0,
      });
      expect(result[1]).toEqual({
        text: "정보처리기사 자격증",
        link: "#정보처리기사-자격증",
        indent: 0,
      });
      expect(result[6]).toEqual({
        text: "정보보호관리사 자격증",
        link: "#정보보호관리사-자격증",
        indent: 0,
      });
    });

    it("should parse table of contents from real MDX content - cherry-pick-from-different-repo", () => {
      const content = `---
title: "다른 repository의 commit을 cherry-pick 하는 방법"
---

## 들어가기 전에

git cherry-pick 명령어는...

## repository 설명

- **app-a** : 가져올 다른 레포지토리

## 1. remote 추가

app-b의 remote 목록입니다.

## 2. fetch

app-a의 commit 정보를 가져오기...

## 3. commit 로그 확인

app-a의 commit 목록을 확인합니다.

## 4. cherry-pick

가져올 커밋을 아래 명령어로...

## 여러개의 커밋을 한번에 cherry-pick 하는 방법

### 여러개의 커밋을 가져오기

git cherry-pick <commit-hash>...

### 커밋을 범위로 가져오기 1

git cherry-pick <start-hash>..<end-hash>...

### 커밋을 범위로 가져오기 2

git cherry-pick <start-hash>^..<end-hash>...

## 참고 문서

https://git-scm.com/docs/git-cherry-pick`;

      const result = parseToc(content);
      expect(result).toHaveLength(11); // ## 헤딩 8개 + ### 헤딩 3개

      // ## 헤딩들 확인
      expect(result[0]).toEqual({
        text: "들어가기 전에",
        link: "#들어가기-전에",
        indent: 0,
      });
      expect(result[1]).toEqual({
        text: "repository 설명",
        link: "#repository-설명",
        indent: 0,
      });
      expect(result[6]).toEqual({
        text: "여러개의 커밋을 한번에 cherry-pick 하는 방법",
        link: "#여러개의-커밋을-한번에-cherry-pick-하는-방법",
        indent: 0,
      });

      // ### 헤딩들 확인
      expect(result[7]).toEqual({
        text: "여러개의 커밋을 가져오기",
        link: "#여러개의-커밋을-가져오기",
        indent: 1,
      });
      expect(result[8]).toEqual({
        text: "커밋을 범위로 가져오기 1",
        link: "#커밋을-범위로-가져오기-1",
        indent: 1,
      });
      expect(result[9]).toEqual({
        text: "커밋을 범위로 가져오기 2",
        link: "#커밋을-범위로-가져오기-2",
        indent: 1,
      });
    });

    it("should parse table of contents from real MDX content - git-relative-ref", () => {
      const content = `---
title: "Git의 상대 참조"
---

## 상대 참조란?

Git에서 상대 참조는...

## ^ (caret)

부모 커밋을 참조합니다.

### 여러 단계 위의 부모 커밋을 참조하기

^를 여러 개 붙이는 것도...

## ~ (tilde)

~n은 n번째 부모 커밋을...

## ^와 ~ 혼합 사용

^와 ~을 함께 사용할 수 있습니다.

## 다른 예시

다른 기준점에도 사용 가능합니다.`;

      const result = parseToc(content);
      expect(result).toHaveLength(6); // ## 헤딩 5개 + ### 헤딩 1개

      expect(result[0]).toEqual({
        text: "상대 참조란?",
        link: "#상대-참조란",
        indent: 0,
      });
      expect(result[1]).toEqual({
        text: "^ (caret)",
        link: "#-caret",
        indent: 0,
      });
      expect(result[2]).toEqual({
        text: "여러 단계 위의 부모 커밋을 참조하기",
        link: "#여러-단계-위의-부모-커밋을-참조하기",
        indent: 1,
      });
      expect(result[3]).toEqual({
        text: "~ (tilde)",
        link: "#-tilde",
        indent: 0,
      });
      expect(result[4]).toEqual({
        text: "^와 ~ 혼합 사용",
        link: "#와--혼합-사용",
        indent: 0,
      });
      expect(result[5]).toEqual({
        text: "다른 예시",
        link: "#다른-예시",
        indent: 0,
      });
    });

    it("should handle content without headings", () => {
      const content = `---
title: "Test Post"
---

This is just some content without any headings.
Just plain markdown text.`;

      const result = parseToc(content);
      expect(result).toHaveLength(0);
    });

    it("should handle empty content", () => {
      const content = "";
      const result = parseToc(content);
      expect(result).toHaveLength(0);
    });

    it("should handle special characters in headings correctly", () => {
      const content = `## Git의 ^와 ~ 사용법
### API 연동 (REST/GraphQL)
## 100% 성공률 달성!`;

      const result = parseToc(content);
      expect(result).toHaveLength(3);
      expect(result[0]).toEqual({
        text: "Git의 ^와 ~ 사용법",
        link: "#git의-와--사용법",
        indent: 0,
      });
      expect(result[1]).toEqual({
        text: "API 연동 (REST/GraphQL)",
        link: "#api-연동-restgraphql",
        indent: 1,
      });
      expect(result[2]).toEqual({
        text: "100% 성공률 달성!",
        link: "#100-성공률-달성",
        indent: 0,
      });
    });

    it("should handle emojis in headings correctly", () => {
      const content = `## 🚀 프로젝트 시작하기
### 📝 문서 작성법
## 🎉 축하합니다! 완료되었습니다
### 🔧 설정 변경 ⚙️
## React Native 📱 개발 가이드`;

      const result = parseToc(content);
      expect(result).toHaveLength(5);

      // 이모지가 텍스트에는 유지되지만 링크에서는 제거됨 (일부 이모지는 완전히 제거되지 않을 수 있음)
      expect(result[0]).toEqual({
        text: "🚀 프로젝트 시작하기",
        link: "#-프로젝트-시작하기",
        indent: 0,
      });
      expect(result[1]).toEqual({
        text: "📝 문서 작성법",
        link: "#-문서-작성법",
        indent: 1,
      });
      expect(result[2]).toEqual({
        text: "🎉 축하합니다! 완료되었습니다",
        link: "#-축하합니다-완료되었습니다",
        indent: 0,
      });
      expect(result[3]).toEqual({
        text: "🔧 설정 변경 ⚙️",
        link: "#-설정-변경-️", // ⚙️ 이모지의 일부가 남아있음
        indent: 1,
      });
      expect(result[4]).toEqual({
        text: "React Native 📱 개발 가이드",
        link: "#react-native--개발-가이드",
        indent: 0,
      });
    });
  });
});
