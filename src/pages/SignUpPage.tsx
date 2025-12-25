import {Button, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import RegisterForm from "../components/auth/RegisterForm.tsx";
import {useNavigate} from "react-router-dom";
import BrandedHeader from "../components/common/BrandedHeader.tsx";

const SignUpHeader = () => {
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
                        Have an account already?
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
                        onClick={() => navigate('/sign-in')}
                    >
                        Sign in
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};

const SignUpPage = () => {
    return (
        <Box sx={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
        }}>
            <SignUpHeader />
            <Stack
                sx={{
                    width: '25%',
                    margin: '0 auto',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Typography variant={'h3'} fontSize={'xx-large'} fontWeight={'450'}>Sign up</Typography>
                <RegisterForm />
            </Stack>
        </Box>
    );
};

export default SignUpPage;