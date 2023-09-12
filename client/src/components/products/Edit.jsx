import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Modal, Table} from "antd";

const Edit = ({isEditModalOpen, setIsEditModalOpen, categories, setCategories}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/products/get-all");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, []);

    const onFinish = (values) => {
        try {
            fetch("http://localhost:8000/api/categories/update-category", {
                method: "PUT",
                body: JSON.stringify({...values}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            message.success("Kategori Başarıyla Güncellendi!");
            setCategories(categories.map((item) => {
                return item;
            }))
        } catch (error) {
            message.error("Bir Şeyler Yanlış Gitti...");
            console.log(error)
        }
    }

    const deleteCategory = (id) => {
        if (window.confirm("Silmek İstediğinize Emin Misiniz?")) {
            try {
                fetch("http://localhost:8000/api/categories/delete-category", {
                    method: "DELETE",
                    body: JSON.stringify({categoryID: id}),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                });
                message.success("Kategori Başarıyla Silindi!");
                setCategories(categories.filter((item) => item._id !== id))
            } catch (error) {
                message.error("Bir Şeyler Yanlış Gitti...");
                console.log(error)
            }
        }
    }

    const columns = [
        {
            title: "Ürün Adı",
            dataIndex: "title",
            width: "8%",
            render: (_, record) => {
                return <p>{record.title}</p>
            }
        },
        {
            title: "Ürün Görseli",
            dataIndex: "img",
            width: "4%",
            render: (_, record) => {
                return <img src={record.img} alt="" className="w-full h-20 object-cover"/>
            }
        },
        {
            title: "Ürün Fiyatı",
            dataIndex: "price",
            width: "8%"
        },
        {
            title: "Ürün Kategorisi",
            dataIndex: "category",
            width: "8%",
        },
        {
            title: "İşlemler",
            dataIndex: "action",
            width: "8%",
            render: (_, record) => {
                return (
                    <div className="flex justify-between">
                        <Button type="link" className="pl-0">Düzenle</Button>
                        <Button type="link" htmlType="submit" className="text-green-400">Kaydet</Button>
                        <Button type="link" danger onClick={() => deleteCategory(record._id)}>Sil</Button>
                    </div>
                )
            }
        }
    ];

    return (

        <Form onFinish={onFinish}>
            <Table
                bordered
                dataSource={products}
                columns={columns}
                rowKey={"_id"}
                scroll={{
                    x: 1000,
                    y: 600
                }}
            />
        </Form>
    );
};

export default Edit;