import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import { display, flexbox } from '@mui/system';


function DailyChange(props){

     const DailyChangeObject = props?.dailyChange;
     const finalData = DailyChangeObject
     console.log(finalData)


     const Item = styled(Sheet)(({ theme }) => ({
          backgroundColor: 'transparent',
          ...theme.typography['body-sm'],
          padding: theme.spacing(0),
          textAlign: 'center',
          borderRadius: 4,
          color: theme.vars.palette.text.secondary,
     }));
       

     
     return(
     <div className='hero'>
          <h1>Daily Change</h1>
          <Grid display={flexbox} justifyContent={'center'}  margin={'10px'} container spacing={4} sx={{ flexGrow: 2 }}>
               <Grid margin={1} className='gold' xs={6} md={3}>
               <Item>
                    <div style={{display:"flex", justifyContent:'space-between'} }>
                         <h3>Gold</h3>
                         <div>
                              <p>{finalData?.['is_gold_market_open']===true ? `${finalData?.['gold']?.['value']}` : ''}</p>
                              <p>{finalData?.['is_gold_market_open']===true ? `${finalData?.['gold']?.['perc_change']}%` : ''}</p>
                         </div>
                    </div>
               </Item>
               </Grid>
               <Grid margin={1} className='silver' xs={3} md={3}>
               <Item>
                    <div style={{display:"flex", justifyContent:'space-between'} }>
                         <h3>Silver</h3>
                         <div>
                              <p>{finalData?.['is_silver_market_open']===true ? `${finalData?.['silver']?.['value']}` : ''}</p>
                              <p>{finalData?.['is_silver_market_open']===true ? `${finalData?.['silver']?.['perc_change']}%` : ''}</p>
                         </div>
                    </div>
               </Item>
               </Grid>
               <Grid margin={1} className='usdinr' xs={3} md={3}>
               <Item>
                    <div style={{display:"flex", justifyContent:'space-between'} }>
                         <h3>USD-INR</h3>
                         <div>
                              <p>{finalData?.['is_usd_inr_market_open']===true ? `${finalData?.['usd_inr']?.['value']}` : ''}</p>
                              <p>{finalData?.['is_usd_inr_market_open']===true ? `${finalData?.['usd_inr']?.['perc_change']}%` : ''}</p>
                         </div>
                    </div>
               </Item>
               </Grid>
               <Grid margin={1} className='dowjones' xs={6} md={4.75}>
               <Item>
                    <div style={{display:"flex", justifyContent:'space-between'} }>
                         <h3>Dow Jones</h3>
                         <div>
                              <p>{finalData?.['is_dow_jones_market_open']===true ? `${finalData?.['dow_jones']?.['value']}` : ''}</p>
                              <p>{finalData?.['is_dow_jones_market_open']===true ? `${finalData?.['dow_jones']?.['perc_change']}%` : ''}</p>
                         </div>
                    </div>
               </Item>
               </Grid>
               <Grid margin={1} className='nasdaq' xs={9.5} md={4.75}>
               <Item>
                    <div style={{display:"flex", justifyContent:'space-between', alignItems:'center'} }>
                         <h3>Nasdaq</h3>
                         <div>
                              <p>{finalData?.['is_nasdaq_market_open']===true ? `${finalData?.['nasdaq']?.['value']}` : ''}</p>
                              <p>{finalData?.['is_nasdaq_market_open']===true ? `${finalData?.['nasdaq']?.['perc_change']}%` : ''}</p>
                         </div>
                    </div>
               </Item>
               </Grid>
          </Grid>
     </div>)
}

export default DailyChange;

