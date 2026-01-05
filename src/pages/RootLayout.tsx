import {Outlet} from "react-router-dom";
import BrandedHeader from "../components/common/BrandedHeader.tsx";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";

const RootLayout = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Box
                sx={(theme) => {
                    const color =
                        theme.palette.mode === 'light'
                            ? 'hsl(210, 100%, 90%)'
                            : 'hsl(210, 100%, 20%)';

                    return {
                        position: 'absolute',
                        inset: 0,
                        height: 500,
                        zIndex: 0,
                        background: `radial-gradient(ellipse 70% 50% at 50% -20%,${color},transparent)`,
                    };
                }}
            />
            <Stack direction={'row'} sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1,
            }}>
                <BrandedHeader />
            </Stack>
            <main>
                <Outlet />
            </main>
        </Box>
    );
};

export default RootLayout;