function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <img
                className="rounded-full object-cover"
                height={40}
                width={40}
                src="https://links.papareact.com/1m8"
                alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    );
}

export default Logo;
