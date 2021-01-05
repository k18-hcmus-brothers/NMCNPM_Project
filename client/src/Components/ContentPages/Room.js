import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import ListRoom from '../Room/ListRoom'

function Room() {
    const r = [
        [{
            NameRoom: "Phong1",
            kickthuoc: 25,
            gia:500000,
            noithat: [
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd"
            ],
            view: "akjsdkad"
        },
        {
            NameRoom: "Phong2",
            kickthuoc: 25,
            gia:500000,
            noithat: [
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd"
            ],
            view: "akjsdkad"
        },
        {
            NameRoom: "Phong3",
            kickthuoc: 25,
            gia:500000,
            noithat: [
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd"
            ],
            view: "akjsdkad"
        },
        {
            NameRoom: "Phong4",
            kickthuoc: 25,
            gia:500000,
            noithat: [
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd"
            ],
            view: "akjsdkad"
        }
        ],
        [{
            NameRoom: "Phong5",
            kickthuoc: 25,
            gia:800000,
            noithat: [
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd"
            ],
            view: "akjsdkad"
        },
        {
            NameRoom: "Phong6",
            kickthuoc: 25,
            gia:800000,
            noithat: [
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd"
            ],
            view: "akjsdkad"
        },
        {
            NameRoom: "Phong7",
            kickthuoc: 25,
            gia:800000,
            noithat: [
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd"
            ],
            view: "akjsdkad"
        },
        {
            NameRoom: "Phong8",
            kickthuoc: 25,
            gia:800000,
            noithat: [
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd",
                "sadhkajd"
            ],
            view: "akjsdkad"
        }
        ]
    ]
    return (
        <div>
            <Navigation title="Room" />
            <Container fluid>
                <ListRoom rooms={r} />
            </Container >
        </div>
    );
}

export default Room;