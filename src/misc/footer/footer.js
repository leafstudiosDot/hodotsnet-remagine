import './footer.css'

function Footer() {
    return (
        <span>
            {!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? (
                <div className="devMode-footer">
                    Development Mode
                </div>
            ) : (null)}
            <div className="copyright-footer">© leafstudiosDot 2022</div>
        </span>
    )
}

export default Footer;