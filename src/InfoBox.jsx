import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1633885275471-396288500f5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1601116780183-d2e80a0bd47f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWF0cmhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    
        
    return(
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <SevereColdIcon/>

          }
        </Typography>
        
<Typography variant="body2" sx={{ color: 'text.secondary' }}>
  Temperature={info.temp}°C
</Typography>
<Typography variant="body2" sx={{ color: 'text.secondary' }}>
  Humidity={info.humidity}
</Typography>
<Typography variant="body2" sx={{ color: 'text.secondary' }}>
  Min Temp={info.temp_min}°C
</Typography>
<Typography variant="body2" sx={{ color: 'text.secondary' }}>
  Max Temp={info.temp_max}°C
</Typography>
<Typography variant="body2" sx={{ color: 'text.secondary' }}>
  The Weather can be described as <i>{info.weather}</i> and feels like={info.feels_like}°C
</Typography>

      </CardContent>
      
    </Card>
    </div>

            </div>
    );
}
