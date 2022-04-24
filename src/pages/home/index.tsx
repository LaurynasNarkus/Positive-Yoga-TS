import React, { useState } from 'react';
//import styled from 'styled-components/macro';
import { Box, SectionWrapper } from 'components';
import { useQuery } from 'styles/breakpoints';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components/macro';
import { Header } from 'components/sections/Header/Header';
import { IntroText } from 'components/sections/IntroText/IntroText'
import { Program } from 'components/sections/Program/Program'


const Home: React.FC = () => {

	const { isMobile } = useQuery();

	return (
		//NOTE: THIS ISNT A GOOD PRACTICE. WE WILL CREATE A FILE, FOR PROVIDERS.
		<ThemeProvider theme={theme}>
			<SectionWrapper>
				<Box
					backgroundColor='white'
					minHeight={isMobile ? '50%' : '100vh'}
					fontFamily = 'Red Hat Display'
				>
					<Header />
					<IntroText />
					<Program />
					FOOOOOD
				</Box>
			</SectionWrapper>
		</ThemeProvider>
	);
};

export default Home;