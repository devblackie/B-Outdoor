import React from 'react';

export default function Book() {
    return (
        <div className="Book">
		
		    <div className="image">
			   <img src=""/>
		    </div>
            <form>
                <div className="form-input">
                    <h3>Mt longonot</h3>
                </div>
                <div className="form-input">
                    <label>First Name:</label>
                    <input type="text" name="First name" required/>
                    <label>Surname:</label>
                    <input type="text" name="Surname" required/>
                </div>
                <div className="form-input">
                    <label>Pick up location</label>
                </div>
            </form>

        </div>
    );
}