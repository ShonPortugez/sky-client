import {Stack, Typography} from "@mui/material";
import {Infinity, BarChart3, Link, ShieldCheck} from 'lucide-react';
import Box from "@mui/material/Box";

const features = [
    {
        title: 'Unlimited responses',
        content:
            'Collect answers from multiple surveys in parallel, without caps or artificial limits.',
        Icon: Infinity,
    },
    {
        title: 'Built-in analytics',
        content:
            'Clear, real-time insights help you understand trends, completion rates, and response distribution at a glance.',
        Icon: BarChart3,
    },
    {
        title: 'Shareable surveys',
        content:
            'Distribute surveys via simple links — respondents can participate instantly, no account required.',
        Icon: Link,
    },
    {
        title: 'Privacy-first by design',
        content:
            'Responses are handled securely with sensible defaults, keeping survey data isolated and protected.',
        Icon: ShieldCheck,
    },
];

const AuthHeroSection = () => {
    return (
        <Stack direction={'column'} gap={3}>
            {features.map(({ title, content, Icon }) => (
                <Stack key={title} direction="row" gap={2} sx={{ alignItems: 'start' }}>
                    <Box sx={{ py: 1 }} color="text.secondary">
                        <Icon />
                    </Box>

                    <Stack direction="column">
                        <Typography variant="h6" fontWeight={550} align="left">
                            {title}
                        </Typography>
                        <Typography variant="body2" align="left" color="text.secondary">
                            {content}
                        </Typography>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
};

export default AuthHeroSection;