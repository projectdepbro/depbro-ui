import { Box, IconButton } from '@mui/joy'
import Typography from '@mui/joy/Typography'
import Avatar from '@mui/joy/Avatar'
import ColorSchemeToggle from './ColorSchemeToggle'
import DepBroLogo from './DepBroLogo'

export default function HeaderSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        top: 0,
        px: 1.5,
        py: 1,
        zIndex: 10000,
        backgroundColor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <IconButton size="sm" variant="soft">
          <DepBroLogo />
        </IconButton>
        <Typography component="h1" fontWeight="xl">
          DepBro
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <Box
          sx={{
            gap: 1,
            alignItems: 'center',
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Avatar
            variant="outlined"
            size="sm"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-sm">Siriwat K.</Typography>
            <Typography level="body-xs">siriwatk@test.com</Typography>
          </Box>
        </Box>
        <ColorSchemeToggle sx={{ alignSelf: 'center' }} />
      </Box>
    </Box>
  )
}
