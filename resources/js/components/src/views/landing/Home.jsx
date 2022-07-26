import React from "react";
import Container from "../layout/Container";
import { TiGroup } from "react-icons/ti";
import { BsCreditCard } from "react-icons/bs";

function Home() {
    const CardDashboard = ({ title, count, Icon }) => {
        return (
            <div className="card bg-base-100 border shadow-xl ease-in-out hover:scale-105 transition-all duration-200 cursor-pointer">
                <div className="card-body p-6">
                    <div className="flex flex-col justify-between h-full">
                        <h2 className="uppercase">{title}</h2>
                        <div className="flex justify-between mt-2">
                            <h3 className="text-lg">{count}</h3>
                            {Icon}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Container>
            <div className="container p-4">
                <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
                    <CardDashboard
                        title={"Active Employee"}
                        count={43}
                        Icon={<TiGroup className="text-2xl" />}
                    />
                    <CardDashboard
                        title={"Present Employee"}
                        count={4}
                        Icon={<TiGroup className="text-2xl" />}
                    />
                    <CardDashboard
                        title={"Absent Employee"}
                        count={4}
                        Icon={<TiGroup className="text-2xl" />}
                    />
                    <CardDashboard
                        title={"Employee on leave"}
                        count={4}
                        Icon={<TiGroup className="text-2xl" />}
                    />
                    <CardDashboard
                        title={"Today Interview"}
                        count={4}
                        Icon={<BsCreditCard className="text-2xl" />}
                    />
                    <CardDashboard
                        title={"Birthday Update"}
                        count={4}
                        Icon={<BsCreditCard className="text-2xl" />}
                    />
                    <CardDashboard
                        title={"Current Month Increment"}
                        count={4}
                        Icon={<BsCreditCard className="text-2xl" />}
                    />
                </div>
            </div>
        </Container>
    );
}

export default Home;
