import { useState, useEffect } from 'react';
function HeroInfo(props) {
     const [htmlContent,setHtmlContent] = useState('');
     const [aboutMarket,setAboutMarket] = useState('');

     useEffect(() => {
          let content = props?.data;
          let aboutMarketContent = props?.aboutMarket;
          setAboutMarket(aboutMarketContent);
          content = content?.replace(/color: #44475b/g, 'font-weight: 800').replace(/font-size: 12pt/g, '');
          setHtmlContent(content);
        }, [props?.data, props?.aboutMarket]);

  return (
    <div className='hero'>
      <div dangerouslySetInnerHTML={{ __html: htmlContent}} />
      <div dangerouslySetInnerHTML={{ __html: aboutMarket}} />
    </div>
  );
}

export default HeroInfo;