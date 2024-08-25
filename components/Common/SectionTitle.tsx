const SectionTitle = ({
  title,
  paragraph,
  width = "870px",
  center,
  mb = "100px",
}: {
    title: string;
    paragraph: string;
    width?: string;
    center?: boolean;
    mb?: string;
}) => {
    return (
        <>
            <div
                className={`w-full ${center ? "mx-auto text-center" : ""}`}
                style={{maxWidth: width, marginBottom: mb}}
            >
                <h2 className="mb-4 text-3xl font-bold !leading-tight rich-black] dark:text-white sm:text-4xl md:text-[4rem]">
                    {title}
                </h2>
                <p className="text-base !leading-relaxed text-body-color md:text-lg" dangerouslySetInnerHTML={{__html: paragraph}}></p>
            </div>
        </>
    );
};

export default SectionTitle;