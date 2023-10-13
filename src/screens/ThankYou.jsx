export const ThankYou = () => {
    return (
        <>
            <header className="bg-transparent" id="post">
                <div className="text-center">
                    <div className="col">
                        <h1>Thanks for the message.</h1>
                    </div>
                </div>
                <div className="text-center">
                    <div className="col">
                        <h3>I&apos;ll get back to you as soon as possible.</h3>
                    </div>
                </div>
            </header>

            <div className="text-center">
                <div className="col">
                    <a href="/about">
                        <button className="btn btn-dark mt-3">Continue</button>
                    </a>
                </div>
            </div>
        </>
    )
}