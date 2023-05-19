export const Carduse = ({ title, description, imgUrl,alt }) => {
    return (
        <div class="col">
        <div class="card  ntr h-100">
        <img src={imgUrl} className="img-fluid" alt={alt} srcset="" />
          <div class="card-body ">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
          </div>
        </div>
      </div>
    )
  }