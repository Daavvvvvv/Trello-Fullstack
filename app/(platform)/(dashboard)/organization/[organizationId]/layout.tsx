const OrganizationIdLayout = ({children}:{
    children: React.ReactNode;
}) => {
    return(
        <div>
            <OrgCont />
            {children}
        </div>
            

    )
}

export default OrganizationIdLayout;