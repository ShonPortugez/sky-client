import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import BrandedHeader from "../components/common/BrandedHeader.tsx";
import SignInForm from "../components/auth/SignInForm.tsx";

const SignInHeader = () => {
    const navigate = useNavigate();
    return (
        <>
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
                <Stack direction={'row'} sx={{
                    alignItems: 'center',
                }}>
                    <Typography>
                        No account yet?
                    </Typography>
                    <Button
                        variant="text"
                        sx={{
                            color: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'primary.dark',
                            },
                        }}
                        onClick={() => navigate('/sign-up')}
                    >
                        Sign up
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};

const SignInPage = () => {
    return (
        <Box sx={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
        }}>
            <SignInHeader />
            <Stack
                sx={{
                    width: '25%',
                    margin: '0 auto',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Typography variant={'h3'} fontSize={'xx-large'} fontWeight={'450'}>Sign in</Typography>
                <SignInForm />
            </Stack>
        </Box>

    );
};

export default SignInPage;