import Image from "next/image";
import ImgCom from "../ImgCom";
import VideoCom from "../VIdeoCom";
import { works } from "../fileArray";
import WorkList from "../WorkList";

export default function Page({ params }) {
  let item = works.work_list[params.id];
  return (
    <div className="move-up section-demos">
      <div key={item.id} className="col-sm-12 col-md-12 col-lg-4">
        {/* view vimeo video  list*/}
        <div
          id={`vimeo_${item.id}`}
          className="vimeo-shadowbox vimeo-shadowbox--hidden"
        >
          <div className={`vimeo-shadowbox__video-wrapper ${item.videoType}`}>
            <div>
              <ImgCom item={item} />
              <div className={`vimeo-shadowbox__video `}>
                <div className="carousel">
                  <input
                    type="radio"
                    name="slides"
                    defaultChecked="checked"
                    className="slide_1 slide_active"
                  />
                  <input type="radio" name="slides" className="slide_2" />
                  <input type="radio" name="slides" className="slide_3" />
                  <input type="radio" name="slides" className="slide_4" />
                  <input type="radio" name="slides" className="slide_5" />
                  <ul className="carousel__slides">
                    {item.href.map((video, idx) => (
                      <li className="carousel__slide" key={idx}>
                        <figure>
                          <div>
                            <VideoCom
                              id={`video_${idx + 1}`}
                              key={idx}
                              video={video}
                            />
                          </div>
                        </figure>
                      </li>
                    ))}
                  </ul>

                  <ul className="carousel__thumbnails">
                    {item.href.map((videoId, idx) => {
                      if (item.href.length > 1) {
                        return (
                          <li key={idx}>
                            <label
                              data-video={`video_${idx + 1}`}
                              data-slide={`slide_${idx + 1}`}
                              className="label"
                            >
                              <Image
                                width={100}
                                height={200}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                                src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                                alt="image"
                              />
                            </label>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WorkList title={false} />
    </div>
  );
}
