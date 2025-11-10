import { createRoot } from 'react-dom/client';
import { ReactGoogleReviews } from '../components';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <div>
        <h1>react-google-reviews</h1>

        <h2>Carousel v1:</h2>
        <ReactGoogleReviews featurableId="example" layout="carousel" widgetVersion="v1" />

        <h2>Badge v1:</h2>
        <ReactGoogleReviews featurableId="example" layout="badge" widgetVersion="v1" />

        <h2>Carousel v2:</h2>
        <ReactGoogleReviews featurableId="example" layout="carousel" widgetVersion="v2" />

        <h2>Badge v2:</h2>
        <ReactGoogleReviews featurableId="example" layout="badge" widgetVersion="v2" />
    </div>
);
