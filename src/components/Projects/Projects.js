import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Cvms from "../../../src/Assets/Projects/cvms.png";
import emotion from "../../Assets/Projects/emotion.png";
import Admin from "../../../src/Assets/Projects/adminDashboard.png";
import chatify from "../../Assets/Projects/chatify.png";
import Cvmsapp from "../../../src/Assets/Projects/Cvmsapp.png";
import Examprime from "../../../src/Assets/Projects/examprime.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Favour-565/Chatify-Masters.git"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Examprime}
              isBlog={false}
              title="ExamPrimed"
              description="ExamPrimed is a product of Martad Education & Skills Development Ltd., designed to make learning fun and revision easy.

Our online platform combines entertainment with education, offering a vast array of engaging exams across various subjects.

These interactive exams foster critical thinking and problem-solving skills, tailored to different age groups for a more enjoyable and accessible learning experience."
              ghLink="https://github.com/Favour-565/ExamPrimed.git"
              Link="https://examsprimed.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Admin}
              isBlog={false}
              title="CVMS Admin Service"
              description="The Customs Verification Management System (CVMS) Admin Service"
              ghLink="https://github.com/afripoint/cvms_admin_services.git"
              demoLink="https://cvmsadmin.nigeriatradehub.gov.ng/"              
            /> 
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cvms}
              isBlog={false}
              title="Customs Verification Management System"
              description="The Customs Verification Management System (CVMS) is a digital platform designed to make customs duty verification in Nigeria faster, more transparent, and more reliable. Developed through a strategic collaboration between the Nigeria Customs Service (NCS), Trade Modernisation Project (TMP) and indigenous technological partners, Afripoint Consult Limited, CVMS provides individuals, businesses, and agencies with a secure portal to verify customs duty payments and confirm their authenticity."
              ghLink="https://github.com/afripoint/cvms-frontend-microservice.git"
              demoLink="https://cvmsadmin.nigeriatradehub.gov.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cvmsapp}
              isBlog={false}
              title="Enforcement App"
              description="The Customs Verification Management System (CVMS) VIN Check App was created to solve exactly this problem. It provides a fast, reliable, and simple way to confirm a vehicle's clearance status directly from the Nigeria Customs Service."
              ghLink="https://github.com/afripoint/cvms-mobile.git"
              demoLink="https://www.youtube.com/watch?si=u9UVAiZNAwOwyyL4&v=vwbITr4_7Zc&feature=youtu.be"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Favour-565/Face_And_Emotion_Detection.git"
                   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
