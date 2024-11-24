export default function SkillText({ text }: { text: string }) {
  return (
    <div className="rounded-md px-2.5 py-1 text-xs text-primary-foreground transition-colors text-nowrap bg-primary hover:bg-primary/70">
      {text}
    </div>
  );
}
