import React from "react";
import "./style.css";

function Modal({ name, picture, sunlight, water, fertilizer, careSummary, savePlant, cancelModal }) {
    return (
        <div className="modal-dialogAA modal-dialog-centeredAA" style={{
            //height: "300px",
            //width: "500px",
            backgroundColor: "white",
            position: "absolute",
            top: "10%",
            right: "10%",
            left: "10%",
            zIndex: 9000,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            display: "flex",
            padding: 20,
            border: "1px solid grey"
        }}>

            <div className="modal-bodyssssss">
                <h3>
                    <strong>
                        {name}
                    </strong>
                </h3>
                <img className="img-fluid" height="150px" width="150px"
                    src={picture}
                    alt={name} />
                <p>Sunlight: {sunlight}</p>
                <p>Water: {water}</p>
                <p>Fertilizer: {fertilizer}</p>
                <p>Care Summary: {careSummary}</p>

                <div style={{ marginRight: 20 }} onClick={() => savePlant()} className="btn btn-primary">Save</div>
                <div onClick={() => cancelModal()} className="btn btn-danger">Cancel</div>


            </div>



        </div>
    );
}

export default Modal;
