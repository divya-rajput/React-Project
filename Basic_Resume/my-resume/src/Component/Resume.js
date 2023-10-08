import "../Component/Resume.css";
// import "../Component/divya.png";
import pic from "../Component/divya.png";

function Resume(){
    return (
        <div className="container">
        <div className="introduction">
            <img src={pic}  alt="Pic not found"/>
            <div>
                <h1><span>D</span>ivya <span>R</span>ajput</h1>
            </div>
        </div>
        <p>Solution driven Software Engineer adept at contributing to highly collaborative work environment and
            finding solutions. Proven experience developing with Python, Golang, and JavaScript based applications.</p>
        <hr/>
        <h2>Experience</h2>
            <div className="exp">
                <h3>Software Engineer II/Philips India Private Limited, Bengaluru, India(2 YEARS)</h3>
                <ul>
                    <li><strong>Philips Wellcentive</strong></li>
                    <ul>
                        <li>As a senior engineer in the team, I participated in the development of new components for the project and worked on a PoC for an async RESTful API caller in Go.</li>
                        <li>Worked on transforming PHI information in a secure environment using Python and JavaScript.</li>
                        <li> Managed Development cluster for the ETL Teams on MS Azure including managing VMs, Virtual Network, and Key Vaults.</li> 
                        <li>Managed the team’s tasks, negotiated scope with stakeholders, planned sprints, and tracked deliverables. Maintained version control using Git and collaborated with team members using tools like GitHub or Bit bucket.</li>
                        <li>Mentored new joiners & juniors and helped them on-board on development and domain.</li>
                    </ul>
                    <li><strong>Philips Sleep and Respiratory Care</strong></li>
                    <ul>
                        <li>Wrote JavaScript code in transformation layer of Philips Intellibridge Enterprise for transforming PHI data coming sensors for permanent storage and analytics.</li>
                        <li> Providing interoperability solutions by integrating multiple healthcare applications using HL7 standards.</li>
                        <li> By using Rhapsody engine and Philips Care Orchestrator which unify care teams, enhance interoperability, and can monitor and manage users remotely.</li>
                    </ul>
    
                    <li><strong>Medulife</strong></li>
                    <ul>
                        <li>Provided sufficient interface design details to Philips and the UK-Munister implementation resources to build the in-scope interfaces in Rhapsody.</li>
                        <li>Worked with the SOAP request/response for FHIR format data.</li>
                        <li>Single handedly did the development, documentation, and delivery of the project.</li>
                    </ul>
                </ul>
            </div>
            <div className="exp">
                <h3>Software Engineer I/Philips India Private Limited, Bengaluru, India(2+ YEARS)</h3>
                <ul>
                    <li><strong>Philips Wellcentive</strong></li>
                    <ul>
                        <li>I was a part of the Philips Wellcentive Data Management Platform where I worked on performing ETL on protected health information (PHI) using Python and JavaScript.</li>
                        <li>Designed and developed RESTful APIs to facilitate data exchange between the front-end and back-end systems, ensuring seamless functionality.</li>
                        <li>Collaborated with product owners and business analysts to convert user stories and acceptance criteria into Gherkin syntax for BDD test scenarios.</li> 
                        <li>Implemented and maintained a robust Cucumber-based test automation framework for functional and regression testing of Project Wellcentive.</li>
                        <li>Utilized state management libraries such as Redux to efficiently manage application state and enhance performance.</li>
                        <li>I started managing the team’s VMs on Azure.</li>
                    </ul>
                    <li><strong>Resource Management Portal</strong></li>
                    <ul>
                        <li>Developed and maintained multiple Django web applications, leveraging Python and Django's best practices to deliver scalable and high-performing solutions.</li>
                        <li>Collaborated with cross-functional teams to gather requirements, design application architectures, and implement features.</li>
                        <li>Integrated front-end designs with Django templates, ensuring seamless user experiences.</li> 
                        <li>Utilized version control systems like Git, enabling efficient collaboration and codebase management.</li>

                    </ul>
                </ul>
            </div>
            <hr/>
            
            <h2>Personal Projects</h2> 
            <div className="exp">
                <strong>Portfolio Website</strong>
                <ul>
                    <li>Designed and implemented an intuitive and visually appealing user interface using React JS, HTML5, CSS3, and JavaScript.</li>
                    <li>Developed an interactive contact form using Django's form handling functionalities,enabling visitors to easily get in touch with me.</li>
                    <li>Stayed updated with the latest React JS and Django releases, best practices, and emerging web development trends.</li>    
                </ul>
            </div>
                
            <hr/>
            <h2>Skills</h2>
            <p>• Golang • Python • JavaScript • AngularJS • ETL • Docker • PHI • MS Azure • Azure DevOps • Agile • Git • ReactJS • Redux • HTML • CSS • Cucumber • BDD • ISTQB • Gherkin</p>
            <hr/>
            <h2>Certification</h2>
            <p>• ISTQB • HL7 • Scaled Agile for Teams</p>
            <hr/>
            <h2>Education</h2>
            <strong>July 2016-July 2018</strong>
            <p>Master of Technology in Network and Information Security/Nirma University, Ahmedabad, India.</p>
            <strong>July 2012-July 2016</strong>
            <p>Bachelor of Technology in Information Technology/ Gujarat Technological University, Anand, India.</p>
            <hr/>
            <h2>Activities</h2>
            <p>Yoga • Workout • Cooking • Dancing • Travel • Modelling </p>

        </div>
    );
    
}

export default Resume;