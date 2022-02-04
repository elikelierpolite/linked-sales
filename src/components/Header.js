import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className='Header' style={{paddingTop:'15px'}}>
            {matches ? 
            <Stack direction="column">
                <div>
                    <Typography className='heading' variant='h3' align="center">Truly Unlimited Software</Typography>
                    <Typography component="p" className='subtitle' variant='h4' align="center">alongside million dollar blueprints to success!</Typography>
                </div>
                <iframe src="https://player.vimeo.com/video/673075901?h=c1347efc19&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </Stack> : 
            <Stack spacing="auto" direction="row">
                <div>
                    <Typography className='heading' variant='h3' align="center">Truly Unlimited Software</Typography>
                    <Typography className='subtitle' component="p" variant='h4' align="center">alongside million dollar blueprints to success!</Typography>
                </div>
                <iframe src="https://player.vimeo.com/video/673075901?h=c1347efc19&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </Stack>}
        </div>
    )
}

export default Header