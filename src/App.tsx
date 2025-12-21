import './App.css'
import { Card, CardContent, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import RegisterForm from "./components/RegisterForm.tsx";
import ColorModeIconDropdown from "./theme/ColorModeIconDropdown.tsx";
import AuthHeroSection from "./components/AuthHeroSection.tsx";

function App() {

  return (
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          m: 0,
          p: 0,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
          <Stack sx={{ width: '90%', maxWidth: 1200 }}>
              <Stack
                  direction={{ xs: 'column-reverse', md: 'row' }}
                  spacing={2}
                  sx={{
                      justifyContent: { xs: 'center', md: 'space-between' },
                      alignItems: 'center'
                  }}>
                  <Box sx={{ width: { xs: '100%', md: '40%' }, mt: { xs: 2, md: 0 } }}>
                      <AuthHeroSection />
                  </Box>
                  <Card sx={{
                      pl: { xs: 2, md: 4 },
                      py: 2,
                      width: { xs: '100%', md: '40%' },
                      height: '100%'
                  }}>
                      <CardContent>
                          <Stack direction="row" spacing={2} justifyContent={'space-between'} alignItems="center">
                              <Typography variant="h3" fontWeight={'bold'} align={'left'}>Sign in</Typography>
                              <ColorModeIconDropdown size={'small'} />
                          </Stack>
                          <RegisterForm />
                      </CardContent>
                  </Card>
              </Stack>
          </Stack>
      </Box>
  )
}

export default App
