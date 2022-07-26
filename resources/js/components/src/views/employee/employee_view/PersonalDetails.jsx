import React from "react";

function PersonalDetails({ data }) {
    return (
        <>
            <h2 className="card-title">
                Personal <span className="text-primary">Details</span>
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-2">
                <div>
                    <label>First Name</label>
                    <br />
                    <label className="text-gray-400">{data?.first_name}</label>
                </div>
                <div>
                    <label>Middle Name</label>
                    <br />
                    <label className="text-gray-400">{data?.middle_name}</label>
                </div>
                <div>
                    <label>Last Name</label>
                    <br />
                    <label className="text-gray-400">{data?.last_name}</label>
                </div>
                <div>
                    <label>Father's Name</label>
                    <br />
                    <label className="text-gray-400">{data?.father_name}</label>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <br />
                    <label className="text-gray-400">{data?.dob}</label>
                </div>
                <div>
                    <label>Gender</label>
                    <br />
                    <label className="text-gray-400">{data?.gender}</label>
                </div>

                <div>
                    <label>Material Status</label>
                    <br />
                    <label className="text-gray-400">
                        {data?.material_status}
                    </label>
                </div>
                <div>
                    <label>Photo</label>
                    <br />
                    <label className="text-gray-400">
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
}

export default PersonalDetails;
