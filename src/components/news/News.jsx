function News (props) {
     let data = props?.news;
     const finalData = data?.[0]['description']
     console.log(finalData)

     return (
          <div>
               <h1>News</h1>
               <div dangerouslySetInnerHTML={{ __html: finalData}} />
          </div>
     );
}

export default News;