import { useEffect, useRef } from "react";

const OfficealDetail = ({ data, onNext, onPrev }) => {
    const employee_type = useRef();
    const department = useRef();
    const designation = useRef();
    const grade = useRef();
    const join_date = useRef();
    const pf_number = useRef();
    const shift = useRef();
    const workingDays = useRef();

    useEffect(() => {
        employee_type.current.value = data.employee_type
            ? data.employee_type
            : "";
        department.current.value = data.department ? data.department : "";
        designation.current.value = data.designation ? data.designation : "";
        grade.current.value = data.grade ? data.grade : "";
        if (data.join_date) {
            join_date.current.value = data.join_date;
        }
        pf_number.current.value = data.pf_number ? data.pf_number : "";
        if (data.shift) {
            shift.current.value = data.shift;
        }
    }, []);

    const next = () => {
        const od = {
            employee_type: employee_type.current.value,
            department: department.current.value,
            designation: designation.current.value,
            grade: grade.current.value,
            join_date: join_date.current.value,
            pf_number: pf_number.current.value,
            shift: shift.current.value,
        };
        onNext(od);
    };

    return (
        <>
            <div className="card-title">
                Official <span className="text-primary">Details</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="form-group">
                    <label htmlFor="employee_type">
                        <span>Employee type</span>
                        <select
                            className="select w-full max-w-xs"
                            ref={employee_type}
                        >
                            <option disabled selected>
                                Select Employee Type
                            </option>
                            <option>Permanent</option>
                            <option>Temprory</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Department</span>
                        <input
                            ref={department}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Designation</span>
                        <input
                            ref={designation}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Employee Grade</span>
                        <input
                            ref={grade}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Join Date</span>
                        <input
                            ref={join_date}
                            type={"date"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>PF Number</span>
                        <input
                            ref={pf_number}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Shift</span>
                        <select className="select w-full max-w-xs" ref={shift}>
                            <option disabled selected>
                                select shift
                            </option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Working Days</span>
                        <br />
                        <span className="chip">Monday</span>
                    </label>
                </div>
            </div>

            <div className="card-actions justify-end">
                <label
                    className="btn"
                    onClick={() => {
                        if (onPrev) {
                            onPrev();
                        }
                    }}
                >
                    Previous
                </label>
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

export default OfficealDetail;
