import Image from "next/image";
import Link from "next/link";
import { JSX } from "react"

function School(): JSX.Element {
    return (
        <div className="" >
            <h1>School: </h1>
            <ul>
                <li className="card">
                    < Image
                        className="redound"
                        src="/itt-logo.webp"
                        alt="ITT logo"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>
                        <h2>Ingenieria en Tecnologias de la Información y Comunicaciones (TIC's)</h2>
                        <p>Instituto Tecnologico de Toluca (2018-2024)</p>
                        <p>Titulacion en progreso</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default School;