"use strict";

import {AgGridReact} from "ag-grid-react";
import {MutableRefObject, ReactNode, useEffect, useRef} from "react";
import {ColDef, ColGroupDef, GridOptions} from "ag-grid-community";

type AgGridProps<TData> = {
    gridRef?: MutableRefObject<AgGridReact<TData> | null>;
    rowData: TData[];
    columnDefs: (ColDef<TData> | ColGroupDef<TData>)[] | null;
    suppressGridPagination: {
        pagination: boolean;
        paginationPageSize: number;
    };
    isFetching?: boolean;
    groupButtons?: ReactNode;
} & GridOptions;

export default function AgGrid<TData>({
    gridRef,
    rowData,
    columnDefs,
    suppressGridPagination = { pagination: true, paginationPageSize: 10 },
    isFetching = false,
    groupButtons,
    ...props
}: AgGridProps<TData>) {
    const gridLocalRef = useRef<AgGridReact<TData> | null>(null);

    //Memos

    //Effects
    useEffect(() => {
        if (!gridLocalRef.current || !gridLocalRef.current!.api) return;

        if (isFetching) {
            return gridLocalRef.current!.api?.setGridOption("loading", true);
        }
        if (!isFetching && rowData?.length) {
            return gridLocalRef.current!.api?.setGridOption("loading", false);
        }
        gridLocalRef.current!.api?.setGridOption("loading", false);
        return gridLocalRef.current!.api?.showNoRowsOverlay();
    }, [rowData, isFetching]);

    return (
        <div className={"ag-theme-quartz-dark min-h-[500px] h-[500px]"}>
            {groupButtons && (
                <div className="flex flex-row justify-end w-full gap-2 mb-4">
                    {groupButtons}
                </div>
            )}
            <AgGridReact
                {...props}
                ref={(ref) => {
                    if (ref) {
                        gridLocalRef.current = ref;
                        if (gridRef) {
                            gridRef.current = ref;
                        }
                    }
                }}
                rowData={rowData}
                columnDefs={columnDefs}
                pagination={suppressGridPagination.pagination}
                paginationPageSize={suppressGridPagination.paginationPageSize}
            />
        </div>
    )
}