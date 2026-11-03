import SplitText from '@/components/SplitText';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export default function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-bubblegum">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight text-paper md:text-5xl">
        <SplitText text={title} />
      </h2>
    </div>
  );
}
