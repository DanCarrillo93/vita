import { useParams } from "react-router-dom";

function ListingPage() {
    const { id } = useParams();
    return (
        <div className="text-5xl text-gray-200">
            Listing Page: {id}
        </div>
    )
}

export default ListingPage;