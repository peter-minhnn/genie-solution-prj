"use client";

import {useParams, useRouter} from "next/navigation";
import {ReactElement, useMemo, useRef, useState} from "react";
import {useQuery} from "react-query";
import {AgGridReact} from "ag-grid-react";
import {ColDef, ColGroupDef} from "ag-grid-community";
import { RefreshCcw } from "lucide-react"

//Components
import LoginModal from "@/components/Modals/LoginModal";
import AgGrid from "@/components/AgGrid";
import {Button} from "@/components/ui/button";

//Types
import {ContactType} from "@/types/contact";

//Services
import {fetchData} from "@/services/contactService";

export default function AdminDashboard() {
    const params = useParams<{ slug: string }>();
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [contactRowData, setContactRowData] = useState<ContactType[]>([]);
    const gridRef = useRef<AgGridReact<ContactType> | null>(null);

    const contactQuery = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => await fetchData(),
        onSuccess: (response) => response.code === 1 && setContactRowData(response.data || []),
        enabled: isLoggedIn
    })

    const columnDefs: (ColDef | ColGroupDef)[] = useMemo(() => {
        return [
            {
                headerName: "",
                sortable: true,
                suppressSizeToFit: true,
                cellDataType: "number",
                maxWidth: 80,
                valueGetter: (params) => params.node?.rowIndex! + 1,
            },
            {
                headerName: "Name",
                field: "name",
                sortable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: "Email",
                field: "email",
                sortable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: "Message",
                field: "message",
                sortable: true,
                suppressSizeToFit: true,
            }
        ]
    }, [contactRowData]);

    const createLoginMemoized: ReactElement | null = useMemo(() => {
        if (isLoggedIn) return null;

        if (!params.slug || params.slug !== "admin") {
            router.push("/");
            return null;
        }

        return (
            <LoginModal setIsLoggedIn={setIsLoggedIn}/>
        )
    }, [params.slug, isLoggedIn]);

    const createAdminDashboardMemoized: ReactElement | null = useMemo(() => {
        if (!isLoggedIn) return null;

        return (
            <div className="relative z-10 overflow-hidden bg-white px-20 pb-16 pt-[80px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[300px] 2xl:pt-[300px]">
                <AgGrid
                    gridRef={gridRef}
                    rowData={contactRowData}
                    columnDefs={columnDefs}
                    suppressGridPagination={{pagination: true, paginationPageSize: 50}}
                    isFetching={contactQuery.isLoading || contactQuery.isRefetching}
                    defaultColDef={{flex: 1}}
                    selection={{
                        mode: "singleRow",
                        enableClickSelection: "enableSelection",
                        checkboxes: false
                    }}
                    groupButtons={
                        <>
                            <Button
                                id="refresh"
                                type="button"
                                onClick={async () => await contactQuery.refetch()}
                                name="Refresh"
                                className="h-[30px]"
                            >
                                <RefreshCcw size={16} />
                            </Button>
                        </>
                    }
                />
            </div>
        )
    }, [contactRowData, isLoggedIn, contactQuery.isLoading, contactQuery.isRefetching]);

    return (
        <>
            {createLoginMemoized}
            {createAdminDashboardMemoized}
        </>
    );
}
