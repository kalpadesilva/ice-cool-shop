export const Price = ({ response }) => (
    <div className="h-[300px] w-[400px] bg-[#FFE7D0] rounded-[42px] text-[50px] flex flex-col items-center justify-center text-center hover:bg-[#FFDAB9] transition-colors duration-300">
        {response.valid &&
            <span className="mx-[30px] text-[#B35B1A]">{`Price = ${response.price}`}</span>
        }
        {!response.valid &&
            <span className="mx-[30px] text-[#c63e31]">{`${response.message}`}</span>
        }
    </div>
)