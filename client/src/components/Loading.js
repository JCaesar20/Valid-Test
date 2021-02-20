import React, {useState, useEffect} from 'react'
import {Modal, Spinner} from 'react-bootstrap'
import { createUseStyles } from 'react-jss'


function Loading({loading}) {
    const classes = useStyles();
    const [loadingState, setLoadingState] = useState(false)

    useEffect(() => {
        setLoadingState(loading)
      },[loading]);
    
    return (
        <Modal show={loadingState} centered contentClassName={classes.overRide}>
            <Spinner animation="border" className={classes.spinner} variant="" />
            <b>Warten Sie mal</b>
        </Modal>
    )
}

const useStyles = createUseStyles({
    overRide: {
        border: 'none',
        textAlign: 'center',
        color: '#343A40',
        width: '150px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px'
    },
    spinner: {
        color: '#343A40',
        height: '4rem',
        width: '4rem',
        margin: '0 auto',
        marginBottom: '0.5rem',
    }
})

export default Loading