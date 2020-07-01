import React from 'react';
import { StatusBar } from 'react-native';
import Styled from 'styled-components/native';
import * as ScreenOrientation from 'expo-screen-orientation';

import Videos from '../../Database/videos.json';

const Container =  Styled.ScrollView`
    flex: 1;
    background-color:#333;

`;

async function changeScreenOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
}

export default function Home(){
    changeScreenOrientation();
    return(
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content">
            <Container>
                
            </Container>
        </StatusBar>
    );
}