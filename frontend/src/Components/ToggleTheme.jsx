import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from "@mui/material";

function ToggleTheme(props) {
    const { mode, setMode } = props;
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                }}
            >
                <FormControl>
                    <FormLabel id="demo-theme-toggle">Theme</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-theme-toggle"
                        name="theme-toggle"
                        row
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                    >
                        <FormControlLabel value="light" control={<Radio />} label="Light" />
                        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default ToggleTheme
