import UserHeader from "@/components/partials/user/Header.jsx"

export default function userLayout({ children, sepetSayi }){
return (
    <>
        <div className="xl:container">
            <UserHeader sepetSayi={sepetSayi}/>
            <div>{ children }</div>
        </div>
    </>
)
}