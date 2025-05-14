export const Counter = ({ count, onIncrement, onDecrement, max }) => (
    <div className="flex items-center justify-center -mt-[60px]">
        {count > 0 && <>
            <button
                onClick={onDecrement}
                className="w-12 h-12 bg-[#FF8C20] hover:bg-[#E07B1C] text-white text-2xl rounded-full shadow-md transition-colors duration-300 cursor-pointer flex items-center justify-center"
            >
                -
            </button>
            <div className="w-16 h-12 bg-[#FFE7D0] text-[#B35B1A] text-2xl flex items-center justify-center rounded-md">
                {count}
            </div>
        </>}
        {true &&
            <button disabled={count >= max}
                onClick={onIncrement}
                className="w-12 h-12 bg-[#FF8C20] hover:bg-[#E07B1C] disabled:bg-[#b69678] text-white text-2xl rounded-full shadow-md transition-colors duration-300 cursor-pointer flex items-center justify-center"
            >
                +
            </button>
        }
    </div>
)