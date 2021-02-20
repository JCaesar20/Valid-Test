import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import Loading from './Loading'
import ModalComponent from './ModalComponent'
import axios from '../utils/axios'
function FormComponent() {

    const [validated, setValidated] = useState(false);
    const [anrede, setAnrede] = useState('');
    const [vorName, setVorName] = useState('');
    const [nachName, setNachName] = useState('');
    const [email, setEmail] = useState('');
    const [anfrage, setAnfrage] = useState('');
    const [beschreibungsText, setBeschreibungsText] = useState('');
    const [daten, setDaten] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [msg, setMsg] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        setLoading(true)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setLoading(false)
            setModalShow(true)
            setMsg('Bitte füllen Sie alle erforderlichen Felder und Validierungen aus!')
            setStatus('Error')
            return setValidated(true);
        }


        const data = {
            anrede,
            vorName,
            nachName,
            email,
            anfrage,
            beschreibungsText
        }

        const response = await axios.post('form', data)
        setLoading(false);
        if (response.data.newForm) {
            setAnrede('');
            setVorName('');
            setNachName('');
            setEmail('');
            setAnfrage('');
            setBeschreibungsText('');
            setDaten(false);
            setModalShow(true)
            setMsg('Daten wurden erfolgreich gespeichert. Bitte überprüfen Sie Ihre E-Mails!')
            setStatus('Success')
        }else {
            setModalShow(true)
            setMsg(response.data.error)
            setStatus('Error')
        }

    };


    return (
        <>
            {loading && <Loading loading={loading} />}
            <ModalComponent
                show={modalShow}
                backdrop="static"
                onHide={() => setModalShow(false)}
                status={status}
                msg={msg}
            />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="exampleForm.SelectCustom">
                    <Form.Label>Anrede (*)</Form.Label>
                    <Form.Control as="select" required custom value={anrede} onChange={(e) => setAnrede(e.target.value)}>
                        <option value=""></option>
                        <option value="Herr">Herr</option>
                        <option value="Frau">Frau</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Vor Name (*)</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Vor Name"
                        onChange={(e) => setVorName(e.target.value)}
                        value={vorName}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Nach Name (*)</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nach Name"
                        onChange={(e) => setNachName(e.target.value)}
                        value={nachName}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom03">
                    <Form.Label>Email (*)</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        Please write a valid Email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.SelectCustom">
                    <Form.Label>Anfrage  (*)</Form.Label>
                    <Form.Control as="select" required custom value={anfrage} onChange={(e) => setAnfrage(e.target.value)}>
                        <option value=""></option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </Form.Control>
                </Form.Group>
                {anfrage === 'Option 2' && <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Beschreibungs Text</Form.Label>
                    <Form.Control as="textarea" rows={3} value={beschreibungsText} onChange={(e) => setBeschreibungsText(e.target.value)} />
                </Form.Group>}
                <Form.Group>
                    <Form.Check
                        required
                        label="Datenschutz Zustimmung"
                        checked={daten}
                        onChange={() => setDaten(!daten)}
                    />
                </Form.Group>
                <Button variant="secondary" type="submit">Senden</Button>
            </Form>
        </>
    );
}

export default FormComponent