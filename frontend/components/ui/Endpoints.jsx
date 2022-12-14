import Accordion from 'react-bootstrap/Accordion';

import EndpointModel from './EndpointModel';

export default function Endpoints({ name }) {
  return (
    <div className="my-5">
      <h2 style={{fontWeight: "normal"}} className="mb-3">{name}</h2>
      <Accordion defaultActiveKey="0">
        <EndpointModel
        eventKey="0" 
        method="GET" 
        path="/api/v1/tools" 
        description="Read all Tools" 
        params={[["id", "Read a tool", "false", "integer"]]} />
        <EndpointModel 
        eventKey="1" 
        method="POST" 
        path="/api/v1/tools"
        description="Add a Tool" 
        body='{
            "link": "A link to a useful tool"
        }' />
        <EndpointModel
        eventKey="2" 
        method="PUT" 
        path="/api/v1/tools" 
        description="Update a Tool"
        params={[["id", "Update a tool", "true", "integer"]]}
        body='{
            "link": "A link to a useful tool"
        }' />
        <EndpointModel
        eventKey="3"
        method="DELETE" 
        path="/api/v1/tools" 
        description="Delete a Tool"
        params={[["id", "Delete a tool", "true", "integer"]]} />
      </Accordion>
    </div>
  );
}