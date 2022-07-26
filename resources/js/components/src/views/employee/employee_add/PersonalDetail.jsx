import { useEffect, useRef } from "react";

const PersonalDetail = ({ data, onNext}) => {
    const first_name = useRef();
    const middle_name = useRef();
    const last_name = useRef();
    const father_name = useRef();
    const dob = useRef();
    const gender = useRef();
    const material_status = useRef();
    const photo = useRef();

    useEffect(() => {
        first_name.current.value = data.first_name ? data.first_name : null;
        middle_name.current.value = data.middle_name ? data.middle_name : null;
        last_name.current.value = data.last_name ? data.last_name : null;
        father_name.current.value = data.father_name ? data.father_name : null;

        if (data.dob) {
            dob.current.value = data.dob;
        }
        gender.current.value = data.gender ? data.gender : null;
        material_status.current.value = data?.material_status
            ? data.material_status
            : null;
        photo.current.value = data.photo ? data.photo : null;
    }, []);

    const next = () => {
        let pd = {
            first_name: first_name.current.value,
            middle_name: middle_name.current.value,
            last_name: last_name.current.value,
            father_name: father_name.current.value,
            dob: dob.current.value,
            gender: gender.current.value,
            material_status: material_status.current.value,
            photo: photo.current.value,
        };
        onNext(pd);
    };

    return (
        <>
            <div className="card-title">
                Personal <span className="text-primary">Details</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>First Name</span>
                        <input
                            ref={first_name}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Middle Name</span>
                        <input
                            ref={middle_name}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Last Name</span>
                        <input
                            ref={last_name}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Father's Name</span>
                        <input
                            ref={father_name}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>DOB</span>
                        <input
                            ref={dob}
                            type={"date"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Gender</span>
                        <select
                            defaultValue={null}
                            ref={gender}
                            className="select w-full max-w-xs"
                        >
                            <option disabled selected>
                                Select Gender
                            </option>
                            <option value={"M"}>Male</option>
                            <option value={"F"}>Female</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Material Status</span>
                        <select
                            className="select w-full max-w-xs"
                            defaultValue={null}
                            ref={material_status}
                        >
                            <option disabled selected>
                                select material status
                            </option>
                            <option>Married</option>
                            <option>UnMarried</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Upload photo</span>
                        <input type={"file"} ref={photo} />
                    </label>
                </div>
            </div>
            <div className="card-actions justify-end">
                <label
                    className="btn"
                    onClick={() => {
                        next();
                    }}
                >
                    Next
                </label>
            </div>
        </>
    );
};

export default PersonalDetail;
