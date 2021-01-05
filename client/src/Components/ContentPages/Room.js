import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import ListRoom from '../Room/ListRoom'


function Room() {
    const r = [
        [{
            NameRoom: "Phòng 1",
            Loai:"Đơn",
            kickthuoc: 10,
            gia:300000,
            noithat: [
                "Nệm",
                "Máy lạnh",
                "TV",
                "Bồn tắm",
                "Ghế Sofa"
            ],
            view: "Không gian thoáng mát phù, khung cảnh hướng ra biển."
        },
        {
            NameRoom: "Phòng 2",
            Loai:"Đơn",
            kickthuoc: 10,
            gia:300000,
            noithat: [
                "Nệm",
                "Máy lạnh",
                "TV",
                "Bồn tắm",
                "Ghế Sofa"
            ],
            view: "Không gian thoáng mát phù, khung cảnh hướng ra biển."
        },
        {
            NameRoom: "Phòng 3",
            Loai:"Đơn",
            kickthuoc: 10,
            gia:300000,
            noithat: [
                "Nệm",
                "Máy lạnh",
                "TV",
                "Bồn tắm",
                "Ghế Sofa"
            ],
            view: "Không gian thoáng mát phù, khung cảnh hướng ra biển."
        },
        {
            NameRoom: "Phòng 4",
            Loai:"Đơn",
            kickthuoc: 10,
            gia:300000,
            noithat: [
                "Nệm",
                "Máy lạnh",
                "TV",
                "Bồn tắm",
                "Ghế Sofa"
            ],
            view: "Không gian thoáng mát phù, khung cảnh hướng ra biển."
        }
        ],
        [{
            NameRoom: "Phòng 5",
            Loai:"Đôi",
            kickthuoc: 25,
            gia:800000,
            noithat: [
                "Nệm",
                "Máy lạnh",
                "TV",
                "Bồn tắm",
                "Ghế Sofa",
                "Máy pha cafe",
                "Ban công"
            ],
            view: "Không gian thoáng mát thoải mái, khung cảnh hướng ra biển, thích hợp cho các cặp đôi"
        },
        {
            NameRoom: "Phòng 6",
            Loai:"Đôi",
            kickthuoc: 25,
            gia:800000,
            noithat: [
                "Nệm",
                "Máy lạnh",
                "TV",
                "Bồn tắm",
                "Ghế Sofa",
                "Máy pha cafe",
                "Ban công"
            ],
            view: "Không gian thoáng mát thoải mái, khung cảnh hướng ra biển, thích hợp cho các cặp đôi"
        },
        {
            NameRoom: "Phòng 7",
            Loai:"Đôi",
            kickthuoc: 25,
            gia:800000,
            noithat: [
                "Nệm",
                "Máy lạnh",
                "TV",
                "Bồn tắm",
                "Ghế Sofa",
                "Máy pha cafe",
                "Ban công"
            ],
            view: "Không gian thoáng mát thoải mái, khung cảnh hướng ra biển, thích hợp cho các cặp đôi"
        },
        {
            NameRoom: "Phòng 8",
            Loai:"Đôi",
            kickthuoc: 25,
            gia:800000,
            noithat: [
                "Nệm",
                "Máy lạnh",
                "TV",
                "Bồn tắm",
                "Ghế Sofa",
                "Máy pha cafe",
                "Ban công"
            ],
            view: "Không gian thoáng mát thoải mái, khung cảnh hướng ra biển, thích hợp cho các cặp đôi"
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