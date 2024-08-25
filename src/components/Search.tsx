import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import Input from '@mui/joy/Input'
import Stack from '@mui/joy/Stack'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import Typography from '@mui/joy/Typography'
import { useState } from 'react'

export default function Search() {
  const [query,setQuery] = useState(undefined)
  return (
    <div>
      <Stack spacing={1} direction="row" sx={{ mb: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <Input
            placeholder="Search"
            value={query}
            startDecorator={<SearchRoundedIcon />}
            aria-label="Search"
          />
        </FormControl>
        <Button variant="solid" color="primary">
          Search
        </Button>
      </Stack>
      <Typography level="body-sm">232 stays in Melbourne, Australia</Typography>
    </div>
  )
}
