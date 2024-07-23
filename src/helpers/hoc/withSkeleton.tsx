import { ComponentType } from "react";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { SkeletonDirection, SkeletonType } from "../../interfaces";

export interface Props {
    isLoading: boolean;
}

export function withSkeleton<P extends object>(
    Component: ComponentType<P>,
    type?: SkeletonType,
    count?: number, 
    direction?: SkeletonDirection
) {
    return function WithSkeleton(props: Props & P) {
        const {
            isLoading,
            ...restProps
        } = props;

        if (isLoading) {
            return <Skeleton type={type} count={count} direction={direction} />
        }

        return <Component {...(restProps as P)} />
    }
}