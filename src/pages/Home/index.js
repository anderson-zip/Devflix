import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import * as ScreenOrientation from 'expo-screen-orientation';

import VideosList from '../../Database/videos.json';
import VideosSenai from '../../Database/tireduvidassenai.json';
import VideosDW from '../../Database/desenvolvimentoWeb.json';
import VideosDDS1 from '../../Database/DDS1.json';
import VideosDDS2 from '../../Database/php.json';
import VideosBanco from '../../Database/bancodedados.json';
import VideosMobile from '../../Database/Dmobile.json';
import Header from "../../components/Header";
import Videos from "../../components/Videos";
import Poster from "../../components/Poster";

const Container = styled.ScrollView`
    flex: 1;
    background-color:#483D8B;
`;

async function changeScreenOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export default function Home(){
    changeScreenOrientation();
    return(
        <>
            <StatusBar 
                translucent 
                backgroundColor="transparent" 
                barStyle="light-content"
            />
            <Container>
                <Poster
                    url={"https://img.youtube.com/vi/LGye9NZpiME/mqdefault.jpg"}
                    title={
                        "Matérias  Desenvolvimento de Sistemas do SENAI"
                    }
                    tags={["Turmas", "2020"]}
                    content={<Header />}
                ></Poster>
                <Videos label="Lógica de Programação" videos={VideosList}> </Videos>
                <Videos label="Desenvolvimento Web" videos={VideosDW}> </Videos>
                <Videos label="Desenvolvimento de Sistemas I" videos={VideosDDS1}> </Videos>
                <Videos label="Desenvolvimento de Sistemas II" videos={VideosDDS2}></Videos>
                <Videos label="Banco de Dados " videos={VideosBanco}></Videos>
                <Videos label="Desenvolvimento Mobile" videos={VideosMobile}></Videos>
                <Videos label="Série tire dúvidas Senai" videos={VideosSenai}></Videos>

            </Container>
        </>
    );
}

