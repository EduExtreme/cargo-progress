import {
  Box,
  CircularProgress,
  Flex,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { Fragment } from 'react'

const Names = [
  {
    id: 1,
    name: 'Navio A',
    FirstLocation: 'South Africa',
    currentLocation: 'Tokio',
    lastLocation: 'Brazil ',
    progress: 85,
  },
  {
    id: 2,
    name: 'Navio E',
    progress: 12,
  },
  {
    id: 3,
    name: 'Navio C',
    progress: 75,
  },
  {
    id: 4,
    name: 'Navio D',
    progress: 57,
  },
  {
    id: 5,
    name: 'Navio B',
    progress: 38,
  },
]

export default function App() {
  return (
    <>
      <Box
        my={{ base: '6', lg: '5rem' }}
        px={{ base: '4', md: '8', lg: '10rem' }}
        h="100%"
      >
        {Names.map((item) => (
          <Box bg="black" mt="2rem" h="150px" key={item.id}>
            {item.name}
            {item.name}
            <Flex flexDirection="column">
              <Slider aria-label="slider-ex-1" defaultValue={item.progress}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  )
}
