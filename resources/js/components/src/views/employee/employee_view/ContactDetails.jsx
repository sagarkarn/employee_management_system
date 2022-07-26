import React from "react";

function ContactDetails() {
    return (
        <>
            <h2 className="card-title">
                Contacts <span className="text-primary">Details</span>
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-2">
                <div>
                    <label>Country</label>
                    <br />
                    <label className="text-gray-400">St</label>
                </div>
                <div>
                    <label>State</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>City</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Address</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Pin code</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Mobile</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>

                <div>
                    <label>Phone</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
            </div>
        </>
    );
}

export default ContactDetails;
