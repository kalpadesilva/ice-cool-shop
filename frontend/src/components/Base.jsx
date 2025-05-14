export const Base = ({ base, height, isSelected }) => (
    <div className={`h-[350px] w-[313px] bg-[#FFE7D0] rounded-[42px] text-[36px] flex flex-col items-center justify-center text-center hover:bg-[#FFDAB9] transition-colors duration-300 cursor-pointer ${isSelected ? 'border-8 border-[#D09A5C]' : ''}`}>
        <img src={`/images/${base.toLowerCase().split(' ').join('')}.png`} style={{ height: `${height}px` }} className="w-auto" />
        <span className="mx-[60px] text-[#B35B1A]">{base}</span>
    </div>
)