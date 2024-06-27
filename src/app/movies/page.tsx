import Image from "next/image";

export default function movies(){
    return(
        <div>
            <div className="flex items-center gap-[24px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="./../svg/search.svg"
                    alt="Next.js Logo"
                    width={24}
                    height={24}
                    priority
                />
                <input className="bg-[#10141E] w-[420px] outline-none text-white" type="text" placeholder="Search for movies"/>
            </div>
            <h1 className="text-white">movies</h1>
        </div>
    )
}