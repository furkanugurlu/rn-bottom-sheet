import React, { forwardRef, useCallback } from "react";
import { Text } from "react-native";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProps,
    BottomSheetView
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";

export type BottomSheetProps = BottomSheetModalProps & {
    children?: React.ReactNode;
    paddingHorizontal?: number;
    bottomBackgroundColor?: string;
};

export const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
    (
        {
            children,
            paddingHorizontal = 24,
            bottomBackgroundColor = "white",
            ...props
        },
        reference
    ) => {
        const renderBackdrop = useCallback(
            (backdropProps: BottomSheetDefaultBackdropProps) => (
                <BottomSheetBackdrop {...backdropProps} appearsOnIndex={0} disappearsOnIndex={-1} />
            ),
            []
        );

        return (
            <BottomSheetModal
                ref={reference}
                enableDynamicSizing
                backdropComponent={renderBackdrop}
                handleIndicatorStyle={{ backgroundColor:'red' }}
                handleComponent={() => <></>}
                {...props}
            >
                <BottomSheetView
                    style={{
                        paddingHorizontal: paddingHorizontal,
                        paddingBottom:50,
                        paddingTop:100
                    }}
                >
                     <Text>Hello</Text>
                </BottomSheetView>
               
            </BottomSheetModal>
        );
    }
);

BottomSheet.displayName = "BottomSheet";
