import React from "react";

function BankInformation(props) {
    return (
        <>
            <h2 className="card-title">
                Bank <span className="text-primary">Information</span>
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-2">
                <div>
                    <label>Bank Name</label>
                    <br />
                    <label className="text-gray-400">St</label>
                </div>
                <div>
                    <label>Branch Name</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Account Name</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Account Number</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Pin code</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>IFSC</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>

                <div>
                    <label>UPI</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
            </div>
        </>
    );
}

export default BankInformation;
