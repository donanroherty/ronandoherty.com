import React from "react"

function Header() {
    return (
        <div className="container flex-row p-5 pt-10">
            <div className="flex flex-row">
                <div className="flex-auto">
                    <h1 className="font-heading font-extrabold text-5xl text-heading">
                        Ronan
                    </h1>
                    <h1 className="font-heading font-extrabold text-5xl text-heading">
                        Doherty
                    </h1>
                </div>

                <div className="bg-text flex flex-col justify-between justify-items-end">
                    <div className="w-10 h-10 bg-heading">
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Info
                        </a>
                    </div>

                    <div className="w-10 h-10 bg-heading">
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Switch
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="font-heading font-semibold text-1xl text-subtitle">
                    Developer
                </h2>
            </div>
        </div>
    )
}

export default Header
