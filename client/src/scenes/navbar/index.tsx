import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography,useTheme, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'
import PixIcon from "@mui/icons-material/Pix";
type Props = {}

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected,setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        <FlexBetween gap="0.75rem">
          <PixIcon sx={{fontSize:"28px"}}/>
          <Typography variant='h4' fontSize="16px">
            Epick
          </Typography>
        </FlexBetween>
        {/* Middle Side */}
        <FlexBetween>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Esp</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Data"
              >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </FlexBetween>
        {/*Right Side*/}
        <FlexBetween gap="2rem">
          <Box sx={{"&:hover":{color:palette.primary[100]}}}>
              <Link
              to="/"
              onClick={() => setSelected("dashboard")}
              style={{
                color:selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration:"inherit"
              }}
              >
              CSGO
              </Link>
          </Box>
          <Box sx={{"&:hover":{color:palette.primary[100]}}}>
          <Link
              to="/dota"
              onClick={() => setSelected("dota")}
              style={{
                color:selected === "dota" ? "inherit" : palette.grey[700],
                textDecoration:"inherit"
              }}
              >
              Dota2
              </Link>
          </Box>
        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar