import React from "react";
import { Col, Row } from "../Grid";
import Wrapper from "../Wrapper";
import AboutCard from "../AboutCard";
import about from "../../aboutus.json";

function About() {
    return (
        <Wrapper>
        <Row className="justify-content-md-center">
            <Col size="md-6">
            <AboutCard 
            name={about[0].name}
            image={about[0].image}
            occupation={about[0].occupation}
            location={about[0].location}
            hobbies={about[0].hobbies}
            />
            </Col>
            <Col size="md-6">
            <AboutCard 
            name={about[1].name}
            image={about[1].image}
            occupation={about[1].occupation}
            location={about[1].location}
            hobbies={about[1].hobbies}
            />
            </Col>
        </Row>
        <Row className="justify-content-md-center">
>
        <Col size="md-6">
        <AboutCard 
            name={about[2].name}
            image={about[2].image}
            occupation={about[2].occupation}
            location={about[2].location}
            hobbies={about[2].hobbies}
            />
            </Col>
            <Col size="mx-auto">
            <AboutCard 
            name={about[3].name}
            image={about[3].image}
            occupation={about[3].occupation}
            location={about[3].location}
            hobbies={about[3].hobbies}
            />
            </Col>
            
        </Row>
        </Wrapper>







    );
}

export default About;