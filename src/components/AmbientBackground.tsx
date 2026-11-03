const blobs = [
  { position: 'left-[-10%] top-[5%] h-[42vw] w-[42vw]', color: 'bg-violet/35', duration: '24s', delay: '0s' },
  { position: 'right-[-12%] top-[30%] h-[36vw] w-[36vw]', color: 'bg-bubblegum/20', duration: '30s', delay: '-8s' },
  { position: 'left-[20%] bottom-[-10%] h-[38vw] w-[38vw]', color: 'bg-lilac/20', duration: '28s', delay: '-14s' },
];

export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute animate-drift rounded-full blur-3xl ${blob.position} ${blob.color}`}
          style={{ animationDuration: blob.duration, animationDelay: blob.delay }}
        />
      ))}
    </div>
  );
}
