import { CloseCircle } from 'iconsax-react'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from '../Components/design/styled';
import LabelItem from '../Components/input/labelItem';

import styles from '../Components/design/style.module.css'
import Input from '../Components/input'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Button } from '../Components/design';
import Select from '../Components/select';
import Willaya from "djoudja"


const ContainerFull = styled.div`
    border-radius: 12px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 5em;
    /* height: 100vh;
    overflow-y: auto; */
    position: relative;
    justify-content: center;
    margin-top: ${props => props.margin + "px"};
    margin-bottom: 10px !important;
    bottom: 0;
    width: 70vw;
    margin-right: auto;
    margin-left: auto;
`

const Close = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0;

    button {
        background-color: transparent;
        border: none;
        font-size: 25px;
        cursor: pointer;
    }
`


const Algeria = new Willaya()

export default function Create() {
    const [willaya, setWillaya] = useState(Algeria.getAllWillays()[0])
    const [commune, setCommune] = useState(Algeria.getWillayaByKey(willaya.id)[0])
    useEffect(() => {
        setCommune(Algeria.getWillayaByKey(willaya.id)[0])
    }, [willaya])
    return (
        <>
            <Navbar id={5} />
            <ContainerFull>
                <div className={styles.header}>
                    <div className={styles.header2}>
                        <h1>Creer Une announce</h1>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <LabelItem title={"La catégorie de l’annonce"}>
                                <Input />
                            </LabelItem>
                        </Col>
                        <Col>
                            <LabelItem title={"Le type du bien immobilier "}>
                                <Input />
                            </LabelItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LabelItem title={"Agence"}>
                                <Input />
                            </LabelItem>
                        </Col>
                        <Col>
                            <LabelItem title={"La surface"}>
                                <Input />
                            </LabelItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LabelItem title={"Une description"}>
                                <Input />
                            </LabelItem>
                        </Col>
                        <Col>
                            <LabelItem title={"Le prix"}>
                                <Input />
                            </LabelItem>
                        </Col>
                    </Row>
                    <Row>
                        <div className={styles.title2}> Informations de Contact </div>
                    </Row>
                    <Row>
                        <Col>
                            <LabelItem title={"nom"}>
                                <Input />
                            </LabelItem>
                        </Col>
                        <Col>
                            <LabelItem title={"prénom"}>
                                <Input />
                            </LabelItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LabelItem title={"adresse"}>
                                <Input />
                            </LabelItem>
                        </Col>
                        <Col>
                            <LabelItem title={"email"}>
                                <Input />
                            </LabelItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LabelItem title={"telephone"}>
                                <Input />
                            </LabelItem>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <div className={styles.title2}> La Localisation </div>
                    </Row>
                    <Row>
                        <Col>
                            <LabelItem title={"Willaya"}>
                                <Select values={Algeria.getAllWillays()} value={willaya} onChange={setWillaya} />
                            </LabelItem>
                        </Col>
                        <Col>
                            <LabelItem title={"Commune"}>
                                <Select values={Algeria.getWillayaByKey(willaya.id)} value={commune} onChange={setCommune} />
                            </LabelItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LabelItem title={"adresse"}>
                                <Input />
                            </LabelItem>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col style={{ alignItems: "center", marginTop: "1em" }}>
                            <Button primary={true}>
                                Creer l'announce
                            </Button>
                        </Col>

                    </Row>
                </Container>
            </ContainerFull>
            <Footer />
        </>
    )
}
