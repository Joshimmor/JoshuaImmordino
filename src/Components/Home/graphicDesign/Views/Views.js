import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import "./Views.css"

export default function Views({views}) {  
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    console.log(views)
     return (
            <div>
              <Button type="button" onClick={handleOpen}>
                Views
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div className="views-container">
                <img className="views-img" src={views} alt="work"/>
                </div>
              </Modal>
            </div>
   );
}
