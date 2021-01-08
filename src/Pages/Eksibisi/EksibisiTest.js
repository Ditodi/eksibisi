import React, {useState} from "react";
import "./Eksibisi.scss";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const EksibisiABC = ({data}) => {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  	return (
        <div className='mainCompetition-container'>
            <Card>
                <Card.Img variant="top" src={data.file_poster}  />
                <Card.Body>
                    <Card.Title>{data.judul}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{data.nama}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{data.sklh}</Card.Subtitle>

                    {/* <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button> */}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>{data.uraian}</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Tutup
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
                <Card.Footer>
                <Card.Link href="#" onClick={handleShow}>Baca Deskripsi</Card.Link>
                </Card.Footer>
            </Card>
        </div>
	);
};
