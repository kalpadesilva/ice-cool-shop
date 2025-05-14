import { Link } from "react-router-dom"

export const StartButton = () => (
    <div className="flex justify-center items-center mt-auto  pb-[145px] text-[78px]">
        <Link to="/order">
            <button
                className="w-[629px] h-[168px] rounded-[128.5px] border border-[#ED8181] bg-[#FF5157] text-white shadow-[0_14px_4px_0_rgba(242,152,155,1)] hover:bg-[#E0484E] transition-colors"
            >
                Start Order
            </button>
        </Link>
    </div>
)