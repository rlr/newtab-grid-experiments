import React from "react";

import {Search} from "./Search";
import {TopSites} from "./TopSites";
import {Pocket} from "./Pocket";
import {Highlights} from "./Highlights";

export const Base = () => <div className="outer-wrapper">
  <main>
    <Search />
    <TopSites rows={2} />
    <div className="sections-list">
      <Pocket rows={2} />
      <Highlights />
    </div>
  </main>
</div>;
