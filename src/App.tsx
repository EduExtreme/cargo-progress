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
  const sizeShipsArray = Ships.length - 1

  console.log('array size : ', sizeShipsArray)
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
              <RangeSliderTrack bg="red.100"></RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={1} bg="blue.100">
                <Icon color="tomato" as={GiAnchor} position="absolute" />
                <Text
                  pos="absolute"
                  fontSize="0.75rem"
                  top="-1.5rem"
                  color="gray.900"
                >
                  Partida
                </Text>
              </RangeSliderThumb>
            </RangeSlider>
            {Ships.slice(0)
              .reverse()
              .map((item, index) => (
                <Fragment key={item.id}>
                  <RangeSlider
                    defaultValue={[0]}
                    min={0}
                    max={0}
                    width="100%"
                    m="0 auto"
                  >
                    <RangeSliderTrack
                      h="0.3125rem"
                      bg={index === sizeShipsArray ? '#D2D2D2' : 'blue.500'}
                    />
                  </RangeSlider>
                </Fragment>
              ))}
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
