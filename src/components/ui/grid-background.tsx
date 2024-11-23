export default function GridBackground() {
  return (
    <div className='absolute inset-0'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `radial-gradient(#808080 2px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: 0.3,
        }}
      />
    </div>
  );
}
