import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./component/Loading";
import MySlider from "./component/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook  } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useAllState } from "./Provider";
function Home() {
  const { slideNumber } = useAllState();
  const { setTopBlogs } = useAllState();
  const [topUsers, setTopUsers] = useState();
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const [loadedBlogs, setLoadedBlogs] = useState();
  const [count, setCount] = useState(5);

  const { parsIsoDate } = useAllState();

  useEffect(() => {
    window.scrollTo(0, 0);
    const myFunction = async () => {
      const [res1, res2, res3] = await Promise.all([
        fetch("http://localhost:4000/blog"),
        fetch("http://localhost:4000/blog/top-blogs"),
        fetch("http://localhost:4000/user/top-users"),
      ]);

      const [data1, data2, data3] = await Promise.all([
        res1.json(),
        res2.json(),
        res3.json(),
      ]);
      setBlogs(data1);
      setTopBlogs(data2);
      setTopUsers(data3);
      setLoading(false);
    };
    myFunction();
  }, []);

  const loadMore = () => {
    setCount(count + 3);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="site-content transform-none md:pt-10 md:pb-0 pt-8">
        <div className="slider-block laptop:mb-[50px] LCD:mb-[55px] relative">
          <div
            className="container LCD:px-16"
            style={{ padding: "0 !important" }}
          >
            <div className="slider-block_inner before:content-[''] before:absolute before:bg-[#607027] before:top-0 before:left-0 before:w-[370px] before:h-[650px] tablet:before:hidden laptop:before:h-[520px] laptop:before:w-[296px] relative pt-12 md:px-5 px-0">
              <div className="main-section relative ml-[200px] mb-9 tablet:m-0">
                <MySlider />
                <div className="slideNumber absolute top-0 right-full w-[200px] text-[85px] leading-[1.33] text-white font-black text-center laptop:w-[180px] laptop:text-[68px] tablet:hidden ">
                  <span className="current-slide">0{slideNumber}</span>
                  <span className="total-slides text-[#0000223b] text-[40px] align-super">
                    /03
                  </span>
                </div>
              </div>
              <div className="sub-section overflow-hidden tablet:ml-0 tablap:ml-[325px] LCD:ml-[400px] tablet:mt-[40px] ">
                <div className="posts-list md:flex block flex-wrap -m-[10px]">
                  {
                    <div className="list-item p-4 md:w-1/2">
                      <article className="post-overlay pl-4 -mx-4 bg-transparent flex relative overflow-hidden">
                        <div className="post__thumb-overlay absolute w-full h-full">
                          <Link to={"#"} className="w-full h-full block">
                            <img
                              className="w-full h-full object-cover align-middle block"
                              src={require("./images/post-overlay1.jpg")}
                            ></img>
                          </Link>
                        </div>
                        <div className="post__text-overlay z-10 pointer-events-none flex items-end pt-10 relative w-full text-white">
                          <div className="post__text-wrap mb-0 pl-4 relative w-full">
                            <div className="post__text-inner px-6 pb-6 -ml-4 relative">
                              <Link
                                to={"#"}
                                className="post__cat-overlay pointer-events-auto absolute block mb-4 text-xs font-normal uppercase text-white mr-2"
                              >
                                fashion
                              </Link>
                              <h3 className="post__title-overlay text-white font-medium mb-2 whitespace-normal break-words pointer-events-auto">
                                <Link to={"#"} className="inline-block">
                                  Some Men See Things as They Are and Ask Why
                                </Link>
                              </h3>
                              <div className="post__meta my-0 text-sm">
                                <time className="time font-light whitespace-nowrap">
                                  Mar 6, 2019
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  }
                  <div className="list-item p-4 md:w-1/2">
                    <article className="post-overlay pl-4 -mx-4 bg-transparent flex relative overflow-hidden">
                      <div className="post__thumb-overlay absolute w-full h-full">
                        <Link to={"#"} className="w-full h-full block">
                          <img
                            className="w-full h-full object-cover align-middle block"
                            src={require("./images/post-overlay2.jpg")}
                          ></img>
                        </Link>
                      </div>
                      <div className="post__text-overlay z-10 pointer-events-none flex items-end pt-10 relative w-full text-white">
                        <div className="post__text-wrap mb-0 pl-4 relative w-full">
                          <div className="post__text-inner px-6 pb-6 -ml-4 relative">
                            <Link
                              to={"#"}
                              className="post__cat-overlay pointer-events-auto absolute block mb-4 text-xs font-normal uppercase text-white mr-2"
                            >
                              House
                            </Link>
                            <h3 className="post__title-overlay text-white font-medium mb-2 whitespace-normal break-words pointer-events-auto">
                              <Link to={"#"} className="inline-block">
                                Some Men See Things as They Are and Ask Why
                              </Link>
                            </h3>
                            <div className="post__meta my-0 text-sm">
                              <time className="time font-light whitespace-nowrap">
                                Mar 6, 2019
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="aboutSection relative"
          style={{ marginBottom: "120px" }}
        >
          <div className="container makbook:px-14 mx-auto iphone:px-8">
            <div className="about__inner pt-40">
              <div className="about__content px-[70px] pb-20 tablap:pb-[61px] fablet:p-[40px] fablet:border-[4px] iphone:p-[30px] iphone:flex-col border-[5px] border-[#607027] flex w-full">
                <div className="about__thumb relative flex-none w-[370px] h-[500px] -mt-[155px] mr-[55px] tablap:-mt-[120px] tablap:w-[330px] tablap:h-[440px] fablet:m-0 fablet:mr-[35px] fablet:w-[250px] fablet:h-[360px] iphone:m-0 iphone:mb-[25px] iphone:w-full iphone:h-[295px]">
                  <div className="background-img absolute overflow-hidden bg-cover bg-no-repeat bg-scroll top-0 right-0 left-0 bottom-0 bg-[#333]">
                    <Link to={"#"} className="link-overlay"></Link>
                  </div>
                </div>
                <div className="about__text font-normal flex-grow leading-6">
                  <h3 className="about__title mt-0 font-bold">
                    We Are Better Than Others
                  </h3>
                  <div className="about__bio mb-11 md:max-w-3xl leading-6  opacity-80">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco labori
                  </div>
                  <div
                    className="about__signature"
                    style={{ marginBottom: "55px" }}
                  >
                    <img src={require("./images/signature.jpg")}></img>
                  </div>
                  <ul className="about__social md:text-lg m-0 p-0 list-none text-right">
                    <li className="py-0 inline-block">
                      <Link
                        to={"#"}
                        className="text-inherit inline-block py-0 px-2 leading-5 transition-all"
                      >
                        <span className="social-links__icon rounded-full inline-flex h-5 w-5 relative mx-1 bg-opacity-0 hover:text-gray-600">
                          <FontAwesomeIcon
                            title="Follow us on facebook"
                            icon={faFacebookF}
                          ></FontAwesomeIcon>
                        </span>
                      </Link>
                    </li>
                    <li className="py-0 inline-block">
                      <Link
                        to={"#"}
                        className="text-inherit inline-block py-0 px-2 leading-5 transition-all"
                      >
                        <span className="social-links__icon rounded-full inline-flex h-5 w-5 relative mx-1 bg-opacity-0 hover:text-gray-600">
                          <FontAwesomeIcon
                            title="Follow us on linkedin"
                            icon={faLinkedinIn}
                          ></FontAwesomeIcon>
                        </span>
                      </Link>
                    </li>
                    <li className="py-0 inline-block">
                      <Link
                        to={"#"}
                        className="text-inherit inline-block py-0 px-2 leading-5 transition-all"
                      >
                        <span className="social-links__icon rounded-full inline-flex h-5 w-5 relative mx-1 bg-opacity-0 hover:text-gray-600">
                          <FontAwesomeIcon
                            title="Follow us on twitter"
                            icon={faTwitter}
                          ></FontAwesomeIcon>
                        </span>
                      </Link>
                    </li>
                    <li className="py-0 inline-block">
                      <Link
                        to={"#"}
                        className="text-inherit inline-block py-0 px-2 leading-5 transition-all"
                      >
                        <span className="social-links__icon rounded-full inline-flex h-5 w-5 relative mx-1 bg-opacity-0 hover:text-gray-600">
                          <FontAwesomeIcon
                            title="Follow us on instagram"
                            icon={faInstagram}
                          ></FontAwesomeIcon>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blogList relative mb-[110px] laptop:mb-[100px]">
          <div className="container mx-auto">
            <div className="jasmine-heading relative text-center mb-10">
              <h4 className="heading__title inline-block relative m-0 text-4xl leading-6 pr-12 pl-16 z-10">
                Fashion Blogs
              </h4>
            </div>
          </div>
          <div className="container makbook:px-11 iphone:px-8">
            <div className="blogList__inner px-2">
              <div className="new-posts-list -m-4 flex flex-wrap">
                {blogs
                  .filter((item) => item.cat === "Fashion")
                  .sort((a, b) => {
                    return b.averageScore - a.averageScore;
                  })
                  .slice(0, 6)
                  .map((item, i) => (
                    <div key={i} className="new-posts-item">
                      <article className="post-overlay post-overlay-new pl-4 -mx-4 bg-transparent flex relative overflow-hidden">
                        <div className="post__thumb-overlay-fashion absolute w-full h-full">
                          <Link to={`/blog/${item._id}`} className="">
                            <img
                              className="w-full h-full object-cover align-middle block"
                              src={item.imgurl}
                            ></img>
                          </Link>
                        </div>
                        <div className="post__text-overlay post__text-new z-10 pointer-events-none flex items-end pt-10 relative w-full text-white">
                          <div className="post__text-wrap mb-0 pl-4 relative w-full">
                            <div className="post__text-inner px-6 pb-6 -ml-4 relative">
                              <Link
                                to={`/category/${item.cat}`}
                                className="post__cat-overlay pointer-events-auto absolute block mb-4 text-xs font-normal uppercase text-white mr-2"
                              >
                                {item.cat}
                              </Link>
                              <h3 className="post__title-overlay text-white text-base font-medium mb-2 whitespace-normal break-words pointer-events-auto">
                                <Link to={"#"} className="inline-block">
                                  {item.title}
                                </Link>
                              </h3>
                              <div className="post__meta my-0 text-sm">
                                <time className="time font-light whitespace-nowrap">
                                  {parsIsoDate(item.createdAt)}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="allBlogs relative mb-10 laptop:mb-[70px]">
          {/* <div className="container mx-auto">
            <div className="jasmine-heading relative text-center mb-16">
              <h4 className="heading__title inline-block relative m-0 text-4xl leading-6 pr-12 pl-16 z-10">
                The Latest Blogs
              </h4>
            </div>
          </div> */}
          <div className="container px-[15px]  makbook:px-32">
            <div className="allBlogs-content">
              <div className="row -mx-[15px] before:table before:content-[' ']">
                <div className="col px-[15px] float-left tablet:w-full tablet:pr-[15px] tablap:w-[680px] LCD:w-[900px]">
                  <div className="main-col flex my-0 relative">
                    <div className="main-col-inner w-full relative">
                      <div className="allBlogs-posts flex flex-col p-0 -my-10">
                        {blogs.slice(0, count).map((i, index) => (
                          <div
                            key={index}
                            className="allBlogs-post w-full border-b border-[#0000000d] py-10"
                          >
                            <article className="w-full flex iphone:flex-col relative">
                              <div className="post-image tablet:h-[300px] iphone:w-full w-1/2 laptop:mt-0 LED:mr-[30px] LED:mb-[50px] LED:ml-[50px]  tablap:h-[365px] md:float-left  LCD:mt-0 LCD:mr-[75px] LCD:mb-[70px] LCD:ml-[70px]  LCD:h-[385px] relative before:iphone:left-0 before:iphone:bottom-0  before:LCD:-left-[70px] before:LCD:-bottom-[70px] before:LED:-left-[50px] before:LED:-bottom-[50px] before:content-[''] before:absolute before:w-full before:h-full before:bg-[#607027] before:-z-[1]">
                                <Link
                                  to={`/blog/${i._id}`}
                                  className="w-full h-full black"
                                >
                                  <img
                                    className="w-full h-full object-cover"
                                    src={i.imgurl}
                                  ></img>
                                </Link>
                                <div className="post__tags laptop:w-[calc(100%-50px)] laptop:h-[50px] flex items-center overflow-hidden text-left text-[#ffffffb3] w-[calc(100%-70px)] h-[70px]">
                                  <ul className="tag-list inline-block -m-1 p-0 align-middle">
                                    {i.hashtag?.slice(0, 3).map((j, k) => (
                                      <li
                                        key={k}
                                        className="m-1 inline-block py-0 leading-4"
                                      >
                                        <Link
                                          to={`/hashtag/${j.name}`}
                                          className="post-tag w-full h-full text-xs before:content-['#'] hover:text-white"
                                        >
                                          {j.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="post-text md:w-1/2 pt-[35px] md:text-center overflow-hidden">
                                <Link
                                  to={`/category/${i.cat}`}
                                  className="mb-[15px] mr-2 font-normal text-[11px] uppercase inline-block py-[7px] px-[14px] md:py-2 md:px-[18px] bg-[#607027] text-white"
                                >
                                  {i.cat}
                                </Link>
                                <h3 className="iphone:text-[1.5rem] iphone:leading-[1.4] iphone:mb-[15px] mb-[20px] fablet:text-[1.7rem] fablet:leading-[1.3] makbook:text-[1.8rem] font-bold mx-auto whitespace-normal break-words">
                                  <Link
                                    to={`/blog/${i._id}`}
                                    // style={{ display: "-webkit-box" }}
                                    className="overflow-hidden"
                                  >
                                    {i.title}
                                  </Link>
                                </h3>
                                <div className="post__excerpt iphone:mb-0 md:mb-[20px] md:mx-auto text-[#888] text-[1.07rem] leading-6">
                                  <div className="excerpt">
                                    <p
                                      className="blogText_homePage overflow-hidden text-ellipsis"
                                      dangerouslySetInnerHTML={{
                                        __html: i.content,
                                      }}
                                    ></p>
                                  </div>
                                </div>
                                <ul className="social-list iphone:hidden mb-0 opacity-80 text-base">
                                  <li className="py-0 inline-block">
                                    <Link
                                      to={"#"}
                                      className="px-[0.4em] inline-block hover:text-gray-600 text-[#000000cc] leading-5 w-[22px] h-[22px] bg-opacity-0 mx-[5px] relative rounded-full"
                                    >
                                      <div className="share-item__icon">
                                        <FontAwesomeIcon
                                          title="twitter"
                                          icon={faTwitter}
                                        ></FontAwesomeIcon>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="py-0 inline-block">
                                    <Link
                                      to={"#"}
                                      className="px-[0.4em] inline-block hover:text-gray-600 text-[#000000cc] leading-5 w-[22px] h-[22px] bg-opacity-0 mx-[5px] relative rounded-full"
                                    >
                                      <div className="share-item__icon">
                                        <FontAwesomeIcon
                                          title="facebook"
                                          icon={faFacebookF}
                                        ></FontAwesomeIcon>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="py-0 inline-block">
                                    <Link
                                      to={"#"}
                                      className="px-[0.4em] inline-block hover:text-gray-600 text-[#000000cc] leading-5 w-[22px] h-[22px] bg-opacity-0 mx-[5px] relative rounded-full"
                                    >
                                      <div className="share-item__icon">
                                        <FontAwesomeIcon
                                          title="linkedin"
                                          icon={faLinkedinIn}
                                        ></FontAwesomeIcon>
                                      </div>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-gray-200 sub-col tablap:w-[290px] relative overflow-visible float-left px-[15px] LCD:w-[300px]"></div> */}
              </div>
            </div>

            <div className="load-more flex justify-center">
              <button
                className="bg-[#607027] py-[10px] px-[50px] text-base font-normal border-0 focus:outline-0 uppercase tracking-[1px] outline-none text-white mt-[70px]"
                onClick={() => loadMore()}
              >
                <span className="">Load more</span>
                <span className="loading"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
