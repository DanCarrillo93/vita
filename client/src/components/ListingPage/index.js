import { useParams } from "react-router-dom";
import { useAuth } from "../../util/auth";

function ListingPage() {
    const { id } = useParams();
    const auth = useAuth();
    let color;
    if (auth.isLoggedIn()) {
        color = "green";
    } else {
        color = "gray";
    }

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
                <button type="submit" className={`mx-3 py-3 px-4 font-sans font-bold border-2 border-${color}-900 bg-${color}-700 rounded`} disabled={!auth.isLoggedIn()}>Buy bundle</button>
            </form>
        </>
    )
}

export default ListingPage;