import { useEffect, useRef } from "react";

const ContactDetails = ({ data, onNext, onPrev }) => {
    const country = useRef();
    const state = useRef();
    const city = useRef();
    const address = useRef();
    const pin_code = useRef();
    const mobile = useRef();
    const phone = useRef();
    const email = useRef();

    useEffect(() => {
        country.current.value = data.country ? data.country : "";
        state.current.value = data.state ? data.state : "";
        city.current.value = data.city ? data.city : "";
        address.current.value = data.address ? data.address : "";
        pin_code.current.value = data.pin_code ? data.pin_code : "";
        mobile.current.value = data.mobile ? data.mobile : "";
        phone.current.value = data.phone ? data.phone : "";
        email.current.value = data.email ? data.email : "";
    }, []);

    const next = () => {
        const cd = {
            country: country.current.value,
            state: state.current.value,
            city: city.current.value,
            address: address.current.value,
            pin_code: pin_code.current.value,
            mobile: mobile.current.value,
            phone: phone.current.value,
            email: email.current.value,
        };
        onNext(cd);
    };

    return (
        <>
            <div className="card-title">
                Contact <span className="text-primary">Details</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="form-group">
                    <label htmlFor="employee_type">
                        <span>Country</span>
                        <input
                            ref={country}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>State</span>
                        <input
                            ref={state}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>City</span>
                        <input
                            ref={city}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Address</span>
                        <input
                            ref={address}
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
                            type={"number"}
                            maxLength={6}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Mobile</span>
                        <input
                            ref={mobile}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Phone</span>
                        <input
                            ref={phone}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">
                        <span>Email</span>
                        <input
                            ref={email}
                            type={"text"}
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>

            <div className="card-actions justify-end">
                <label
                    className="btn"
                    onClick={() => {
                        onPrev();
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

export default ContactDetails;
