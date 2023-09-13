import Header from "../components/header/Header";
import {Table} from "antd";
import {useEffect, useState} from "react";

const CustomerPage = () => {

    const [billItems, setBillItems] = useState([]);

    useEffect(() => {
        const getBills = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/bills/get-all")
                const data = await res.json();
                setBillItems(data);
            } catch (error) {
                console.log(error)
            }
        };

        getBills();
    }, []);


    const columns = [
        {
            title: 'Müşteri Adı',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Telefon Numarası',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
        },
        {
            title: 'İşlem Tarihi',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => {
                return <span>{text.substring(0,10).split("-").reverse().join(".")}</span>
            }
        },
    ];


    return (
        <>
            <Header/>
            <div className="px-6">
                <h1 className="text-4xl font-bold text-center mb-4">Müsterilerim</h1>
                <Table dataSource={billItems} columns={columns} bordered pagination={false} scroll={{ x:1000, y:300 }} />
            </div>
        </>
    );
};

export default CustomerPage;