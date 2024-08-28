import {
    Dispatch,
    forwardRef,
    ReactElement,
    SetStateAction,
    useImperativeHandle,
    useRef,
    useState
} from "react";
import data from "@/components/OurStrength/tabs-data";
import {cn} from "@/lib/utils";

type TabProps = {
    activeTab: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
}

export const Tabs = forwardRef((props: TabProps, ref) => {
    const [activeTab, setActiveTab] = useState(1);
    const [activeNode, setActiveNode] = useState<ReactElement | null>(null);
    const tabRef = useRef(null);

    useImperativeHandle(ref, () => ({
        setActiveNode: (node: ReactElement) => {
            setActiveNode(node);
        }
    }), []);

    return (
        <>
            <div className="flex justify-center mt-[100px]" ref={tabRef}>
                <div
                    className="inline-flex flex-wrap justify-center items-center bg-white shadow-md rounded-sm py-2 mb-[40px] tabButtons">
                    {data.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                props.setActiveTab(tab.id);
                            }}
                            className={cn(
                                `flex items-center text-body-color hover:text-primary text-base md:text-lg px-4 md:px-6 my-2 border-body-color border-opacity-30`,
                                {
                                    'text-primary': activeTab === tab.id,
                                    'border-r': tab.id !== data[data.length - 1].id
                                }
                            )}
                        >
                            <span className="mr-3">{tab.icon}</span>
                            {tab.name}
                        </button>
                    ))}
                </div>

            </div>
            <div className="flex justify-center">
                <div className="inline-flex flex-wrap justify-center items-center py-2 w-full">
                    {activeNode}
                </div>
            </div>
        </>
    )
});
Tabs.displayName = 'Tabs';

export default Tabs;