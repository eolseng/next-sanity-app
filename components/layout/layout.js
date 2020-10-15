import Meta from "./meta";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <div className={"m-h-screen"}>
                <main>{children}</main>
            </div>
        </>
    )
};