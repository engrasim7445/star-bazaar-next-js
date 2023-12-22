export function Videoz({src, poster}: any) {
  src = src || 'https://dqc65nwcqwvpl.cloudfront.net/Faysal+Quraishi.mp4';
  poster = poster || 'poster="https://dqc65nwcqwvpl.cloudfront.net/creatorthumbnail/Faysal Qureshi.png"';
  return (
      <video  
        // autoPlay loop
        controls
        poster={poster}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        className="rounded-lg"
        >
        <source src={src} />
      </video>
  );
}
