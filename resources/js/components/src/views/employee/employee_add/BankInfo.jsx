import { useEffect, useRef } from "react";

const BankInformation = ({ data, onSubmit, onPrev, loading }) => {
    const bank_name = useRef();
    const branch_name = useRef();
    const account_name = useRef();
    const account_number = useRef();
    const pin_code = useRef();
    const ifsc = useRef();
    const upi = useRef();

    useEffect(() => {
        bank_name.current.value = data.bank_name ? data.bank_name : "";
        branch_name.current.value = data.branch_name ? data.branch_name : "";
        account_name.current.value = data.account_name ? data.account_name : "";
        account_number.current.value = data.account_number
            ? data.account_number
            : "";
        pin_code.current.value = data.pin_code ? data.pin_code : "";
        ifsc.current.value = data.ifsc ? data.ifsc : "";
        upi.current.value = data.upi ? data.upi : "";
    }, []);

    const submit = () => {
        let bankInfo = {
            bank_name: bank_name.current.value,
            branch_name: branch_name.current.value,
            account_name: account_name.current.value,
            account_number: account_number.current.value,
            pin_code: pin_code.current.value,
            ifsc: ifsc.current.value,
            upi: upi.current.value,
        };
        onSubmit(bankInfo);
    };

    return (
        <>
            <div className="card-title">
                Bank <span className="text-primary">Information</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="form-group">
                    <label htmlFor="employee_type">
                        <span>Bank Name</span>
                        <input
                            ref={bank_name}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Branch Name</span>
                        <input
                            ref={branch_name}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Account Name</span>
                        <input
                            ref={account_name}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Account Number</span>
                        <input
                            ref={account_number}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Pin Code</span>
                        <input
                            ref={pin_code}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>IFSC</span>
                        <input
                            ref={ifsc}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>UPI</span>
                        <input
                            ref={upi}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>

            <div className="card-actions justify-end">
                <label
                    className={`btn ${loading ? "btn-disabled" : ""}`}
                    onClick={() => {
                        onPrev();
                    }}
                >
                    Previous
                </label>
                <label
                    className={`btn ${loading ? "loading" : ""}`}
                    onClick={() => submit()}
                >
                    Submit
                </label>
            </div>
        </>
    );
};

export default BankInformation;
