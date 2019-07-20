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
                <br></br>
                <p className="fas fa-sun" style={{ fontWeight: "bold" }}>   SUNLIGHT: {sunlight}</p><br></br>
                <p className="fas fa-tint" style={{ fontWeight: "bold" }} >   WATER: {water}</p><br></br>
                <p className="fas fa-seedling" style={{ fontWeight: "bold" }}>   FERTILIZER: {fertilizer}</p><br></br>
                <p className="fas fa-cookie-bite" style={{ fontWeight: "bold" }}>   CARE SUMMARY: {careSummary}</p><br></br>

                <div style={{ marginRight: 20 }} onClick={() => savePlant()} className="btn btn-primary"><i class="far fa-bookmark"></i>  Save </div>
                <div onClick={() => cancelModal()} className="btn btn-danger"><i class="far fa-window-close"></i>  Cancel</div>


            </div>



        </div>
    );
}

export default Modal;
