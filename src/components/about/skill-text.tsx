export default function SkillText({ text }: { text: string }) {
  return (
    <div className="rounded-md px-2.5 py-1 text-xs text-primary-foreground transition-colors text-nowrap bg-primary/80 hover:bg-primary/60">
      {text}
    </div>
  );
}
