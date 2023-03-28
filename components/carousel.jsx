import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import axios from 'axios';

import { captions } from './captions';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const [carousel, setCarousel] = React.useState([]);

  React.useEffect(() => {
    axios.get('/api/captions').then((res) => {
      setCarousel(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>q
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        console.log(caption)
        {captions.map((item, index) => { return(
          <Box key={index}>
            <img src={item.image} alt={item.title} width="100%" height="600px" />
            <Box position="absolute" bottom={0} left={0} width="100%" p={4} bg="rgba(0, 0, 0, 0.7)">
              <Heading fontSize="2xl" mb={2} color="white">{item.title}</Heading>
            </Box>
          </Box>
        )})}
      </Slider>
    </Box>
  );
}