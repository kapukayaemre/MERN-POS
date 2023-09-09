import {Badge, Input} from "antd";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined
} from "@ant-design/icons";

const Header = () => {
    return (
        <div className="border-b mb-6">
            <header className="py-4 px-6 flex justify-between items-center gap-10">
                <div className="logo">
                    <a href="/">
                        <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1 flex justify-center">
                    <Input
                        size="large"
                        placeholder="Ürün Ara..."
                        prefix={<SearchOutlined/>}
                        className="rounded-full max-w-[800px]"
                    />
                </div>
                <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
                    <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]">
                        <HomeOutlined className="flex justify-center md:text-2xl text-xl"/>
                        <span className="md:text-xs text-[10px]">Ana Sayfa</span>
                    </a>
                    <Badge count={5} className="md:flex hidden">
                        <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]">
                            <ShoppingCartOutlined className="flex justify-center md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Sepet</span>
                        </a>
                    </Badge>
                    <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]">
                        <CopyOutlined className="flex justify-center md:text-2xl text-xl"/>
                        <span className="md:text-xs text-[10px]">Faturalar</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]">
                        <UserOutlined className="flex justify-center md:text-2xl text-xl"/>
                        <span className="md:text-xs text-[10px]">Müşteriler</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]">
                        <BarChartOutlined className="flex justify-center md:text-2xl text-xl"/>
                        <span className="md:text-xs text-[10px]">İstatistikler</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]">
                        <LogoutOutlined className="flex justify-center md:text-2xl text-xl"/>
                        <span className="md:text-xs text-[10px]">Çıkış</span>
                    </a>
                </div>
                <Badge count={5} className="md:hidden flex">
                    <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]">
                        <ShoppingCartOutlined className="flex justify-center text-2xl"/>
                        <span className="md:text-xs text-[10px]">Sepet</span>
                    </a>
                </Badge>
            </header>
        </div>
    );
};

export default Header;