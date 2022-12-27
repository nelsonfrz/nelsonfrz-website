export default function ArticleText({ contentHtml }: { contentHtml: string }) {
  return (
    <>  
      {/* TODO: Finish article markup CSS */}
      <style global jsx>{`
        .articletext h1 {
          font-weight: bold;
          font-size: 38px;
        }
        
        .articletext h2 {
          font-weight: bold;
          font-size: 30px;
        }
        
        .articletext h3 {
          font-weight: bold;
          font-size: 25px;
        }
        
        .articletext h4 {
          font-weight: bold;
          font-size: 20px;
        }
        
        .articletext h5 {
          font-weight: bold;
          font-size: 15px;
        }
        
        .articletext h6 {
          font-weight: bold;
          font-size: 10px;
        }
      
      `}</style>
      <div className="articletext" dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </>
  );
}