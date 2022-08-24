import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=saintmartin,bandarban,sylhet"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.teahub.io/photos/full/44-445171_beautiful-picture-of-saint-martin-bangladesh.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>St. Martin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/4615525_Bandarban%20Bangladesh.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bandarban</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.teahub.io/photos/full/283-2834105_sylhet-tea-garden-bangladesh.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sylhet</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
