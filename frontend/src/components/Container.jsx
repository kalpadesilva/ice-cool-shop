export const Container = ({ container, isSelected }) => (
    <div
        className={`h-[300px] w-[300px] bg-[#FFE7D0] rounded-[42px] text-[50px] flex flex-col items-center justify-center text-center hover:bg-[#FFDAB9] transition-colors duration-300 cursor-pointer ${isSelected ? 'border-8 border-[#D09A5C]' : ''
            }`}
    >
        <span className="mx-[30px] text-[#B35B1A]">{container}</span>
    </div>
)