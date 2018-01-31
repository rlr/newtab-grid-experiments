import React from "react";

const data = [
  {
    label: "youtube",
    url: "https://www.youtube.com/",
    image: "https://m.youtube.com/yts/mobile/img/apple-touch-icon-144x144-precomposed-vflopw1IA.png"
  },
  {
    label: "facebook",
    url: "https://www.facebook.com/",
    image: "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/58f-pmGQqDv.png"
  },
  {
    label: "amazon",
    url: "https://www.amazon.com/",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/anywhere/a_smile_196x196._CB368246573_.png"
  },
  {
    label: "reddit",
    url: "https://www.reddit.com/",
    image: "https://www.redditstatic.com/mweb2x/favicon/192x192.png"
  },
  {
    label: "wikipedia",
    url: "https://www.wikipedia.org/",
    image: "https://www.wikipedia.org/static/apple-touch/wikipedia.png"
  },
  {
    label: "twitter",
    url: "https://twitter.com/",
    image: "https://abs-0.twimg.com/responsive-web/web/ltr/icon-ios.a9cd885bccbcaf2f.png"
  }
];

export const TopSites = props => {
  const placeholders = new Array(props.rows * 8 - data.length).fill(undefined);
  return <section className="collapsible-section top-sites">
    <div className="section-top-bar">
      <h3 className="section-title">
        <span className="click-target">
          <span className="icon icon-small-spacer icon-topsites"></span>
          <span>Top Sites</span>
          <span className="collapsible-arrow icon icon-arrowhead-down"></span>
        </span>
      </h3>
    </div>
    <div className="section-body">
      <ul className="top-sites-list">
        {data.map((site) => <TopSite {...site} />)}
        {placeholders.map(() => <TopSite />)}
      </ul>
    </div>
  </section>;
};

const TopSite = props => <li className={`top-site-outer${props.url ? "" : " placeholder"}`}>
  <div className="top-site-inner">
    <a href={props.url}>
      <div className="tile">
        <div className="top-site-icon rich-icon" style={{"backgroundImage": `url(${props.image})`}}></div>
      </div>
      <div className="title">
        <span>{props.label}</span>
      </div>
    </a>
  </div>
</li>;
