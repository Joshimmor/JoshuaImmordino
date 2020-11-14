import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./EmailForm.css"

export default function Form() {
    return (
        <>
            <Card className="contact-form">
                 <form  noValidate autoComplete="off">
                        <TextField  className="email-form-intake" id="outlined-basic" label="First Name:" variant="outlined" />
                        <TextField  className="email-form-intake" id="outlined-basic" label="Last Name:" variant="outlined" />
                        <TextField className="email-form-intake" id="outlined-basic" label="Email:" variant="outlined" />
                        <TextField
                        className="email-form-intake"
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={3}
                        variant="outlined"
                        />
                        <div className="submit-button" >
                            <Button className="" variant="contained">Submit</Button>
                        </div>
                </form>
            </Card>
        </>
    )
}
