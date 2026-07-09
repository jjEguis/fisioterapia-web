import heroBg from "@/public/img-1.webp";
import imgDoctor from "@/public/img-2.webp";
import Image from "next/image";

export default function Hero(){
    const listaImagenes = [heroBg, imgDoctor];
    return (
        <section className="relative h-screen flex flex-col justify-end">
            <Image
                src={heroBg}
                alt="Hero background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-screen px-10 py-12 pl-28 gap-40 text-white flex flex-col items-start justify-end">
                <div className="flex flex-col justify-end">
                    <h1 className="text-6xl font-bold mb-4">
                        Fisioterapia para todos
                    </h1>
                    <p className="text-lg max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis justo nec lobortis euismod. Sed ut aliquam lectus. Aliquam eros libero, egestas non tristique eget, rutrum ac mauris.
                    </p>
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 w-40 rounded-full transition-colors">
                        MAS
                    </button>
                </div>
                <div className="flex w-full justify-between">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <span className="text-6xl font-bold">10</span>
                            <span>Años de experiencia</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-6xl font-bold">100</span>
                            <span>Pacientes satisfechos</span>
                        </div>                        
                    </div>
                    <div>
                        <div className="flex gap-4">
                            {listaImagenes.map((element, index) => (
                                <Image
                                    key={index}
                                    className="rounded-sm"
                                    src={element}
                                    alt="Doctor"
                                    height={120}
                                    width={120}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}