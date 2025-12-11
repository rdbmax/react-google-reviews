/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { ReviewCardCSSProps } from "../../types/cssProps";
import { DateDisplay, GoogleReview, LogoVariant, NameDisplay, ReviewVariant, Theme } from "../../types/review";
type ReviewCardBaseProps = {
    review: GoogleReview;
    maxCharacters?: number;
    nameDisplay?: NameDisplay;
    logoVariant?: LogoVariant;
    dateDisplay?: DateDisplay;
    reviewVariant?: ReviewVariant;
    theme?: Theme;
    readMoreLabel?: string;
    readLessLabel?: string;
    getAbsoluteDate?: (date: Date) => string;
    getRelativeDate?: (date: Date) => string;
};
export type ReviewCardProps = ReviewCardBaseProps & ReviewCardCSSProps;
export declare const ReviewCard: FC<ReviewCardProps>;
export {};
