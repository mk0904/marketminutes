function LongTermReturns(props){
     const returnsData = props?.returns
     console.log(returnsData)
     return (
     <div>
          <p>Sensex</p>
          <p>{returnsData?.['sensex']?.['perc_change']}</p>
          <p>Nifty</p>
          <p>{returnsData?.['nifty']?.['perc_change']}</p>
          <p>Dow Jones</p>
          <p>{returnsData?.['dow_jones']?.['perc_change']}</p>
          <p>Nasdaq</p>
          <p>{returnsData?.['nasdaq']?.['perc_change']}</p>
     </div>)
}

export default LongTermReturns;