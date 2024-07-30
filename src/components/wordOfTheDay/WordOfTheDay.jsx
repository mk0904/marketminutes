function WordOfTheDay (props) {
     let data = props?.news;
     const finalData = data?.[2]['title'] === 'Word of the Day' ? data?.[2]['description'] : 'No Words Today';

     return (
          <div>
               <h1>Word of The day</h1>
               <div dangerouslySetInnerHTML={{ __html: finalData}} />
          </div>
     );
}

export default WordOfTheDay;