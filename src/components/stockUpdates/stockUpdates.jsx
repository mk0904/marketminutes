function StockUpdates (props) {
     let data = props?.news;
     const finalData = data?.[1]['title'] === 'Stocks Updates' ? data?.[1]['description'] : 'No Updates available';

     return (
          <div className="hero">
               <h1>Stock Updates</h1>
               <div dangerouslySetInnerHTML={{ __html: finalData}} />
          </div>
     );
}

export default StockUpdates;