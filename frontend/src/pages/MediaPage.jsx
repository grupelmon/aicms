const images = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/cms-${i}/280/160`);

export default function MediaPage() {
  return (
    <div className="card">
      <h2>Librería multimedia</h2>
      <div className="grid media-grid">
        {images.map((src) => (
          <img key={src} src={src} alt="media" className="media-image" />
        ))}
      </div>
    </div>
  );
}
