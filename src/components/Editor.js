import * as React from "react";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from '@mui/material/Typography';

export default function Editor() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {matches ? (
    <Stack className="Editor" spacing={10}>
        <div>
            <img src="https://i.ibb.co/g38T7WN/Learn-Create.png" width={700} height={370} />
        </div>
        <div>
                <Typography align="center" sx={{color:'#fff'}} variant="h2">No BS, it works!</Typography><br /><br />
                <Typography align="center" component="p" sx={{color:'#fff'}} variant="h4">Learn 6-figure blueprints from ClickFunnels Two Comma Club members and create your online business with no limits!</Typography>
        </div>
    </Stack>
      ) : (
        <Stack className="Editor" spacing={10} direction="row">
            <div>
                <img src="https://i.ibb.co/g38T7WN/Learn-Create.png" width={700} height={370} />
            </div>
            <div>
                    <Typography sx={{color:'#fff'}} variant="h2">No BS, it works!</Typography><br /><br />
                    <Typography component="p" sx={{color:'#fff'}} variant="h4">Learn 6-figure blueprints from ClickFunnels Two Comma Club members and create your online business with no limits!</Typography>
            </div>
        </Stack>
      )}
    </>
  );
}
