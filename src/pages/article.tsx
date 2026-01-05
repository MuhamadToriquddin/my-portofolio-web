

function ArticlePage({ title, text, picture }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      
      <div className="h-1.5 bg-gray-50 w-full">
        <div className="h-full bg-black w-24"></div>
      </div>

      <article className="max-w-2xl mx-auto px-6 py-20 md:py-32">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
            {title}
          </h1>
          <div className="h-px w-12 bg-gray-300 mb-8"></div>
        </header>

        {/* Gambar Utama */}
        {picture && picture.length > 0 && (
          <div className="mb-16">
            <img 
              src={picture[0]} 
              alt={title} 
              className="w-full aspect-[16/9] object-cover rounded-sm"
            />
          </div>
        )}

        {/* Konten Utama */}
        <div className="prose prose-neutral">
          {text.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
                {paragraph}
              </p>
            )
          ))}
        </div>

        {/* Grid Gambar Tambahan (Tanpa Footer di bawahnya) */}
        {picture && picture.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {picture.slice(1).map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`Detail ${idx}`} 
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
              />
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default ArticlePage;