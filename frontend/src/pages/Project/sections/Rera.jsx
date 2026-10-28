import regaQr from "../../../assets/logo/qr.png"


function Rera() {
    return (
        <section className="bg-[#F2EDE4] border-t border-[#B9935A]/20 relative py-12 font-sans sm:py-16 lg:py-20">

            {/* =========================================================
          MAIN RERA INFORMATION
      ========================================================= */}
            <div
                className="
          mx-auto
          flex
          max-w-[1440px]
          flex-col
          px-5
          sm:px-10
          lg:flex-row
          lg:items-center
          lg:px-12
          lg:py-10
        "
            >

                {/* =======================================================
            QR + PROJECT INFORMATION
        ======================================================= */}
                <div
                    className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            lg:w-1/2
            lg:flex-row
            lg:gap-10
          "
                >
                    <div
                        className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-5
              sm:gap-6
              lg:w-auto
              lg:flex-row
              lg:gap-10
            "
                    >

                        {/* =================================================
                QR CODE
            ================================================= */}
                        <div className="flex shrink-0 items-center justify-center">
                            <img
                                src={regaQr}
                                alt="Mangalmurti Residency MahaRERA QR Code"
                                className="
                  h-[120px]
                  w-[120px]
                  object-contain
                  sm:h-[140px]
                  sm:w-[140px]
                  lg:h-[140px]
                  lg:w-[140px]
                "
                            />
                        </div>

                        {/* =================================================
                RERA INFORMATION
            ================================================= */}
                        <div
                            className="
                flex
                w-full
                flex-col
                items-center
                text-center
                leading-[1.3]
                text-[#333]
                lg:w-auto
                lg:items-start
                lg:text-left
              "
                        >

                            {/* PROJECT NAME */}
                            <div>
                                <span
                                    className="
                    text-[clamp(2rem,9vw,3rem)]
                    font-bold
                    leading-tight
                    text-brand-primary
                    sm:text-5xl
                    lg:text-5xl
                  "
                                >
                                    Mangalmurti Residency
                                </span>
                            </div>

                            {/* MAHARERA NUMBER */}
                            <div
                                className="
                  mt-3
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-2
                  gap-y-1
                  text-center
                  lg:justify-start
                  lg:text-left
                "
                            >
                                <span
                                    className="
                    text-sm
                    font-semibold
                    text-brand-black1
                    sm:text-lg
                  "
                                >
                                    MAHARERA NO.
                                </span>

                                <span className="text-base font-semibold text-brand-primary sm:text-lg">
                                    :
                                </span>

                                <span
                                    className="
                    text-base
                    font-bold
                    text-brand-primary
                    sm:text-2xl
                  "
                                >
                                    P50500045698                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* =======================================================
            VERTICAL DIVIDER
        ======================================================= */}
                <div
                    className="
            my-7
            h-px
            w-full
            bg-[#D5D5D5]
            lg:my-0
            lg:h-[145px]
            lg:w-px
            lg:shrink-0
          "
                />

                {/* =======================================================
            RERA DETAILS
        ======================================================= */}
                <div
                    className="
      flex
      w-full
      items-center
      lg:w-1/2
      lg:pl-10
      sm:pb-0
      pb-10
    "
                >
                    <ul
                        className="
          w-full
          space-y-3
          text-[15px]
          leading-6
          font-semibold
          text-[#333]
          sm:text-[16px]
          sm:leading-7
          lg:text-[16px]
        "
                    >
                        <li className="flex items-start gap-3">
                            <span className="mt-0 shrink-0 text-brand-primary">
                                •
                            </span>

                            <span>
                                Project Registered under Government of India RERA Act 2016
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-0 shrink-0 text-brand-primary">
                                •
                            </span>

                            <span>
                                MAHA RERA Project Registration No.: P50500045698
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* =========================================================
    DISCLAIMER
========================================================= */}
            <div
                className="
        mx-auto
        max-w-[1440px]
        px-5
        sm:px-10
        lg:px-12
    "
            >
                <div className="border-t border-[#D5D5D5]" />

                <p
                    className="
            py-4
            text-center
            text-[11px]
            leading-5
            text-[#777]
            sm:py-5
            sm:text-[14px]
            sm:leading-6
            lg:text-[18px]
            lg:leading-7
        "
                >
                    <span className="font-bold text-[#111]">
                        Disclaimer:
                    </span>{" "}
                    Properties mentioned are subject to availability. Images are for representation purposes only.
                </p>
            </div>

        </section>
    );
}

export default Rera;