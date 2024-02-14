export const sections = ['primera', 'segunda', 'tercera']
import { useEffect, useState } from "react";
import './UI.css'
import First from "./pages/First";
import Third from "./pages/Third";
import Second from "./pages/Second";

export const UI = ({ section, onSectionChange }) => {
    const [isInit, setIsInit] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsInit(true);
        }, 2000);
    }, [])

    return (
        <main className="main-container">
            <div className="main-div">

                <div>
                    <button className="button-1" onClick={() => onSectionChange(0)}> Primer Botton</button>
                </div>
                <div>
                    <button className="button-1" onClick={() => onSectionChange(1)}> Primer Botton</button>
                </div>
                <div>
                    <button className="button-1" onClick={() => onSectionChange(2)}> Primer Botton</button>
                </div>
                <div>
                    <button className="button-1" onClick={() => onSectionChange(3)}> Primer Botton</button>
                </div>
                <div className="relative-container">
                    {sections.map((sectionItem, idx) => (
                        <section
                            key={sectionItem}
                            className={`section-text ${idx === 0 ? "center" : "end"}`}
                            style={{ display: section === idx && isInit ? "block" : "none" }}
                        >

                            <div className="first-section">

                                {sectionItem === "primera" && (
                                    <First />

                                )}

                            </div>
                            <div className="second-section">

                                {sectionItem === "segunda" && (
                                    <>
                                        <Second />
                                    </>

                                )}

                            </div>
                            <div className="third-section">

                                {sectionItem === "tercera" && (
                                    <>
                                        <Third />
                                    </>

                                )}

                            </div>

                        </section>
                    ))}
                </div>
            </div>

        </main>
    )
};