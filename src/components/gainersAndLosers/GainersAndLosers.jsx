import React, { useEffect, useState } from 'react';
function GainersAndLosers(props) {
     const [htmlContentTopGainers,setHtmlContentTopGainers] = useState('');
     const [htmlContentTopLosers,setHtmlContentTopLosers] = useState('');
     useEffect(() => {
          let topGainersContent = props?.topGainers;
          let topLosersContent = props?.topLosers;
          setHtmlContentTopGainers(topGainersContent);
          setHtmlContentTopLosers(topLosersContent);
        }, [props?.topGainers, props?.topLosers]);
  return (
    <div>
      <h1>Gainers and Losers</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContentTopGainers}} />
      <div dangerouslySetInnerHTML={{ __html: htmlContentTopLosers}} />
    </div>
  );
}

export default GainersAndLosers;