import React from 'react'
import styled from 'styled-components'
import CardComponenet from '../Components/CardComponenet'
import Footer from '../Components/Footer'
import Input from '../Components/input'
import LabelItem from '../Components/input/labelItem'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/search'
import Select from '../Components/select'

const Container = styled.div`  
    display: flex;
    flex-direction: column;
`
const Layout = styled.div`  
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`
const Side = styled.div`  
    width: max(300px,20vw);
    background-color: #fcfcfc;
`
const Main = styled.div`  
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`
const H1 = styled.div`
    font-family: Poppins;
    font-size: 24px;
    color: #262626;
    font-weight: bold;
    margin-bottom: 2em;
    margin-top: 1em;
`

const Row = styled.div`  
    display: flex;
    flex-direction: row;
    margin: 10px;
`
const Col = styled.div`  
    display: flex;
    flex:1;
    margin: 10px;
`
export default function Search() {
    return (
        <Container>
            <Navbar />
            <Layout>
                <Side>
                    <H1>Filter By</H1>
                    <LabelItem title={"Le Type de l’AI"}>
                        <Select width={"auto"} />
                    </LabelItem>
                    <LabelItem title={"La Wilaya"}>
                        <Select width={"auto"} />
                    </LabelItem>
                    <LabelItem title={"La commune d’une Wilaya"}>
                        <Select width={"auto"} />
                    </LabelItem>
                    <LabelItem title={"Période"}>
                        <Input />
                    </LabelItem>
                </Side>
                <Main>
                    <SearchBar always={true} />
                    <Row>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                        <Col>
                            <CardComponenet photo={"/phto2.png"} price="300" />
                        </Col>
                    </Row>
                </Main>
            </Layout>
            <Footer />
        </Container>
    )
}
