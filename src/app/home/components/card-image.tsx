import Image from "next/image";

export function CardImage({d}: any) {
  return (<>
  <div className="rounded-xl overflow-hidden h-52 sm:h-72 md:h-52 xl:h-72 2xl:h-80">
        <Image
          alt="Image"
          width={150}
          height={250}
          objectFit="cover"
          style={{ height: '100%', width: '100%' }}
          src={d.image}
          className="hover:scale-125 w-full h-full transition duration-500 cursor-pointer object-cover"
        />
      </div>
  </>)
}