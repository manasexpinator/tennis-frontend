import React, { Component, Fragment } from "react";
const notiList = [
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-heart bg-red-gradiant",
    subject: "John",
    attach: "attach",
    time: "12 minute ago",
    read: "bg-lightblue theme-light-bg",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-thumbs-up bg-primary-gradiant",
    subject: "John",
    attach: "attach",
    time: "45 minute ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-thumbs-up bg-primary-gradiant",
    subject: "John",
    attach: "attach",
    time: "1 hour ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-heart bg-red-gradiant",
    subject: "John",
    attach: "attach",
    time: "2 hour ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-heart bg-red-gradiant",
    subject: "John",
    attach: "attach",
    time: "5 hour ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-heart bg-red-gradiant",
    subject: "John",
    attach: "attach",
    time: "12 hour ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },

  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-heart bg-red-gradiant",
    subject: "John",
    attach: "attach",
    time: "12 minute ago",
    read: "bg-lightblue theme-light-bg",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-thumbs-up bg-primary-gradiant",
    subject: "John",
    attach: "attach",
    time: "45 minute ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-thumbs-up bg-primary-gradiant",
    subject: "John",
    attach: "attach",
    time: "1 hour ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-heart bg-red-gradiant",
    subject: "John",
    attach: "attach",
    time: "2 hour ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-heart bg-red-gradiant",
    subject: "John",
    attach: "attach",
    time: "5 hour ago",
    read: "",
    public: "Public",
    meetup: "Meet up",
  },
  {
    imageUrl: "user.png",
    title: "When should I buy investment property?",
    status: "feather-heart bg-red-gradiant",
    subject: "John",
    attach: "attach",
    time: "12 hour ago",
    read: "bg-lightblue theme-light-bg",
    public: "Public",
    meetup: "Meet up",
  },
];
class FourmTabList extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="fw-700 px-0 mt-3 mb-3">Forum Discussions Started</h1>
        <div class="card px-0">
          <div class="card-header py-4 ps-3 h3 fw-700">All Discussions</div>
          <div class="card-body">
            <ul>
              {notiList.map((value, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`d-flex align-items-center p-3 rounded-3 ${value.read}`}
                  >
                    <img
                      src={`assets/images/${value.imageUrl}`}
                      alt="user"
                      className="w45 me-3 rounded-circle"
                    />

                    <h6 className="font-xss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20">
                      <strong>{value.title}</strong>
                      <span className="d-flex text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto align-items-center">
                        <a href="#">
                          <i className="ti-share text-grey-500 font-xsss pe-2"></i>
                        </a>
                        {value.subject}, {value.time}
                        <p className="fw-500 font-xssss text-grey-500 mt-0 ms-2 mb-0 item-meta">
                          <span class="group-visibility public">
                            {value.public}
                          </span>
                          <span class="group-type bb-current-group-meetups">
                            {value.meetup}
                          </span>
                        </p>
                      </span>
                    </h6>

                    <span
                      className="badge badge-primary ms-auto font-xsss px-2 py-2"
                      style={{ backgroundColor: "#7CA3A9" }}
                    >
                      Politic News
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FourmTabList;
