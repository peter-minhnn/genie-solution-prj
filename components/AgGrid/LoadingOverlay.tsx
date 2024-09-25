import React from 'react';

type LoadingOverlayProps = {
    loadingMessage: string;
    iconComponent?: React.ReactNode;
};

export default function LoadingOverLay(props: LoadingOverlayProps) {
    return (
        <div className="ag-overlay-loading-center" role="presentation">
            {props.iconComponent && <>{props.iconComponent}</>}
            <div aria-live="polite" aria-atomic="true">
                <span className='text-black font-semibold text-lg'>Loading...</span>
            </div>
        </div>
    );
};