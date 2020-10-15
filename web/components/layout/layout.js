import Meta from "./meta";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <div className={"m-h-screen"}>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
};