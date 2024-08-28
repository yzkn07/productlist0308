export default function AdminProductsLayout({ children }) {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-9 bg-indigo-200 h-screen">{children}</div>
            <div className="col-span-3 bg-purple-300 h-screen"><h1>side bar</h1></div>
        </div>
    )
}