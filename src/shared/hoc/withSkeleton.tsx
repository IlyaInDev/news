import { ComponentType } from "react";
import { Skeleton } from "../ui/Skeleton/Skeleton";
import { SkeletonDirection, SkeletonType } from "../interfaces";

export interface Props {
    isLoading: boolean;
    type?: SkeletonType;
    direction?: SkeletonDirection;
}

export function withSkeleton<P extends object>(
    Component: ComponentType<P>,
    count?: number, 
) {
    return function WithSkeleton(props: Props & P) {
        const {
            isLoading,
            type,
            direction,
            ...restProps
        } = props;

        if (isLoading) {
            return <Skeleton type={type} count={count} direction={direction} />
        }

        return <Component type={type} {...(restProps as P)} />
    }
}