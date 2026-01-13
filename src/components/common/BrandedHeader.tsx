import { Stack, Typography } from "@mui/material";
import logo from '../../assets/cirrus.png'
import Box from "@mui/material/Box";
import ColorModeIconDropdown from "../../theme/ColorModeIconDropdown.tsx";

const BrandedHeader = () => {
    return (
        <Stack direction="row" sx={{ width: '100%',alignItems: 'center', justifyContent: 'space-between'}}>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center'}}>
                <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={{
                        height: 30,
                        width: 'auto',
                    }}
                />
                <Typography variant={'h4'} fontSize={'xx-large'}>Cirrus</Typography>
            </Stack>
            <ColorModeIconDropdown/>
        </Stack>

    );
};

export default BrandedHeader;