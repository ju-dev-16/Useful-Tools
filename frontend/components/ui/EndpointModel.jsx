import { useState, useEffect, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

export default function EndpointModel({ eventKey, method, path, description, params, body }) {
    const [inputVisibility, setInputVisibility] = useState(false);
    const [formData, setFormData] = useState({body : body ? body : ""});
  
    const inputRef = useRef();
  
    useEffect(() => {
      const setUpFormData = () => {
        params.forEach(e => {
          setFormData(prevFormData => ({
            ...prevFormData,
            [e[0]] : "" 
          }));
        });
      }
      if (params) {
        setUpFormData();
      }
    }, [params]);
  
    const methodLable = (
      <>
        {method === "GET" && <span style={{width: 125}} className='py-2 bg-primary rounded text-white text-center'>{method}</span>}
        {method === "POST" && <span style={{width: 125}} className='py-2 bg-success rounded text-white text-center'>{method}</span>}
        {method === "PUT" && <span className='py-2 rounded text-white text-center' style={{backgroundColor: "#fd7e14", width: 125}}>{method}</span>}
        {method === "DELETE" && <span style={{width: 125}} className='py-2 bg-danger rounded text-white text-center'>{method}</span>}
      </>
    );
  
    const renderParams = params ? params.map(e => (
      <tr key={e[0]}>
        <td>{e[0]}</td>
        <td>{e[1]}</td>
        <td>{e[2]}</td>
        <td>{e[3]}</td>
      </tr>
    )) : undefined;
  
    const noParams = (
      <>
        <br />
        <span className='fw-light'>No parameters</span>
      </>
    );
  
    const requestBody = (
      <>
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <span style={{borderBottom: "3px solid rgb(212, 212, 212)"}}><span>Body</span></span>
        </div>
        <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control 
          style={{resize: "none"}} 
          as="textarea" rows={3} 
          value={formData.body}
          readOnly={inputVisibility ? false : true} />
        </Form.Group>
      </>
    );
  
    const inputFields = (
      <>
        {params && 
        <Form>
          {params.map((e, i) => (
          <Form.Group
          className="mb-4"
          key={e[0]}
          >
            <Form.Label>{e[0]}</Form.Label>
            <Form.Control
            style={{}}
            required={e[2] === "true" ? true : false}
            type="text"
            placeholder={e[2] === "true" ? e[3] + " (required)" : e[3] + " (optional)"}
            value={formData[e]}
            name={e[0]}
            ref={inputRef}
            onChange={event => {
              const { name, value } = event.target;
              setFormData(prevFormData => ({
                ...prevFormData,
                [name] : value
              }));
            }}
            />
          </Form.Group>
          ))}
        </Form>
        }
        <div className='d-flex w-100'>
          <Button 
          className='w-50' 
          style={{borderBottomRightRadius: 0, borderTopRightRadius: 0}} onClick={() => {
            console.log(inputRef.current.value);
          }}>
            Execute
          </Button>
          <Button 
          variant='outline-danger' 
          className='w-50' 
          style={{borderBottomLeftRadius: 0, borderTopLeftRadius: 0}}
          onClick={() => {
            Object.keys(formData).forEach(key => {
              if (key === "body") {
                setFormData(prevFormData => ({
                  ...prevFormData,
                  body: body ? body : "" 
                }))
              } else {
                setFormData(prevFormData => ({
                  ...prevFormData,
                  [key] : ""
                }))
              }
            })
            inputRef.current.value = "";
            console.log(formData);
          }}>
            Clear
          </Button>
        </div>
      </>
    );
  
    return (
      <Accordion.Item
      eventKey={eventKey} 
      className='rounded mb-3' 
      style={{}}>
        <Accordion.Header>
          {methodLable}
          <span className='fw-bold mx-3'>{path}</span>
          <span className='fw-light'>{description}</span>
        </Accordion.Header>
        <Accordion.Body>
          <div className='d-flex justify-content-between align-items-center'>
            <span style={{borderBottom: "3px solid rgb(212, 212, 212)"}}><span>Parameters</span></span>
            <Button variant="outline-danger" className='fw-bold' onClick={() => setInputVisibility(!inputVisibility)}>Try it out</Button>
          </div>
          <div className='my-3'>
            <div className='d-flex justify-content-between flex-column'>
              <Table responsive="sm" style={{}}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Required</th>
                    <th>Type</th>
                  </tr>
                </thead>
                {params && <tbody>{renderParams}</tbody>}
              </Table>
              {!params && noParams}
            </div>
            {body && requestBody}
            {inputVisibility && inputFields}
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <span style={{borderBottom: "3px solid rgb(212, 212, 212)"}}><span>Responses</span></span>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    );
}