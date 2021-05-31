import { useParams } from "react-router-dom";

function ListingPage() {
    const { id } = useParams();
    return (
        <>
            <div className="text-5xl text-gray-200">
                Listing Page: {id}
            </div>
            <form className="flex flex-row justify-end text-gray-200 text-2xl">
                <div className="flex flex-col justify-center">
                    <h6>
                        4 items listed for $50
                    </h6>
                </div>
                <button type="submit" className="mx-3 py-3 px-4 font-sans font-bold border-2 border-green-900 bg-green-700 rounded">Buy bundle</button>
            </form>
        </>
    )
}

export default ListingPage;