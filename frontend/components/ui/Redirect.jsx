import Button from 'react-bootstrap/Button';

export default function Redirect() {
  return (
    <>
      <div className='w-100 mt-5'>
        <img src="/images/soon.svg" alt="Soon img with icon" style={{height: 250, width: "100%"}} className="mb-3" />
      </div>
      <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
        <h1 style={{fontSize: "8vh"}}>Coming Soon</h1>
        <h4>Now you can use the api</h4>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Button onClick={() => router.push("/")}>Go Home</Button>
        &nbsp;
        <Button className='btn-danger'>API Documentation</Button>
      </div>
    </>
  );
}