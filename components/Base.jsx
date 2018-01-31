import React from "react";

import {Search} from "./Search";
import {TopSites} from "./TopSites";
import {Pocket} from "./Pocket";
import {Highlights} from "./Highlights";

export class Base extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.state = {
      layout: "more-columns"
    };
  }
  onLayoutChange(ev) {
    this.setState({layout: ev.target.value});
  }
  render() {
    return (<div className="outer-wrapper">
      <div className="top-bar">
        <select onChange={this.onLayoutChange}>
          <option value="more-columns">More columns</option>
          <option value="wider-columns">Wider columns</option>
        </select>
      </div>
      <main className={this.state.layout}>
        <Search />
        <TopSites rows={2} />
        <div className="sections-list">
          <Pocket rows={2} />
          <Highlights />
        </div>
      </main>
    </div>);
  }
}
