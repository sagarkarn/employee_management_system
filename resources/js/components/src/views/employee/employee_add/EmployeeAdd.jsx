import { add, join, keys } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import EmployeeRepo from "../../../repo/EmployeeRepo";
import Container from "../../layout/Container";
import BankInformation from "./BankInfo";
import ContactDetails from "./ContactDetail";
import OfficealDetail from "./OfficialDetails";
import PersonalDetail from "./PersonalDetail";
function EmployeeAdd() {
    const [current, setCurrent] = useState(0);
    const [personalData, setPersonalData] = useState({});
    const [officialData, setOfficialData] = useState({});
    const [contactData, setContactData] = useState({});
    const [bankData, setBankData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const options = {
        position: "top-right",
        style: {
            backgroundColor: "midnightblue",
            textAlign: "center",
        },
        closeStyle: {
            fontSize: "16px",
        },
    };

    const [openSnackbar, closeSnackbar] = useSnackbar(options);

    const ErrorView = () => {
        keys = Object.keys(errors);
        if (keys.length > 0)
            return keys.map((value) => {
                return <div>{errors[value]}</div>;
            });
        else {
            return <></>;
        }
    };

    return (
        <Container>
            <div className="flex justify-center m-4">
                <div className="card bg-base-200 h-min w-full">
                    <div className="card-body">
                        <ErrorView />

                        {current == 0 && (
                            <PersonalDetail
                                data={personalData}
                                onNext={(pd) => {
                                    setPersonalData(pd);
                                    setCurrent(1);
                                    openSnackbar("snackbar");
                                }}
                            />
                        )}
                        {current == 1 && (
                            <OfficealDetail
                                data={officialData}
                                onPrev={() => {
                                    setCurrent(0);
                                }}
                                onNext={(od) => {
                                    setOfficialData(od);
                                    setCurrent(2);
                                }}
                            />
                        )}
                        {current == 2 && (
                            <ContactDetails
                                data={contactData}
                                onPrev={() => {
                                    setCurrent(1);
                                }}
                                onNext={(cd) => {
                                    setCurrent(3);
                                    setContactData(cd);
                                }}
                            />
                        )}
                        {current == 3 && (
                            <BankInformation
                                loading={isLoading}
                                data={bankData}
                                onPrev={() => {
                                    setCurrent(2);
                                }}
                                onSubmit={(bankInfo) => {
                                    setBankData(bankInfo);
                                    let repo = new EmployeeRepo();
                                    setIsLoading(true);
                                    console.log({
                                        personalData: personalData,
                                        officialData: officialData,
                                        contactData: contactData,
                                        bankData: bankData,
                                    });
                                    repo.store({
                                        personalData: personalData,
                                        officialData: officialData,
                                        contactData: contactData,
                                        bankData: bankData,
                                    }).then((res) => {
                                        console.log(res);
                                        setIsLoading(false);
                                        if (res.status == "success") {
                                            openSnackbar(res.message);
                                        }
                                        if (res.errors) {
                                            setErrors(res.errors);
                                        }
                                    });
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default EmployeeAdd;
