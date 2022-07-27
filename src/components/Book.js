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
                    <label>First Name:  </label>
                    <input type="text" name="First name" required/>
                    <label>Surname:  </label>
                    <input type="text" name="Surname" required/>
                </div>
                <div className="form-input">
                    <label>Pick up location:  </label>
                    <select className="pul" required>
                        <option>Kencom</option>
                        <option>ABC</option>
                        <option>Thika</option>
                    </select>
                </div>
                <div className="form-input">
                    <label>Phone Number:  </label>
                    <input type="tel" name="WhatsApp Number" required/>
                </div>
                <div className="form-input">
                    <label>Number of Slots:  </label>
                    <input type="number" name="Number of Slots" min="1" required/>
                </div>
                <div className="form-input">
                    <button className="btn" type="submit" name="Book slots">Book Slot</button>
                </div>
            </form>

        </div>
    );
}