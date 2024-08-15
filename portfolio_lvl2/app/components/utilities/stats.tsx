import AgeCalculator from "./ageCalc";

const Stats = () => {
    return (
        <div className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center 
        bg-darkOrange pl-20 pr-20 text-darkMint">
            <div className="w-1/2">
                <div className="rounded-md bg-darkYellow mt-5 ">
                    <span className="font-bold text-9xl">Education</span><br></br>
                    <span>Bachelor of Computing</span><br></br>
                    <span>Computer Science</span><br></br>
                    <span>Minor Geomatics</span><br></br>
                    <span>University of Guelph</span>
                </div>

                <div className="rounded-md bg-darkYellow mt-5 ">
                    <span>Current</span>
                    <span>Age</span>
                    <AgeCalculator/>
                </div>

            </div>

            <div className="w-1/2">
                Computer Skill
            </div>
        </div>
    );
}

export default Stats;