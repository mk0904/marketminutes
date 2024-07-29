// imorted up and down icons
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import './Header.module.css'
function Header (props){
     // made objects from props passed from App.js
     const sensex = props.sensex;
     const nifty = props.nifty;

     return (<div>
          <h1>marketminutes</h1>
          <h2>{props.title}</h2>
          <p>{props.date}</p>
          <p>{props.marketStatus}</p>
          <div>
               <div>
                    <h3>Sensex</h3>
                    <p>{sensex?.value}</p>
                    <p style={{ color : sensex?.perc_change > 0 ? '#04b286' : '#eb5a3d' }}>{sensex?.perc_change}%</p>
                    {sensex?.perc_change > 0 ? <TrendingUpIcon style={{color : '#04b286'}}/> : <TrendingDownIcon style={{color: '#eb5a3d'}}/>}
               </div>
               <div>
                    <h3>Nifty</h3>
                    <p>{nifty?.value}</p>
                    <p style={{ color : nifty?.perc_change > 0 ? '#04b286' : '#eb5a3d' }}>{nifty?.perc_change}%</p>
                    {nifty?.perc_change > 0 ? <TrendingUpIcon style={{ color: "#04b286" }}/> : <TrendingDownIcon style={{color: '#eb5a3d'}}/>}
               </div>
          </div>
     </div>)
}
export default Header;