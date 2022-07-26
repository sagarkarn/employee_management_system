import React from "react";

function EmployeeDocument() {
    return (
        <>
            <h2 className="card-title">
                Employee <span className="text-primary">Document</span>
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-2">
                <div>
                    <label>Resume</label>
                    <br />
                    <label className="text-gray-400">St</label>
                </div>
                <div>
                    <label>Offer Letter</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Joining Letter</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Contract Paper</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>ID Proof</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
                <div>
                    <label>Other Document</label>
                    <br />
                    <label className="text-gray-400">Sagar Karn</label>
                </div>
            </div>
        </>
    );
}

export default EmployeeDocument;
