import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Icon,
  Progress,
  ProgressLabel,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { GiAnchor } from 'react-icons/gi'

const Ships = [
  {
    id: 1,
    name: 'Navio A',
    firstLocation: 'South Africa',
    currentLocation: ['India', 'Russia', 'USA', 'Brazil'],
    lastLocation: 'Brazil ',
    progress: 100,
    arrived: true,
    derparture: false,
  },
  {
    id: 2,
    FirstLocation: 'China',
    currentLocation: ['India', 'Russia', 'USA', 'Brazil'],
    lastLocation: 'Brazil ',
    name: 'Navio E',
    progress: 12,
    arrived: false,
    derparture: true,
  },
  {
    id: 3,
    name: 'Navio C',
    FirstLocation: 'Marrocos',
    currentLocation: ['India', 'Russia', 'USA', 'Brazil'],
    lastLocation: 'Brazil ',
    progress: 75,
    arrived: false,
    derparture: true,
  },
  {
    id: 4,
    name: 'Navio D',
    FirstLocation: 'India',
    currentLocation: ['India', 'Russia', 'USA', 'Brazil'],
    lastLocation: 'Brazil ',
    progress: 57,
    arrived: false,
    derparture: true,
  },
  {
    id: 5,
    name: 'Navio B',
    FirstLocation: 'South Africa',
    currentLocation: ['India', 'Russia', 'USA', 'Brazil'],
    lastLocation: 'USA ',
    progress: 38,
    arrived: true,
    derparture: false,
  },
]

export default function App() {
  return (
    <Tabs display="flex">
      <Flex
        flexDirection="column"
        w="15%"
        h="100vh"
        bg="blue.100"
        p="2rem 1rem"
      >
        <Box h="6vh">
          <GiAnchor size={50} />
        </Box>
        <Flex h="6vh" alignItems="center">
          ANCHOR DASHBOARD
        </Flex>

        <TabList>
          <Tab>Ships</Tab>
          <Tab>Arrived</Tab>
          <Tab>Derparture</Tab>
        </TabList>
      </Flex>

      <Flex flexDirection="column" margin="8.5rem 2rem" w="100%">
        <TabPanels display="flex">
          <TabPanel w="100%">
            <Flex justifyContent="space-between"></Flex>

            <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 100]}>
              <RangeSliderTrack bg="red.100">
                <RangeSliderFilledTrack bg="blue.500" />
              </RangeSliderTrack>

              <RangeSliderThumb boxSize={6} index={1}>
                <Icon color="tomato" as={GiAnchor} position="absolute" />
              </RangeSliderThumb>
            </RangeSlider>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  )
}
