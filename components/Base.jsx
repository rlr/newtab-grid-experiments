import React from "react";

import {Search} from "./Search";
import {TopSites} from "./TopSites";
import {Pocket} from "./Pocket";
import {Highlights} from "./Highlights";

export class Base extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onTopSitesRowsChange = this.onTopSitesRowsChange.bind(this);
    this.onTopSitesChange = this.onTopSitesChange.bind(this);
    this.onPocketChange = this.onPocketChange.bind(this);
    this.state = {
      topsitesRows: 2,
      topsites: "smaller-topsites",
      pocket: "wider-columns"
    };
  }
  onTopSitesRowsChange(ev) {
    this.setState({topsitesRows: parseInt(ev.target.value)});
  }
  onTopSitesChange(ev) {
    this.setState({topsites: ev.target.value});
  }
  onPocketChange(ev) {
    this.setState({pocket: ev.target.value});
  }
  render() {
    return (<div className="outer-wrapper">
      <div className="top-bar">
        <select onChange={this.onTopSitesRowsChange}>
          <option value="1">1 row of Top Sites</option>
          <option value="2" selected="selected">2 rows of Top Sites</option>
        </select>
        <select onChange={this.onTopSitesChange}>
          <option value="smaller-topsites">Smaller Top Sites</option>
          <option value="normal-topsites">Normal Top Sites</option>
          <option value="bigger-topsites">Bigger Top Sites</option>
        </select>
        <select onChange={this.onPocketChange}>
          <option value="wider-columns">Wider pocket columns</option>
          <option value="more-columns">More pocket columns</option>
        </select>
      </div>
      <main className={`${this.state.topsites} ${this.state.pocket} ${this.state.topsitesRows === 1 ? "topsites-one-row" : ""}`}>
        <Search />
        <TopSites rows={this.state.topsitesRows} />
        <div className="sections-list">
          <Pocket rows={2} />
          <Highlights />
        </div>
      </main>
    </div>);
  }
}
