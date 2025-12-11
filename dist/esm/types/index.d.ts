import { ReactGoogleReviews } from "./components";
import { ReviewCard, ReviewCardProps } from "./components/ReviewCard/ReviewCard";
import "./css/index.css";
import { dangerouslyFetchPlaceReviews } from "./lib/fetchPlaceReviews";
import { FeaturableAPIResponse, GoogleReview } from "./types/review";
export { dangerouslyFetchPlaceReviews, FeaturableAPIResponse, GoogleReview as ReactGoogleReview, ReactGoogleReviews, ReviewCard, ReviewCardProps, };
