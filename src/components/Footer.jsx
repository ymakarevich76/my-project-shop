function Footer() {
    return (
        <div className='page-footer purple lighten-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a className='grey-text text-lighten-4 right' href='https://github.com/ymakarevich76/my-project-shop' target="_blank" rel="noreferrer">
                        Repo
                    </a>
                </div>
            </div>
        </div>
    );
}

export { Footer };
