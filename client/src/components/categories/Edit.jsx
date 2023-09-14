import React, {useState} from 'react';
import {Button, Form, Input, message, Modal, Table} from "antd";

const Edit = ({ isEditModalOpen, setIsEditModalOpen, categories, setCategories }) => {

    const [editingRow, setEditingRow] = useState({});

    const onFinish = (values) => {
        try {
            fetch(process.env.REACT_APP_SERVER_URL+"/api/categories/update-category", {
                method: "PUT",
                body: JSON.stringify({...values, categoryID: editingRow._id}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            message.success("Kategori Başarıyla Güncellendi!");
            setCategories(categories.map((item) => {
                if (item._id === editingRow._id) {
                    return { ...item, title: values.title };
                }
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
                fetch(process.env.REACT_APP_SERVER_URL+"/api/categories/delete-category", {
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
            title: "Başlık",
            dataIndex: "title",
            render: (_,record) => {
                if (record._id === editingRow._id) {
                    return(
                        <Form.Item className="mb-0" name="title">
                            <Input defaultValue={record.title} />
                        </Form.Item>
                    );
                } else {
                    return <p>{record.title}</p>
                }
            }
        },
        {
            title: "İşlemler",
            dataIndex: "action",
            render: (_, record) => {
                return(
                    <div className="flex justify-between">
                        <Button type="link" onClick={() => setEditingRow(record)} className="pl-0" >Düzenle</Button>
                        <Button type="link" htmlType="submit" className="text-green-400">Kaydet</Button>
                        <Button type="link" danger onClick={() => deleteCategory(record._id)}>Sil</Button>
                    </div>
                )
            }
        }
    ];

    return (
        <Modal open={isEditModalOpen} title="Kategori İşlemleri" footer={false} onCancel={() => setIsEditModalOpen(false)}>
            <Form onFinish={onFinish}>
                <Table bordered dataSource={categories} columns={columns} rowKey={"_id"} />
            </Form>
        </Modal>
    );
};

export default Edit;