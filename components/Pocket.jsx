import React from "react";

const data = [
  {
    hostname: "betterhumans.coach",
    url: "https://betterhumans.coach.me/how-to-powerhouse-through-sleep-deprivation-30c1d1c7247a",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F0%2Au52XKZLLApRvBMx3.&amp;resize=w450",
    title: "How to Powerhouse through Sleep Deprivation",
    description: "Sleep deprivation takes a sharp toll on the human brain and body, impairing cognition, motor ability, and mood. Willpower, memory, judgement, and attention all suffer. You drop and bump into things, crave sugar, overeat, and gain weight."
  },
  {
    hostname: "hbr",
    url: "https://hbr.org/2018/01/the-art-of-strategy-is-about-knowing-when-to-say-no",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fhbr.org%2Fresources%2Fimages%2Farticle_assets%2F2018%2F01%2Fjan18_11_Hayon-Thapaliya.jpg&amp;resize=w450",
    title: "The Art of Strategy Is About Knowing When to Say No",
    description: "When HubSpot was in its earliest stages, I used to say yes to almost anything: new features, new initiatives, new ideas. It empowered my team to move fast and get things done. I prided myself on being a “yes” man."
  },
  {
    hostname: "jalopnik",
    url: "https://jalopnik.com/how-goodyear-hid-evidence-of-the-worst-tire-made-in-his-1822200424",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--SsbDg86L--%2Fc_fit%2Cfl_progressive%2Cq_80%2Cw_636%2Fzlusnt0qqm2rabq6hoe5.jpg&amp;resize=w450",
    title: "How Goodyear Hid Evidence Of 'The Worst Tire Made In History' Linked To At Least 9 Deaths",
    description: "In October 2003, Billy Wayne Woods and his family packed into a luxury $181,000 motorhome for a fun getaway to Florida."
  },
  {
    hostname: "kottke",
    url: "https://kottke.org/18/01/if-you-watch-closely-enough-everything-is-a-speaker",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=http%3A%2F%2Fimg.youtube.com%2Fvi%2FFKXOucXB4a8%2F0.jpg&amp;resize=w450",
    title: "If you watch closely enough, everything is a speaker",
    description: "Using high speed cameras, it’s possible to record the vibrations of everyday objects caused by nearby sounds and reverse engineer the sounds…essentially turning anything that vibrates into a speaker."
  }
];

export const Pocket = () => <section className="collapsible-section section animation-enabled">
  <div className="section-top-bar">
    <h3 className="section-title">
      <span className="click-target">
        <span className="icon icon-small-spacer icon-pocket"></span>
        <span>Recommended by Pocket</span>
        <span className="collapsible-arrow icon icon-arrowhead-down"></span>
      </span>
    </h3>
  </div>
  <div className="section-body">
    <ul className="section-list" style={{padding:0}}>
      {data.map((site) => <Card {...site} />)}
    </ul>
  </div>
</section>;

const Card = props => <li className="card-outer">
  <a href={props.url}>
    <div className="card">
      <div className="card-preview-image-outer">
        <div className="card-preview-image loaded" style={{backgroundImage: `url(${props.image})`}}></div>
      </div>
      <div className="card-details">
        <div className="card-host-name">{props.hostname}</div>
        <div className="card-text">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-description">{props.description}</p>
        </div>
        <div className="card-context">
          <span className="card-context-icon icon icon-trending"></span>
          <div className="card-context-label">
            <span>Trending</span>
          </div>
        </div>
      </div>
    </div>
  </a>
</li>;
