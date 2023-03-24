import { ReactNode } from 'react';
import {
	Box,
	Flex,
	HStack,
	Link,
	IconButton,
	useDisclosure,
	useColorModeValue,
	Stack,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const Navbar = ({ children }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700'),
		}}
		href={'#'}
	>
		{children}
	</Link>
);

export function Simple() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Box>Logo</Box>
						<HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
							{Links.map((link) => (
								<Navbar key={link}>{link}</Navbar>
							))}
						</HStack>
					</HStack>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack spacing={4}>
							{Links.map((link) => (
								<Navbar key={link}>{link}</Navbar>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
