function FeaturedQuestion (props) {
     let data = props?.news;
     const finalData = data?.[4]['title'] === 'Featured Question' ? data?.[4]['description'] : 'No Questions Today';
     
     return (
          <div className="hero">
               <h1>Question</h1>
               <div dangerouslySetInnerHTML={{ __html: finalData}} />
          </div>
     );
}

export default FeaturedQuestion;