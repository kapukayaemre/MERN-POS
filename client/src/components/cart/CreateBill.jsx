import React from 'react';
import {Button, Card, Form, Input, Modal, Select} from "antd";

const CreateBill = ({isModalOpen, setIsModalOpen}) => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Modal
            title="Fatura Oluştur"
            open={isModalOpen}
            footer={false}
            onCancel={() => setIsModalOpen(false)}
        >
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Müşteri Adı" name={"customerName"} rules={[{required: true, message:"Müşteri Adı Alanı Boş Geçilemez!"}]}>
                    <Input placeholder="Bir Müşteri Adı Giriniz..."/>
                </Form.Item>

                <Form.Item label="Telefon No" name={"phoneNumber"} rules={[{required: true, message:"Telefon No Alanı Boş Geçilemez!"}]}>
                    <Input placeholder="Telefon Giriniz..." maxLength={11}/>
                </Form.Item>

                <Form.Item label="Ödeme Yöntemi" name={"paymentMode"} rules={[{required: true, message:"Ödeme Yöntemi Alanı Boş Geçilemez!"}]}>
                    <Select placeholder="Ödeme Yöntemi Seçiniz..">
                        <Select.Option value="Nakit">Nakit</Select.Option>
                        <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                    </Select>
                </Form.Item>

                <Card>
                    <div className="flex justify-between">
                        <span>Ara Toplam</span>
                        <span>549.00₺</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>KDV Toplam %8</span>
                        <span className="text-red-600">43.92₺</span>
                    </div>
                    <div className="flex justify-between">
                        <b>Toplam</b>
                        <b>592.92₺</b>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            className="mt-4"
                            type="primary"
                            onClick={() => setIsModalOpen(true)}
                            htmlType="submit"
                        >
                            Sipariş Oluştur
                        </Button>
                    </div>
                </Card>

            </Form>
        </Modal>
    );
};

export default CreateBill;