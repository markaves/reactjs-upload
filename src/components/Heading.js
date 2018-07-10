import React from 'react';
import '../css/Style.css';
import { Grid, Row, Col} from 'react-bootstrap'
import '../bootstrap/css/bootstrap.css'
import '../bootstrap/css/bootstrap-theme.css'




class Heading extends React.Component {
	render(){
	    return (
            <section id="about" className="about">
				<Grid>
                    <Row>
					    <Col lg={12} className="text-center">
                        <p>Certificate Uploader</p>

            			</Col>
					</Row>
		        </Grid>
			</section>
		);
	}
}

export default Heading;