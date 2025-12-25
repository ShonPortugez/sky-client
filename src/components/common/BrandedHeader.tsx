import { Stack, Typography } from "@mui/material";
import logo from '../../assets/cirrus.png'
import Box from "@mui/material/Box";

const BrandedHeader = () => {
    return (
        <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
            <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                    height: 45,
                    width: 'auto',
                }}
            />
            <Typography variant={'h3'} fontSize={'xx-large'} fontWeight={'bold'}>Cirrus</Typography>
        </Stack>
    );
};

export default BrandedHeader;