import React from 'react';
import {Form, Col, Button} from 'react-bootstrap'

const ActiveCampaignForm = (): JSX.Element => {

    return (
        <Form style={{textAlign:"center"}} inline method="POST" action="https://mounirlazzouni.activehosted.com/proc.php" id="_form_1_">
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            
                <Col xs={4}>
                    <Form.Label >
                        <Form.Control 
                                    type="text" 
                                    className="newsletterFormbox"
                                    name="fullname" 
                                    placeholder="NAME" 
                                    required/>
                    </Form.Label>
                </Col>

                <Col xs={4}>
                    <Form.Label >
                        <Form.Control 
                                    className="newsletterFormbox"
                                    type="text"  
                                    name="email" 
                                    placeholder="EMAIL" 
                                    required/>
                    </Form.Label>
                </Col>

                <Col xs={4}>
                    <Button type='submit' className="mb-2 submitButton blackBackground">
                        SUBMIT
                    </Button>
                </Col>


        </Form>

    )
  }

export default ActiveCampaignForm