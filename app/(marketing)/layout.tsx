const MarketingLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-slate-100">
            {/* Navbar */}
            <main className="pt-40 pb-20 bg-slate">
                {children}
            </main>
            {/* Footer */}
        </div>
    )
}

export default MarketingLayout;