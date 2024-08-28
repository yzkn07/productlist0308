import UserHeader from "@/components/partials/user/Header.jsx"

export default function userLayout({ children }){
return (
    <>
        <div className="xl:container">
            <UserHeader/>
            <div>{ children }</div>
        </div>
    </>
)
}