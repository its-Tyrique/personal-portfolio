import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const About1 = ({clientHeight}) => {
    const sectionRef = useRef(null);
    const quoteRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap
                .timeline({
                    defaults: {ease: "none", duration: 0.1},
                })
                .fromTo(
                    quoteRef.current.querySelector(".about-1"),
                    {opacity: 0.2},
                    {opacity: 1}
                )
                .to(quoteRef.current.querySelector(".about-1"), {
                    opacity: 0.2,
                    delay: 0.5,
                })
                .fromTo(
                    quoteRef.current.querySelector(".about-2"),
                    {opacity: 0.2},
                    {opacity: 1},
                    "<"
                )
                .to(quoteRef.current.querySelector(".about-2"), {
                    opacity: 0.2,
                    delay: 1,
                });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "center 80%",
                end: "center top",
                scrub: 0,
                animation: tl,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full relative select-none">
            <div
                className={`${
                    clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
                } section-container`}
            >
                <h1
                    ref={quoteRef}
                    className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
                >
                    <span className="about-1 leading-tight">
                        I&apos;m a Software Engineer with a passion for building reliable, scalable apps - from backend systems to full-stack solution&apos;{" "}
                    </span>
                    <span className="about-2 leading-tight">
                        I care about clean architecture and creating seamless experiences across the stack, from backend APIs to user interfaces.{" "}
                    </span>
                </h1>
            </div>
        </section>
    );
};

export default About1;
