import React from 'react';
import {Form, Modal, Table} from "antd";

const Edit = ({ isEditModalOpen, setIsEditModalOpen }) => {
    return (
        <Modal open={isEditModalOpen} title="Kategori İşlemleri" footer={false} onCancel={() => setIsEditModalOpen(false)}>
            <Form>
                <Table bordered />
            </Form>
        </Modal>
    );
};

export default Edit;