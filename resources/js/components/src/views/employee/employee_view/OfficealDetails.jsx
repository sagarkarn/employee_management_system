import React from "react";

function OfficealDetails({ data }) {
    return (
        <>
            <h2 className="card-title">
                Official <span className="text-primary">Details</span>
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-2">
                <div>
                    <label>Employee Type</label>
                    <br />
                    <label className="text-gray-400">{data?.data_type}</label>
                </div>
                <div>
                    <label>Department</label>
                    <br />
                    <label className="text-gray-400">
                        {data?.job?.department}
                    </label>
                </div>
                <div>
                    <label>Designation</label>
                    <br />
                    <label className="text-gray-400">{data?.job?.name}</label>
                </div>
                <div>
                    <label>Employee Grade</label>
                    <br />
                    <label className="text-gray-400">{data?.grade}</label>
                </div>
                <div>
                    <label>Join Date</label>
                    <br />
                    <label className="text-gray-400">{data?.join_date}</label>
                </div>
                <div>
                    <label>PF Number</label>
                    <br />
                    <label className="text-gray-400">{data?.pf_number}</label>
                </div>

                <div>
                    <label>Shift</label>
                    <br />
                    <label className="text-gray-400">{data?.shift}</label>
                </div>
                <div>
                    <label>Working days</label>
                    <br />
                    <label className="text-gray-400">
                        {data?.working_days}
                    </label>
                </div>
            </div>
        </>
    );
}

export default OfficealDetails;
