import { Fragment } from 'react';
import { useInView } from '@/hooks/useInView';

type SplitTextProps = { text: string; className?: string };

export default function SplitText({ text, className = '' }: SplitTextProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const words = text.split(' ');
  let letterIndex = 0;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, w) => (
        <Fragment key={`${word}-${w}`}>
          <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            {[...word].map((ch, i) => {
              const delay = letterIndex * 35;
              letterIndex += 1;
              return (
                <span
                  key={i}
                  className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    inView ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
          {w < words.length - 1 && ' '}
        </Fragment>
      ))}
    </span>
  );
}
