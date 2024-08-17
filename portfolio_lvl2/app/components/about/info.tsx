import AgeCalculator from "./ageCalc";

const Info = () => {
    return (
        <div>
            <div className="rounded-3xl bg-darkYellow text-center px-5 py-6 staggered-fade">
                <span className="font-bold text-8xl">EDUCATION</span>
                <br></br>
                <span className="font-train text-4xl">Bachelor of Computing</span>
                <br></br>
                <div className="bg-darkMint text-darkOrange font-bold py-1">
                    <p className="text-5xl">COMPUTER SCIENCE</p>
                    <p className="text-right px-10">(COOP)</p>
                </div>
                <br></br>
                <div className="flex">
                    <span className="transform -rotate-90 font-bold -mr-10 text-lg">MINOR</span>
                    <span className="bg-darkMint text-darkOrange text-5xl p-3 w-full font-bold">
                        GEOMATICS
                    </span>
                </div>
                <br></br>
                <a href="https://www.uoguelph.ca/"><img src="/images/uofglogo.png" alt="logo" className="staggered-fade"/></a>
            </div>

            <div className="rounded-3xl bg-darkYellow my-5 px-14 staggered-fade">
                <span className="font-train text-5xl">current</span>
                <span className="text-darkMint text-9xl font-bold">AGE</span>
                <AgeCalculator/>
            </div>
        </div>
    );
}

export default Info;