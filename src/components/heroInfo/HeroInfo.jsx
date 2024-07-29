import { useState, useEffect } from 'react';
function HeroInfo(props) {
     const [htmlContent,setHtmlContent] = useState('');
     const [aboutMarket,setAboutMarket] = useState('');

     useEffect(() => {
          let content = props?.data;
          let aboutMarketContent = props?.aboutMarket;
          setAboutMarket(aboutMarketContent);
          content = content?.replace(/color: #44475b/g, 'color: white;');
          setHtmlContent(content);
        }, [props?.data, props?.aboutMarket]);

     console.log(htmlContent)
  return (
    <div>
      <h1>Hero Info</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent}} />
      <div dangerouslySetInnerHTML={{ __html: aboutMarket}} />
    </div>
  );
}

export default HeroInfo;