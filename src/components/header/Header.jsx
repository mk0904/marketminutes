// imorted up and down icons
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';


function Header (props){
     // made objects from props passed from App.js
     const sensex = props.sensex;
     const nifty = props.nifty;

     const Item = styled(Paper)(({ theme }) => ({
          backgroundColor: 'transparent',
          ...theme.typography.body2,
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        }))

     return (
     <div>
          <Grid marginTop={'20px'}width={'400px'} container spacing={2} columns={40}>
               <Grid item xs={20}>
                    <Item >
                         <div className='herohover' style={{display:'flex', justifyContent:'space-between', minWidth:'fit-content'}}>
                              <h3>Sensex</h3>
                              <div>
                                   <p>{sensex?.value}</p>
                                   <p style={{ color : sensex?.perc_change > 0 ? '#04b286' : '#eb5a3d' }}>{sensex?.perc_change}%</p>
                                   {sensex?.perc_change > 0 ? <TrendingUpIcon style={{color : '#04b286'}}/> : <TrendingDownIcon style={{color: '#eb5a3d'}}/>}
                              </div>
                         </div>
                    </Item>
               </Grid>
               <Grid item xs={20}>
                    <Item>               
                         <div className='herohover'  style={{display:'flex', justifyContent:'space-between', minWidth:'fit-content'}}>
                              <h3>Nifty</h3>
                              <div>
                                   <p>{nifty?.value}</p>
                                   <p style={{ color : nifty?.perc_change > 0 ? '#04b286' : '#eb5a3d' }}>{nifty?.perc_change}%</p>
                                   {nifty?.perc_change > 0 ? <TrendingUpIcon style={{ color: "#04b286" }}/> : <TrendingDownIcon style={{color: '#eb5a3d'}}/>}
                              </div>
                         </div>
                    </Item>
               </Grid>
          </Grid>
     </div>)
}
export default Header;