export const Condiment = ({ condiment, onClick }) => (
    <div className="h-[240px] w-[300px] bg-[#FFE7D0] rounded-[42px] text-[35px] flex flex-col items-center justify-center text-center hover:bg-[#FFDAB9] transition-colors duration-300 cursor-pointer">
        <span className="mx-auto mb-2 text-[#B35B1A]">{condiment}</span>
    </div>
)