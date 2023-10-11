import { Navigation } from "../components/Navigation.jsx";

export const Landing = () => {
    return (
        <>
            <Navigation />
            <header className="bg-transparent" id="landing">
                <div className="row text-center">
                    <div className="col">
                        <h1>Hi, I&apos;m Blake McCracken</h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <h3>I&apos;m a software developer in Seattle, WA</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <a href="/about">
                            <button className="btn btn-dark mt-3">Enter</button>
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <section></section>
            </main>
        </>
    )
}