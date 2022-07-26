import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../../hooks/useToken";
import EmployeeRepo from "../../../repo/EmployeeRepo";
import ResponseStatus from "../../../utils/ResponseStatus";
import Container from "../../layout/Container";
import BankInformation from "./BankInformation";
import ContactDetails from "./ContactDetails";
import EmployeeDocument from "./EmployeeDocument";
import OfficealDetails from "./OfficealDetails";
import PersonalDetails from "./PersonalDetails";

function EmployeeView() {
    let { id } = useParams();
    const [employee, setEmployee] = useState({});
    const [token, setToken] = useToken();

    useEffect(() => {
        let repo = new EmployeeRepo(token);
        repo.getById(id).then((res) => {
            alert("hello");
            if (res.status == ResponseStatus.OK) {
                setEmployee(res.result);
                console.log(res.result);
            }
        });
    }, []);

    return (
        <Container>
            <div className="p-4">
                <div className="card w-full bg-base-200 shadow-xl">
                    <div className="card-body">
                        <PersonalDetails data={employee} />
                        <div className="divider" />
                        <OfficealDetails data={employee.employee} />
                        <div className="divider" />
                        <ContactDetails data={employee.contact} />
                        <div className="divider" />
                        <BankInformation data={employee.bankInfo} />
                        <div className="divider" />
                        <EmployeeDocument />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default EmployeeView;
