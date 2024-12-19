import Image from "next/image";
import Link from "next/link";
import { JSX } from "react"

function AboutMe({ old }: { old: number }): JSX.Element {
    return (
        <div className="me" >
            < Image
                className="redound"
                src="/me.webp"
                alt="Next.js logo"
                width={350}
                height={350}
                priority
            />
            <div className="about" >
                <div>
                    <h1>ABOUT ME (Okitegami): </h1>
                    <p> Hola, mi nombre es Adolfo Angel Martínez Mercado tengo {old} años </p>
                </div>
                < div className="contacts flex gap-4 items-center flex-col sm:flex-row" >
                    <Link
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="https://github.com/OkitegamiKyoko"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Github
                    </Link>
                    < Link
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="https://www.linkedin.com/in/adolfo-angel-mart%C3%ADnez-mercado-48581ab2/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Link>
                    < Link
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="mailto:adolfoangelmtz@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="adolfoangelmtz@gmail.com"
                    >
                        Email
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;