import {Button} from "antd";
import {ClearOutlined, PlusCircleOutlined, MinusCircleOutlined} from "@ant-design/icons";
import {useSelector, useDispatch} from "react-redux";
import {deleteCart} from "../../redux/cartSlice";

const CartTotals = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
            <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
                Sepetteki Ürünler
            </h2>
            <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
                { cart.cartItems.map((item) => (
                    <li className="cart-item flex justify-between" id={item._id}>
                        <div className="flex items-center">
                            <img
                                src={item.img}
                                alt=""
                                className="w-16 h-16 object-cover cursor-pointer"
                                onClick={() => dispatch(deleteCart(item))}
                            />
                            <div className="flex flex-col ml-2">
                                <b>{item.title}</b>
                                <span>{item.price}₺ x {item.quantity}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button
                                type="primary"
                                className="w-full flex items-center justify-center !rounded-full"
                                size="small"
                                icon={<PlusCircleOutlined />}
                            />
                            <span className="font-bold">{item.quantity}</span>
                            <Button
                                type="primary"
                                className="w-full flex items-center justify-center !rounded-full"
                                size="small"
                                icon={<MinusCircleOutlined />}
                            />
                        </div>
                    </li>
                )) }
            </ul>

            <div className="cart-totals mt-auto">
                <div className="border-t border-b">
                    <div className="flex justify-between p-2">
                        <b>Ara Toplam</b>
                        <span>{cart.total > 0 ? (cart.total).toFixed(2) : 0}₺</span>
                    </div>
                    <div className="flex justify-between p-2">
                        <b>KDV %{cart.tax}</b>
                        <span className="text-red-700">{((cart.total * cart.tax) / 100) > 0 ? `+${((cart.total * cart.tax) / 100).toFixed(2)}` : 0}₺</span>
                    </div>
                </div>

                <div className="border-b mt-4">
                    <div className="flex justify-between p-2">
                        <b className="text-xl text-green-500">Genel Toplam</b>
                        <span className="text-xl">{cart.total + (cart.total * cart.tax) / 100 > 0 ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2) : 0}₺</span>
                    </div>
                </div>

                <div className="py-4 px-2">
                    <Button type="primary" className="w-full" size="large">Sipariş Oluştur</Button>
                    <Button type="primary" className="w-full mt-2 flex items-center justify-center" size="large" icon={<ClearOutlined />} danger>Temizle</Button>
                </div>
            </div>
        </div>
    );
};

export default CartTotals;