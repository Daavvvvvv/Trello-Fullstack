const TestLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div 
        className="h-full">
            <nav>
                This is a navbar
            </nav>
            <hr />
            <h1>{children}</h1>
        </div>
    )
}

export default TestLayout;