import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "./Info.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

function Info() {
    return (
        <>
            <div className="gallery">
                <h1>People Behind Saath Foundation.</h1>
            </div>
            {/* image */}
            <div className="images">
                <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-4 img-card">
                        <img
                            className="img-fluid rounded"
                            alt="pic"
                            src={require("./1.jpeg")}
                        />
                        <h1 className="img-caption">BEFORE</h1>
                    </MDBCol>

                    <MDBCol lg="4" md="12" className="mb-4 ">
                        <img
                            className="img-fluid rounded img-card"
                            alt="pic"
                            src={require("./2.jpeg")}
                        />
                        <h1 className="img-caption">WHEN WE TAKE OVER </h1>
                    </MDBCol>

                    <MDBCol lg="4" md="12" className="mb-4 ">
                        <img
                            className="img-fluid rounded img-card"
                            alt="pic"
                            src={require("./3.jpeg")}
                        />
                        <h1 className="img-caption">AFTER</h1>
                    </MDBCol>
                </MDBRow>
            </div>

            {/*  End Images */}

            {/* small Cards */}
            <div className="info-container">
                <CardGroup>
                    <Card className="img-cards">
                        <Card.Body>
                            <div className="title">
                                <Card.Title>What We Do.</Card.Title>
                            </div>
                            <Card.Text>
                                "Saath Animal Welfare Trust" is a animal shelter . We are a
                                non-profiting organisation which is run by volunteers. We rescue
                                a variety of animals including dogs, cats & etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="img-cards">
                        <Card.Body>
                            <div className="title">
                                <Card.Title>Mission.</Card.Title>
                            </div>
                            <Card.Text>
                                “To rescue & provide free medical care, shelter and lifetime
                                care for those animals that cannot be rehabilitated.”
                            </Card.Text>
                            <div className="title">
                                <Card.Title>Quotes.</Card.Title>
                            </div>
                            <Card.Text>
                                1.Let Them Know Someone Cares.
                                <br />
                                2.Saving Animals And Saving Community.
                                <br />
                                3.No Matter How You Are Feeling,Little Dog Gonna Love You.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="img-cards">
                        <Card.Body>
                            <div className="title">
                                <Card.Title>How To Submit Rescue Request ???</Card.Title>
                            </div>
                            <Card.Text>
                                1.Login/Register
                                <br />
                                2.Click On Rescue Request
                                <br />
                                3.Submit
                                <br />
                                4.Thats it
                                <br />
                                5.You will get updates via email
                                <i
                                    className="fa fa-envelope"
                                    aria-hidden="true"
                                    style={{ color: "rgb(255, 211, 45)" }}
                                ></i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    );
}

export default Info;

// import React from "react";
// import { CardGroup, Card } from "react-bootstrap";
// import "./Info.css";
// import { MDBRow, MDBCol } from "mdb-react-ui-kit";

// function Info() {
//     return (
//         <>
//             <div className="gallery">
//                 <h1>People Behind Saath Foundation.</h1>
//             </div>
//             {/* image */}
//             <div className="images">
//                 <MDBRow>
//                     <MDBCol lg="4" md="12" className="mb-4 img-card">
//                         <img
//                             className="img-fluid rounded"
//                             alt="pic"
//                             src={require("./1.jpeg")}
//                         />
//                         <h1 className="img-caption">BEFORE</h1>
//                     </MDBCol>

//                     <MDBCol lg="4" md="12" className="mb-4 ">
//                         <img
//                             className="img-fluid rounded img-card"
//                             alt="pic"
//                             src={require("./2.jpeg")}
//                         />
//                         <h1 className="img-caption">WHEN WE TAKE OVER </h1>
//                     </MDBCol>

//                     <MDBCol lg="4" md="12" className="mb-4 ">
//                         <img
//                             className="img-fluid rounded img-card"
//                             alt="pic"
//                             src={require("./3.jpeg")}
//                         />
//                         <h1 className="img-caption">AFTER</h1>
//                     </MDBCol>
//                 </MDBRow>
//             </div>

//             {/*  End Images */}

//             {/* small Cards */}
//             <div className="info-container">
//                 <CardGroup>
//                     <Card>
//                         <Card.Body>
//                             <div className="title">
//                                 <Card.Title>What We Do.</Card.Title>
//                             </div>
//                             <Card.Text>
//                                 "Saath Animal Welfare Trust" is a shelter in our community. It
//                                 is a non-profiting organisation which is run by volunteers. They
//                                 rescue a variety of animals including dogs, cats & etc.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                     <Card>
//                         <Card.Body>
//                             <div className="title">
//                                 <Card.Title>Mission.</Card.Title>
//                             </div>
//                             <Card.Text>
//                                 “To rescue & provide free medical care, shelter and lifetime
//                                 care for those animals that cannot be rehabilitated.”
//                             </Card.Text>
//                             <div className="title">
//                                 <Card.Title>
//                                     Quotes.
//                                     <i
//                                         className="fa-cat-space"
//                                         aria-hidden="true"
//                                         style={{ color: "rgb(155, 34, 38)" }}
//                                     > </i>
//                                 </Card.Title>
//                             </div>
//                             <Card.Text>

//                                 <ul>
//                                     <li>Let Them Know Someone Cares.</li>
//                                     <li>Saving Animals And Saving Community.</li>
//                                     <li>
//                                         No Matter How You Are Feeling,Little Dog Gonna Love You.
//                                     </li>
//                                 </ul>


//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                     <Card>
//                         <Card.Body>
//                             <div className="title">
//                                 <Card.Title>How To Submit Rescue Request ???</Card.Title>
//                             </div>
//                             <Card.Text>
//                                 <ol>
//                                     <li>Register</li>
//                                     <li>Login</li>
//                                     <li>Click On Rescue Request</li>
//                                     <li>Submit</li>
//                                     <li>Thats it</li>
//                                     <li>
//                                         You will get updates via email{" "}
//                                         <i
//                                             className="fa fa-envelope"
//                                             aria-hidden="true"
//                                             style={{ color: "rgb(255, 211, 45)" }}
//                                         ></i>
//                                     </li>
//                                 </ol>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </CardGroup>
//             </div>
//         </>
//     );
// }

// export default Info;