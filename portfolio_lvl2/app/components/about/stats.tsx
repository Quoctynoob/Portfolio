import Info from "./info";
import ComputerSkill from "./computerSkill";

const Stats = () => {
    return (
        <div className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center 
        bg-darkOrange px-20 text-darkMint">
            <div className="w-1/2">
                <Info/>
            </div>

            <div className="w-1/2 pt-5">
                <ComputerSkill/>
            </div>
        </div>
    );
}

export default Stats;