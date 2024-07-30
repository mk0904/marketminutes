function DailyChange(props){

     const DailyChangeObject = props?.dailyChange;
     const finalData = DailyChangeObject
     console.log(finalData)

     
     return(
     <div>
          <h1>Daily Change</h1>

          <div>
               <p>Gold</p>
               <p>{finalData?.['is_gold_market_open']===true ? `${finalData?.['gold']?.['value']}` : ''}</p>
               <p>{finalData?.['is_gold_market_open']===true ? `${finalData?.['gold']?.['perc_change']}` : ''}</p>
          </div>

          <div>
               <p>Silver</p>
               <p>{finalData?.['is_silver_market_open']===true ? `${finalData?.['silver']?.['value']}` : ''}</p>
               <p>{finalData?.['is_silver_market_open']===true ? `${finalData?.['silver']?.['perc_change']}` : ''}</p>
          </div>

          <div>
               <p>USD-INR</p>
               <p>{finalData?.['is_usd_inr_market_open']===true ? `${finalData?.['usd_inr']?.['value']}` : ''}</p>
               <p>{finalData?.['is_usd_inr_market_open']===true ? `${finalData?.['usd_inr']?.['perc_change']}` : ''}</p>
          </div>

          <div>
               <p>Dow Jones</p>
               <p>{finalData?.['is_dow_jones_market_open']===true ? `${finalData?.['dow_jones']?.['value']}` : ''}</p>
               <p>{finalData?.['is_dow_jones_market_open']===true ? `${finalData?.['dow_jones']?.['perc_change']}` : ''}</p>
          </div>

          <div>
               <p>Nasdaq</p>
               <p>{finalData?.['is_nasdaq_market_open']===true ? `${finalData?.['nasdaq']?.['value']}` : ''}</p>
               <p>{finalData?.['is_nasdaq_market_open']===true ? `${finalData?.['nasdaq']?.['perc_change']}` : ''}</p>
          </div>

     </div>)
}

export default DailyChange;